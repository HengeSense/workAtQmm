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
//添加这几个命名空间
using System.Web.Configuration;
using System.Data.SqlClient;
using System.Transactions;
public partial class TransactionDemoPage : System.Web.UI.Page
{
    protected void Button1_Click(object sender, EventArgs e)
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["TransactionDemoConnectionString1"].ConnectionString;
        //定义事务变量
        SqlTransaction transaction = null;
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {            
            conn.Open();
            try
            {
                //调用SqlConnection的BeginTransaction方法开启一个事务，并返回己经开启的事务。
                transaction = conn.BeginTransaction();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = conn;
                //需要指定要添加到事务中去的SqlCommand对象
                cmd.Transaction = transaction;
                cmd.CommandText = "Update BankA Set Balance=Balance-3000 Where Account='1234'";
                cmd.ExecuteNonQuery();
                cmd.CommandText = "Update BankB Set Balance=Balance+3000 where  Account='4321'";
                cmd.ExecuteNonQuery();
                //提交事务，修改将回到数据库中。
                transaction.Commit();
                GridView1.DataBind();
                GridView2.DataBind();
            }
            catch (Exception ex)
            {
                //回滚事务
                transaction.Rollback();
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }
    }
}
