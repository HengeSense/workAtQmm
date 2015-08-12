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
//添加此命名空间
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web.Configuration;

public partial class LINQToDataSetDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //真充DataSet
        FillDataSet();
    }
    //私有变量，类内部使用
    private DataSet ds = new DataSet();
    //一个填充Northwind数据库中产品和供应商到DataSet中去的函数
    protected void FillDataSet()
    {
        string conntionstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(conntionstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("select * from products;select * from suppliers", conn);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            sda.TableMappings.Add("Table","Products");
            sda.TableMappings.Add("Table1","Suppliers");
            sda.Fill(ds);            
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        SingTableQuery();
    }
    //执行单表LINQ to SQL查询
    protected void SingTableQuery()
    { 
        //首先获取DataSet中的表
        DataTable products=ds.Tables["Products"];
        //注意在LINQ to DataSet中需要使用AsEnumerable和Field<T>扩展方法来类型化查询
        var query = from product in products.AsEnumerable()
                    where product.Field<int>("ProductID") > 60
                    select new
                    {
                        产品编码 = product.Field<int>("ProductID"),
                        产品名称 = product.Field<string>("ProductName"),
                        产供应商编码 = product.Field<int>("SupplierID")
                    };
        //绑定到GridView控件
        GridView1.DataSource = query;
        GridView1.DataBind();
    }


    protected void MorethanOneTableQuery()
    {
        //获取两个DataTable实例以便进行查询
        DataTable Products = ds.Tables["Products"];
        DataTable Suppliers = ds.Tables["Suppliers"];
        //使用Join查询两个表的数据
        var query = from product in Products.AsEnumerable()
                    join Supplier in Suppliers.AsEnumerable()
                    on product.Field<int>("SupplierID") equals
                    Supplier.Field<int>("SupplierID")
                    where product.Field<int>("ProductID") > 60
                    //投影一个新对象
                    select new
                    {
                        产品编码 = product.Field<int>("ProductID"),
                        产品名称 = product.Field<string>("ProductName"),
                        供应商名称 = Supplier.Field<string>("CompanyName"),
                        供应商联系人 = Supplier.Field<string>("Contactname"),
                        所在城市=Supplier.Field<string>("City")
                    };
        //绑定到GridView控件
        GridView1.DataSource = query;
        GridView1.DataBind();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        MorethanOneTableQuery();
    }
}
