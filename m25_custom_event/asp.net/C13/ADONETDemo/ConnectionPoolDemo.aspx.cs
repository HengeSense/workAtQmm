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

public partial class ConnectionPoolDemo : System.Web.UI.Page
{  
    protected void btnpool_Click(object sender, EventArgs e)
    {
        //指定连接字符串
        string connectionString = "Data Source=.;Initial Catalog=Northwind;Persist Security Info=True;User ID=sa;Password=888888";
        SqlConnection testConnection = new SqlConnection(connectionString);
        //获取在开始连接之前的时间刻度数
        long startTicks = DateTime.Now.Ticks;
        //依次打开和关闭100次连接
        for (int i = 1; i <= 100; i++)
        {
            testConnection.Open();
            testConnection.Close();
        }
        long endTicks = DateTime.Now.Ticks;
        lblpool.Text="使用连接池后所花费的时间是："+(endTicks-startTicks).ToString()+"ticks.";
        //使用完毕后注意释放连接
        testConnection.Dispose();
    }
    protected void btnnopool_Click(object sender, EventArgs e)
    {
        //指定连接字符串,注意这里使用pooling=false禁用了连接池
         string connectionString = "Data Source=.;Initial Catalog=Northwind;Persist Security Info=True;User ID=sa;Password=888888;pooling=false";
        SqlConnection testConnection = new SqlConnection(connectionString);
        //获取在开始连接之前的时间刻度数
        long startTicks = DateTime.Now.Ticks;
        //依次打开和关闭100次连接
        for (int i = 1; i <= 100; i++)
        {
            testConnection.Open();
            testConnection.Close();
        }
        long endTicks = DateTime.Now.Ticks;
        lblnopool.Text="不使用连接池后所花费的时间是："+(endTicks-startTicks).ToString()+"ticks.";
        //使用完毕后注意释放连接
        testConnection.Dispose();
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        string connectionString = "Data Source=.;Initial Catalog=Northwind;Persist Security Info=True;User ID=sa;Password=888888;pooling=false";
        SqlConnection conn = new SqlConnection(connectionString);
        try
        {
            conn.Open();
            if (conn.State == ConnectionState.Open)
            {
                Label1.Text="连接已经打开";
            }
            //清除所有连接池
            SqlConnection.ClearAllPools();   
        }
        catch (SqlException ex)
        {
            Label1.Text=string.Format("出现连接错误：{0}", ex.Message);
        }
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        string connectionString = "Data Source=.;Initial Catalog=Northwind;Persist Security Info=True;User ID=sa;Password=888888;pooling=false";
        SqlConnection conn = new SqlConnection(connectionString);
        try
        {
            conn.Open();
            if (conn.State == ConnectionState.Open)
            {
                Label1.Text = "连接已经打开";
            }
            //清除指定连接的连接池
            SqlConnection.ClearPool(conn);
        }
        catch (SqlException ex)
        {
            Label1.Text = string.Format("出现连接错误：{0}", ex.Message);
        }
    }
}
