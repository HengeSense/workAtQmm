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
//
using System.Data.SqlClient;
using System.Web.Configuration;

public partial class SqlCommandSelectProduct : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            DropDownList1.DataSource = GetSupplier();
            DropDownList1.DataTextField = "SupplierID";
            DropDownList1.DataBind();
        }
    }

    private SqlDataReader GetSupplier()
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        SqlConnection conn = new SqlConnection(connectionStr);
        conn.Open();
        //新建一个SqlCommand对象
        SqlCommand cmd = new SqlCommand("select distinct supplierID from Products", conn);
        return cmd.ExecuteReader(CommandBehavior.CloseConnection);
        conn.Dispose();
    }

    private void GetSpecialProduct(int SupplierID)
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        SqlConnection conn = new SqlConnection(connectionStr);
        conn.Open();
        SqlCommand cmd = new SqlCommand("select * from products where SupplierID=@SupplierID", conn);
        //---------------------------------------------------------------
        //1,使用SqlParameter对象
        //SqlParameter parameter = new SqlParameter();
        //parameter.ParameterName = "@SupplierID";
        //parameter.Direction = ParameterDirection.Input;
        //parameter.Value = SupplierID;
        //cmd.Parameters.Add(parameter);
        //----------------------------------------------------------------
        //2,可以直接使用Parameters的重载的Add方法添加参数
        //cmd.Parameters.Add("@SupplierID", SqlDbType.Int).Value = SupplierID;
        //----------------------------------------------------------------
        //cmd.Parameters.Add("@SupplierID", SqlDbType.Int);
        //cmd.Parameters["@SupplierID"].Value = SupplierID;
        //3,或者使用Parameters.AddWithValue方法添加参数
        cmd.Parameters.AddWithValue("@SupplierID", SupplierID);
        //执行SQL命令并进行数据绑定
        SqlDataReader sdr= cmd.ExecuteReader(CommandBehavior.CloseConnection);
        GridView1.DataSource = sdr;
        GridView1.DataBind();
        conn.Dispose();
    }

    protected void btnExecute_Click(object sender, EventArgs e)
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            //新建一个SqlCommand对象
            SqlCommand cmd = new SqlCommand();
            //指定SqlCommand的连接
            cmd.Connection = conn;
            //指定SqlCommand将要执行的命令，可为CommandText赋Sql语句或者是存储过程名。
            cmd.CommandText = "Select * from Products";
            //指定CommandType，命令类型。
            cmd.CommandType = CommandType.Text;
            //作为简化，也可以调用SqlCommand的重载构造函数。
            //SqlCommand cmd = new SqlCommand("Select * from Products", conn);
            //-----------------------------------------------
            //调用SqlCommand的ExecuteReader对象获取一个SqlDataReader。
            using (SqlDataReader sqlreader = cmd.ExecuteReader())
            {
                if (sqlreader.HasRows)
                {
                    GridView1.DataSource = sqlreader;
                    GridView1.DataBind();
                }
            }
            //-----------------------------------------------
            //调用ExecuteScalar方法获取Product表中的记录数
            cmd.CommandText = "Select count(*) from Products";
            lblCount.Text ="共有："+ cmd.ExecuteScalar().ToString()+"记录!";
        }
    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        //调用GetSpecialProduct方法获取指定供应商编码的产品
        GetSpecialProduct(int.Parse(DropDownList1.SelectedValue));
    }
}
