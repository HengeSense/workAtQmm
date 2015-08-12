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

public partial class GridViewShow : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {        

    }

    /// <summary>
    /// 根据指定的供应商ID获取供应商的公司名称
    /// </summary>
    /// <param name="supplierID">供应商编码</param>
    /// <returns>返回供应商公司名称</returns>
    protected string GetSupNameBySupID(int supplierID)
    {
        string sqlStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        SqlConnection conn = new SqlConnection(sqlStr);
        try
        {
            conn.Open();
            //初始化查询参数，并执行查询语句
            SqlCommand cmd = new SqlCommand("Select CompanyName from Suppliers Where SupplierID=@supplierID", conn);
            cmd.Parameters.AddWithValue("@supplierID", supplierID);
            return (string)cmd.ExecuteScalar();
        }
        finally
        {
            conn.Dispose();
        }
    }
    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        //当前选中的位置。 
        int index = GridView1.SelectedIndex;        
        int productID = (int)GridView1.SelectedDataKey.Values["ProductID"];
        //也可以使用GridView1.SelectedDataKey.Value，如果有多个主键，也可以使用索引号来取主键值。
        //使用SelectedRow获取列信息，并显示指定列的值
        string productName = GridView1.SelectedRow.Cells[2].Text;
        string SupplierName = ((HyperLink)GridView1.SelectedRow.Cells[3].FindControl("HyperLink1")).Text;
        lblProduct.Text = "当前的位置是第" + index.ToString() + "行。" + 
            "主键字段是：" + productID.ToString() + "。" + 
            "产品名称是：" + productName + "。" + "供应商名称：" + SupplierName + "。";       
    }
    protected void GridView1_RowCreated(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            if (e.Row.RowState != DataControlRowState.Selected)
            {
                //当鼠标移到的时候设置该行颜色为"blue"， 并保存原来的背景颜色
                e.Row.Attributes.Add("onmouseover", "currentcolor=this.style. backgroundColor;this.style.backgroundColor='#EEEEFF';this.style.cursor='hand';");
                //当鼠标移走时还原该行的背景色
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor= currentcolor");
            }               
        }
    }
    protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //由于己经数据绑定，则字段信息己经写在行中，可以直接定位行来获取价格
            decimal unitprice = decimal.Parse(e.Row.Cells[6].Text.Trim());
            //如果单价大于50，则更改前景色为红色并将字体加粗
            if (unitprice >= 50)
            {
                e.Row.ForeColor = System.Drawing.Color.Red;
                e.Row.Font.Bold = true;
            }
        }
        //if (e.Row.RowType == DataControlRowType.Header)
        //{
        //    foreach (TableCell cell in e.Row.Cells)
        //    {
        //        int CellIndex = e.Row.Cells.GetCellIndex(cell);
        //        if (CellIndex!= 0)
        //        {
        //            LinkButton sortLink = (LinkButton)cell.Controls[0];
        //           // if (sortLink.Text == GridView1.SortExpression)
        //           // {                    
        //                if (GridView1.SortDirection == SortDirection.Ascending)
        //                    sortLink.Text += " <img src='Image/Collapse_large.bmp' width=10 height=10 title='Sort ascending'/>";
        //                else
        //                    sortLink.Text += " <img src='Image/Expand_large.bmp' width=10 height=10 title='Sort descending' />";
        //           // }
        //        }
        //    }
        //}
    }
    //计算总个数
    private int QuantityCount = 0;
    //计算总金额
    private decimal SumMoney = 0;
    /// <summary>
    /// 完成金额和数量汇总功能
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void GridView2_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        //如果是数据行，则计算单行的金额
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            if (e.Row.RowState != DataControlRowState.Edit || e.Row.RowState != DataControlRowState.Insert)
            {
                //单项金额汇总功能
                decimal unitprice = decimal.Parse(e.Row.Cells[2].Text);
                int quantity = int.Parse(((Label)e.Row.Cells[3].FindControl("Label1")).Text);
                decimal discount = decimal.Parse(e.Row.Cells[4].Text);
                if (discount != 0)
                {
                    e.Row.Cells[e.Row.Cells.Count - 1].Text =(unitprice * quantity - (unitprice * quantity) * discount).ToString();
                }
                else
                {
                    e.Row.Cells[e.Row.Cells.Count - 1].Text =(unitprice * quantity).ToString();
                }
            //在这里汇总数量和金额
            SumMoney += decimal.Parse(e.Row.Cells[e.Row.Cells.Count - 1].Text);
            QuantityCount += quantity;
            }
        }
        //如果是页脚，则将将汇总显示到页脚中
        if (e.Row.RowType == DataControlRowType.Footer)
        {
            if (e.Row.RowState != DataControlRowState.Edit || e.Row.RowState != DataControlRowState.Insert)
            {
                Label lblcount = (Label)e.Row.FindControl("lblquantity");
                lblcount.Text = string.Format("总数：{0}", QuantityCount);
                Label lblmoneySum = (Label)e.Row.FindControl("lblSumMoney");
                lblmoneySum.Text = string.Format("总金额：{0}", SumMoney);
            }
        }
    }
    protected void GridView1_Sorted(object sender, EventArgs e)
    {

    }
    protected void GridView1_Sorting(object sender, GridViewSortEventArgs e)
    {
        
    }
}
