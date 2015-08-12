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
//添加下面的命名空间
using System.Web.Configuration;
using System.Data.SqlClient;
using System.Data.Linq;
using System.Collections.Generic;

public partial class DataContextObjectDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    string connstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    protected void GetDataContext()
    {
        //获取DataContext对象，指定连接
        DataContext dc = new DataContext(connstr);
        //获取Products表
        Table<Products> producttable = dc.GetTable<Products>();
        //绑定到GridView控件
        GridView1.DataSource = producttable;
        GridView1.DataBind();
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        GetDataContext();
    }

    protected void QueryTable()
    {
        //获取DataContext对象，指定连接
        DataContext dc = new DataContext(connstr);
        //获取Products表
        Table<Products> producttable = dc.GetTable<Products>();
        var query = from product in producttable
                    where product.ProductID > 60
                    orderby product.ProductID descending
                    select product;
        //使用toString获取查询字符中
        Label1.Text = query.ToString();
        GridView1.DataSource = query;
        GridView1.DataBind();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        QueryTable();
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        //获取DataContext对象，指定连接
        DataContext dc = new DataContext(connstr);
        //获取Products表
        Table<Products> producttable = dc.GetTable<Products>();
        IEnumerable<Products> query = from product in producttable.AsEnumerable<Products>()
                    where ProductID(product)
                    orderby product.ProductID descending
                    select product;
        //使用toString获取查询字符中
        GridView1.DataSource = query;
        GridView1.DataBind();
    }
    protected bool ProductID(Products prod)
    {
        return prod.ProductID <= 60;
    }
}
