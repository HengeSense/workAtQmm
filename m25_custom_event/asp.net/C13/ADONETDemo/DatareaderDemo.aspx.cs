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

public partial class DatareaderDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        FillDropDownList();
        lblProduct.Text = GetAllProducts();
    }
    protected void FillDropDownList()
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            //新建一个SqlCommand对象
            SqlCommand cmd = new SqlCommand("Select * from Customers", conn);
            //创建一个SqlDataReader对象
            SqlDataReader sdr = cmd.ExecuteReader();
            //一次一行读取SqlDataReader对象并添加到DropDownList中去。
            while (sdr.Read())
            {
                ListItem newItem = new ListItem();
                newItem.Text = sdr["CompanyName"] as string;
                newItem.Value = sdr["CustomerID"].ToString();
                DropDownList1.Items.Add(newItem);
            }
            //使用完毕记得关毕SqlDataReader对象
            sdr.Close();

        }
    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblCustomerID.Text = DropDownList1.SelectedValue;
    }

    protected string GetAllProducts()
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            conn.Open();
            //新建一个SqlCommand对象
            SqlCommand cmd = new SqlCommand("Select * from Products", conn);
            //创建一个SqlDataReader对象
            SqlDataReader sdr = cmd.ExecuteReader();
            //一次一行读取SqlDataReader对象并添加到DropDownList中去。
            while (sdr.Read())
            {
                sb.Append(sdr.GetInt32(sdr.GetOrdinal("ProductID")) + "  ");
                sb.Append(sdr.GetString(sdr.GetOrdinal("ProductName")) + "  ");
                sb.Append(sdr.GetInt32(sdr.GetOrdinal("SupplierID")) + "  ");
                sb.Append(sdr.GetInt32(sdr.GetOrdinal("CategoryID")) + "  ");
                sb.Append(sdr.GetString(sdr.GetOrdinal("QuantityPerUnit")) + "  ");
                sb.Append(sdr.GetSqlMoney(sdr.GetOrdinal("UnitPrice")) + "  ");
                sb.Append(sdr.GetInt16(sdr.GetOrdinal("UnitsInStock")) + "  ");
                sb.Append(sdr.GetInt16(sdr.GetOrdinal("UnitsOnOrder")) + "  ");
                sb.Append(sdr.GetInt16(sdr.GetOrdinal("ReorderLevel")) + "  ");
                sb.Append(sdr.GetBoolean(sdr.GetOrdinal("Discontinued")) + "  ");
                sb.Append("<br/>");
            }
            //使用完毕记得关毕SqlDataReader对象
            sdr.Close();
            return sb.ToString();
        }        
    }

}
