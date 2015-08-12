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
//添加如下的命名空间
using System.Data.SqlClient;
public partial class CloseandDispose : System.Web.UI.Page
{
    protected void Button1_Click(object sender, EventArgs e)
    {
        SqlConnectionStringBuilder connBuilder = new SqlConnectionStringBuilder();
        //DataSource表示数据源位置，可以是IP地址，也可以指定一个DNS名称
        connBuilder.DataSource = ".";
        //InitialCataLog指定需要连接的数据库的名称
        connBuilder.InitialCatalog = "Northwind";
        //IntergrateSecurity表示是否使用整合身份验证进行登录数据库
        connBuilder.IntegratedSecurity = false;
        //不使用整合Windows身份验证时，指定用户ID和密码
        connBuilder.UserID = "sa";
        connBuilder.Password = "888888";
        //使用SqlConnectionStringBuilder.ToString()方法将会输出连接字符串
        SqlConnection conn = new SqlConnection(connBuilder.ToString());
        try
        {
            conn.Open();
            conn.Dispose();
            conn.Open();
            if (conn.State == ConnectionState.Open)
            {
                 lblInfo.Text = "连接已经打开<br/>";
                 lblInfo.Text += "当前连接字符串为：" + conn.ConnectionString;
            }
        }
        catch (Exception ex)
        {
            if (conn.State != ConnectionState.Open)
            {
               lblInfo.Text ="连接失败<br/>";
               lblInfo.Text += string.Format("错误的信息是：{0}", ex.Message);
            }
        }
        finally
        {
            //关闭一个连接，还可以通过conn.Open方法重新打开
            if (conn.State == ConnectionState.Open)
            {
                conn.Close();
            }
            //关闭并释放连接，不可以再次直接用conn.Open方法打开，必须再次重新初始化连接再打开
            if (conn.State == ConnectionState.Open)
            {
                conn.Dispose();
            }
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }
}
