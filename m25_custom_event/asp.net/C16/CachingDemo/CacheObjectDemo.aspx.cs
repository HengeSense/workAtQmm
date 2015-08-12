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
using System.Web.Configuration;
using System.Data.SqlClient;
using System.Web.Caching;

public partial class CacheObjectDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //首先从Cache中获取Dataset
        DataSet productds = (DataSet)Cache["Products"];
        //如果Cache中不存在DataSet，则从数据库中获取DataSet，并添加到缓存中
        if (productds == null)
        {
            productds = GetProductDataSet();
            //Cache.Insert("Products", productds);
            //该对象将在1小时后失效，这里使用了绝对到期时间
            //Cache.Insert("Products", productds, null, DateTime.Now.AddHours(1),System.Web.Caching.Cache.NoSlidingExpiration);
            //使用可调日期，在最后一次访问1小时候缓存过期
           // Cache.Insert("Products", productds, null, 
            //    System.Web.Caching.Cache.NoAbsoluteExpiration, TimeSpan.FromHours(1));            
            //创建一个基于web.config配置文件的依赖，当该文件发生变化时，则从缓存中移除缓存项。
            CacheDependency cd = new CacheDependency(Server.MapPath("web.config"));
            //在Insert中指定该依赖项，并且指定缓存的优先级为高优先级
            Cache.Insert("Products", productds, cd, System.Web.Caching.Cache.NoAbsoluteExpiration, TimeSpan.FromHours(1),CacheItemPriority.High,null);
        }
        GridView1.DataSource = productds;
        GridView1.DataMember = "productsTable";
        GridView1.DataBind();
    }
    /// <summary>
    /// 从数据库中获取产品信息，并返回一个DataSet对象
    /// </summary>
    /// <returns></returns>
    protected DataSet GetProductDataSet()
    {
        string connstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;     
        DataSet ds=new DataSet();
        using (SqlConnection conn = new SqlConnection(connstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select * from Products", conn);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            sda.Fill(ds,"productsTable");            
        }
        return ds;
    }
}
