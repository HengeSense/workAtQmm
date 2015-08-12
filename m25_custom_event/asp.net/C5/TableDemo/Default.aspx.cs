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

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void cmdCreate_Click(object sender, EventArgs e)
    {
        ////首先移除所有的行和列，如果EnableViewState设置为False则每次都会重新创建而不需要调用这行代码。
        tbl.Controls.Clear();
        //获取文本框中的行列值
        int rows = Int32.Parse(txtRows.Text);
        int cols = Int32.Parse(txtCols.Text);
        for (int row = 0; row < rows; row++)
        {
            ////创建一个TableRow对象
            TableRow rowNew = new TableRow();
            //将TableRow对象添加到Table对象中
            tbl.Controls.Add(rowNew);
            for (int col = 0; col < cols; col++)
            {
                //创建一个新的TableCell对象
                TableCell cellNew = new TableCell();
                TextBox tb = new TextBox();
                tb.Text = "当前列为 (" + row.ToString() + ","+col.ToString() + ")";
                cellNew.Controls.Add(tb);
                if (chkBorder.Checked)
                {
                    //如果允许列边框复选框被选择，则设置TableCell的边框
                    cellNew.BorderStyle = BorderStyle.Inset;
                    ////注意这里的单位表示方式，是使用Unit结构
                    cellNew.BorderWidth = Unit.Pixel(1);
                }
                ////将TableCell添加到TableRow中
                rowNew.Controls.Add(cellNew);
            }
        }
    }
}
