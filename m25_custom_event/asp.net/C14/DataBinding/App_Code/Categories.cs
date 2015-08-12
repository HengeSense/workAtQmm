using System;
using System.Web.Configuration;
using System.Data.SqlClient;
/// <summary>
///Categories 的摘要说明
/// </summary>
public class Categories
{
	public Categories()
	{
	}
    public SqlDataReader GetCategories()
    {
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        SqlDataReader reader = null;
        SqlConnection conn = new SqlConnection(connectionStr);
        //打开连接
        conn.Open();
        SqlCommand cmd = new SqlCommand("select * from Categories", conn);
        reader = cmd.ExecuteReader();
        //返回一个SqlDataReader对象
        return reader;
    }
}
