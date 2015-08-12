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
using System.Data.SqlClient;

public partial class UsingDataAccess : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //实例化数据访问类
        NorthwindDataAccess nda = new NorthwindDataAccess();
        //获取数据源
        GridView1.DataSource = nda.GetProducts();
        //数据绑定
        try
        {
            GridView1.DataBind();
        }
        catch (SqlException ex)
        {
            Label1.Text = "数据访问出错，错误消息是：" + ex.Message;
        }
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        //实例化数据访问类
        NorthwindDataAccess nda = new NorthwindDataAccess();
        GridView1.DataSource = nda.GetCustOrdersDetails(10248);
        GridView1.DataBind();
        
    }
}
