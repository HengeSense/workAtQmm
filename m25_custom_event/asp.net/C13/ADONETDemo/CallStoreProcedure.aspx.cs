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
using System.Web.Configuration;

public partial class CallStoreProcedure : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            ddlCategory.DataSource = GetProductCategory();
            ddlCategory.DataTextField = "CategoryName";
            ddlCategory.DataBind();
        }
    }
    protected SqlDataReader GetProductCategory()
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        SqlConnection conn = new SqlConnection(connectionStr);
        conn.Open();
        //新建一个SqlCommand对象
        SqlCommand cmd = new SqlCommand("Select CategoryName from Categories", conn);
        return cmd.ExecuteReader(CommandBehavior.CloseConnection);        
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        GetReport(ddlCategory.SelectedValue, txtYear.Text);
    }
    protected void GetReport(string categoryName, string years)
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        SqlConnection conn = new SqlConnection(connectionStr);
        conn.Open();
        //这里指定存储过程名称
        SqlCommand cmd = new SqlCommand("SalesByCategory", conn);
        //这里指定存储过程类型
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@CategoryName", categoryName);
        cmd.Parameters.AddWithValue("@OrdYear", years);
        //执行SQL命令并进行数据绑定
        SqlDataReader sdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
        GridView1.DataSource = sdr;
        GridView1.DataBind();
        conn.Dispose();
    }
}
