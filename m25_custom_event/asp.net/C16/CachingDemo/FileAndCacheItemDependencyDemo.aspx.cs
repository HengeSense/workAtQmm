using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
//需要引入如下的类
using System.Web.Configuration;
using System.Data.SqlClient;
using System.Web.Caching;


public partial class FileAndCacheItemDependencyDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Label1.Text = "";
    }
    protected void Button1_Click(object sender, EventArgs e)
    {        
        string sqlstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;        
        using (SqlConnection conn = new SqlConnection(sqlstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select top 5 * from products", conn);
            DataSet ds = new DataSet("ProductInfo");
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds, "Products");
            ds.WriteXml(Server.MapPath("Products.xml"));            
        }

    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        DataSet ds = new DataSet();
        //从XML中读取XML文件
        ds.ReadXml(Server.MapPath("Products.xml"));
        //创建一个与该文件相关联的缓存依赖对象
        CacheDependency cd = new CacheDependency(Server.MapPath("Products.xml"));
        //将DataSet与缓存依赖之间建立关联，这样当更改文件时，则相应的缓存项也会被移除。
        Cache.Insert("ProductFile", ds, cd, DateTime.Now.AddHours(1), System.Web.Caching.Cache.NoSlidingExpiration, CacheItemPriority.High, null);
        GridView1.DataSource = ds;
        GridView1.DataMember = "Products";
        GridView1.DataBind();
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        DataSet ds = new DataSet();
        ds.ReadXml(Server.MapPath("Products.xml"));
        ds.Tables[0].Rows[1].BeginEdit();
        ds.Tables[0].Rows[1][1]="修改后的文件";
        ds.Tables[0].Rows[1].EndEdit();
        ds.WriteXml(Server.MapPath("Products.xml"));
    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        //获取缓存信息
        DataSet ds = (DataSet)Cache["ProductFile"];
        if (ds != null)
        {
            GridView2.DataSource = ds;
            GridView2.DataMember = "Products";
            GridView2.DataBind();
        }
        else
        {
            GridView2.DataBind();
            Label1.Text = "缓存己经被移除";
        }

    }
    protected void AggregateCacheDependencyDemo()
    {
        DataSet ds = new DataSet();
        ds.ReadXml(Server.MapPath("Products.xml"));
        //聚合依赖示例程序
        string[] productkeys = null;
        productkeys[0] = "ProductFile";
        CacheDependency dep1 = new CacheDependency(null, productkeys);
        CacheDependency dep2 = new CacheDependency(Server.MapPath("Product1.xml"));
        CacheDependency dep3 = new CacheDependency(Server.MapPath("Product2.xml"));
        //创建一个聚合数组
        CacheDependency[] dependencies = new CacheDependency[] { dep1, dep2 };
        //实例化聚合依赖
        AggregateCacheDependency aggregateDep = new AggregateCacheDependency();
        //将依赖数组添加到聚合依赖中
        aggregateDep.Add(dependencies);
        //添加依赖项
        Cache.Insert("ProductInfo", ds, aggregateDep);
    }

    /// <summary>
    /// 从数据库中获取产品信息，并返回一个DataSet对象
    /// </summary>
    /// <returns></returns>
    protected DataSet GetProductDataSet()
    {
        string connstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        DataSet ds = new DataSet();
        using (SqlConnection conn = new SqlConnection(connstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select * from Products", conn);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            sda.Fill(ds, "productsTable");
        }
        return ds;
    }
    //启用SQL缓存依赖
    protected void EnableSqlDenpendency()
    {
        DataSet ds = (DataSet)Cache["ProductsInfo"];
        if (ds == null)
        {
            ds = GetProductDataSet();
            //指定SQL缓存依赖
            SqlCacheDependency sqldependency =new SqlCacheDependency("NorthwindDataBase","Products");
            Cache.Insert("ProductsInfo", ds, sqldependency);
        }
    }
}

