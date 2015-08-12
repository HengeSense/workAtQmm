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
using System.Web.Configuration;
using System.Data.SqlClient;

public partial class SqlDataAdapterDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnSearch_Click(object sender, EventArgs e)
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            //新建一个SqlCommand对象
            SqlCommand selectcommand = new SqlCommand("Select * from Products", conn);
            SqlDataAdapter sda = new SqlDataAdapter();
            sda.SelectCommand = selectcommand;
            //由于是选择命令，只需要直接在DataAdapter的构造函数指定即可，如果是UpdateCommand、InsertCommand和DeleteCommand，则需要单独指定。
            DataSet ds = new DataSet();
            //使用TableMappings集合属性创建一个表映射
            sda.TableMappings.Add("Products","DataSetProducts");           
            //填充DataSet，并为表指定一个表名。
            sda.Fill(ds, "Products");            
            //调用DataAdapter的Fill方法将数据直充到离线数据源中，并且连接将断开。
            //sda.Fill(ds);
            //使用FillSchema方法填充表架构
            //sda.FillSchema(ds, SchemaType.Mapped);
            GridView1.DataSource = ds.Tables[0];
            GridView1.DataBind();
        }
    }
}
