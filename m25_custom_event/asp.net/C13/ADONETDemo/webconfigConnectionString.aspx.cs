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
//需发添加此命名空间
using System.Web.Configuration;
using System.Data.SqlClient;
public partial class webconfigConnectionString : System.Web.UI.Page
{
    protected void Button1_Click(object sender, EventArgs e)
    {
        //使用WebConfigurationManager获取web.config配置文件中的连接字符串
        string ConnectionString = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //使用连接字符串构造一个SqlConnection实例
        SqlConnection conn = new SqlConnection(ConnectionString);
        try
        {
            //打开连接
            conn.Open();
            //如果当前连接状态打开，则显示成功打开的信息
            if (conn.State == ConnectionState.Open)
            {
                lblInfo.Text = "当前数据库己经连接！<br/>";
                lblInfo.Text += "连接字符串为：" + conn.ConnectionString;
            }
        }
        catch (SqlException ex)
        {
            lblInfo.Text = "当前数据库连接失败！<br/>";
            lblInfo.Text += "失败的原因是：" + ex.Message;
        }
        finally
        {
            //调用Close方法即时的关闭连接
            if (conn.State == ConnectionState.Open)
                conn.Close();
        }    
    }
}
