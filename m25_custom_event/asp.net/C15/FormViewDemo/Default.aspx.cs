using System;
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
using System.IO;

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    /// <summary>
    /// 查询指定的EmployeeID的用户名称
    /// </summary>
    /// <param name="EmployeeID"></param>
    /// <returns></returns>
    protected string EmployeeIDToName(int EmployeeID)
    {
        string connectionstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connectionstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select ISNULL(FirstName+' '+lastName,'Unassign') as Name from Employees Where EmployeeID=@EmployeeID", conn);
            cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);
            return (string)cmd.ExecuteScalar();
        }
    }
}
