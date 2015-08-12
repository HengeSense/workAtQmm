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

public partial class DataSetDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //首先加载三个数据表
        LoadThreeTable();
        //创建三个数据表之间的关系
        CreateRelation();
        if (!Page.IsPostBack)
        {
            //最先绑定CustomerID到DropDownList中
            ddlCustomer.DataSource = ds.Tables["Customers"];
            ddlCustomer.DataTextField = "CustomerID";
            ddlCustomer.DataBind();
        }
    }
    //定义三个私有变量，将在整个应用程序范围内使用
    private DataSet ds = new DataSet("NorthOrder");
    private DataRelation customerOrdersRelation;
    private DataRelation orderDetailRelation;
    /// <summary>
    /// 定义加载三个数据表的方法
    /// </summary>
    protected void LoadThreeTable()
    {
        //从web.config中获取数据库连接
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        //创建与数据库的连接
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            //新建一个SqlCommand对象
            SqlCommand cmd = new SqlCommand("Select * from Customers;Select * from Orders;Select * from [Order Details]", conn);
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.TableMappings.Add("Table", "Customers");
            adapter.TableMappings.Add("Table1", "Orders");
            adapter.TableMappings.Add("Table2", "OrderDetails");            
            adapter.Fill(ds);            
        }
    }
    /// <summary>
    /// 创建三个数据表的关系
    /// </summary>
    protected void CreateRelation()
    {
        //创建Customers与Orders之间的关系
         customerOrdersRelation =
    ds.Relations.Add("CustOrders",
    ds.Tables["Customers"].Columns["CustomerID"],
    ds.Tables["Orders"].Columns["CustomerID"]);
        //创建Orders与OrderDetails之间的关系
        orderDetailRelation =ds.Relations.Add("OrderDetail",
            ds.Tables["Orders"].Columns["OrderID"],
            ds.Tables["OrderDetails"].Columns["OrderID"], false);
    }
    /// <summary>
    /// 根据指定的客户编码获取订单ID信息
    /// </summary>
    /// <param name="CustomerID"></param>
    private void GetCustomerDetail(string CustomerID)
    {
        DataView dv = new DataView();
        dv.Table = ds.Tables["Customers"];
        dv.RowFilter = string.Format("CustomerID='{0}'", CustomerID);
        DataRowView drv = dv[0];
        //使用DataRowView控件的CreateChildView方法来创建指定关系的子视图。
        DataView orderView=drv.CreateChildView(customerOrdersRelation);
        //-----------------------------------------------------------
        lstOrder.DataSource = orderView;
        lstOrder.DataTextField = "OrderID";
        lstOrder.DataBind();
        GridView1.DataSource = dv;
        GridView1.DataBind();
        //-----------------------------------------------------------
    }
    /// <summary>
    /// 根据指定的订单ID获取订单详细信息和订单细表详细信息
    /// </summary>
    private void GetOrderAndOrderDetails()
    { 
        DataView OrderView = new DataView(ds.Tables["Orders"], "OrderID='" + lstOrder.SelectedValue +"'","CustomerID",DataViewRowState.Unchanged);
        DataRowView drv = OrderView[0]; ;
        DataView OrderDetailsView = drv.CreateChildView(orderDetailRelation);
        GrdOrder.DataSource = OrderView;
        GrdOrder.DataBind();
        GridView3.DataSource = OrderDetailsView;
        GridView3.DataBind();
    }
    //当选择不同的客户时，显示不同的选择项
    protected void ddlCustomer_SelectedIndexChanged(object sender, EventArgs e)
    {
        GetCustomerDetail(ddlCustomer.SelectedValue);
    }
    //当选择不同的订单时显示不同的项
    protected void lstOrder_SelectedIndexChanged(object sender, EventArgs e)
    {
        GetOrderAndOrderDetails();
    }
}
