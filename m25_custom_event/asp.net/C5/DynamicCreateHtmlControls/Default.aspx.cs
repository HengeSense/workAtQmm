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
        //首先创建一个HtmlTable对象
        HtmlTable table1 = new HtmlTable();
        //设置HtmlTable的格式属性
        table1.Border = 1;
        table1.CellPadding = 1;
        table1.CellSpacing = 1;
        table1.BorderColor = "red";
        //下面的代码向HtmlTable添加内容
        HtmlTableRow row;
        HtmlTableCell cell;
        for (int i = 1; i <= 5; i++)
        {
            // 创建一个新的行，并设置其背景色属性
            row = new HtmlTableRow();
            row.BgColor = (i % 2 == 0 ? "lightyellow" : "lightcyan");
            for (int j = 1; j <= 4; j++)
            {
                //创建一个新的列，为其设置文本
                cell = new HtmlTableCell();
                cell.InnerHtml = "行: " + i.ToString() +
                "<br />列: " + j.ToString();
                //添加列对象到当前的行
                row.Cells.Add(cell);
            }
            //添加行对象到当前的Htmltable
            table1.Rows.Add(row);
        }
        //添加HtmlTable到当前页的控件集合中
        this.Controls.Add(table1);
    }
}
