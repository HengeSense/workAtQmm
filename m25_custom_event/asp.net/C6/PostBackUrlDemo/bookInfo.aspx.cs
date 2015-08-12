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

public partial class bookInfo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {        
        //if (PreviousPage != null)
        //{
        //    //这里使用类型转换将PreviousPage转换为指定的页面类型。
        //    _Default CrossPage = PreviousPage as _Default;
        //    Label1.Text = "提交的页面的标题为：" + PreviousPage.Title+"<br/>";
        //    //获取回送页面的属性值
        //    Label1.Text += "书籍名称：" + CrossPage.BookName + "<br/>";
        //    Label1.Text += "ISBN：" + CrossPage.ISBN + "<br/>";
        //    Label1.Text += "价钱:：" + CrossPage.Price + "<br/>";
        //}  

        if (PreviousPage != null)
        {
            Label1.Text += "书籍名称：" + ((TextBox)PreviousPage.FindControl("txtBookName")).Text + "<br/>";
            Label1.Text += "ISBN：" + ((TextBox)PreviousPage.FindControl("txtISBN")).Text + "<br/>";
            Label1.Text += "价钱:：" + ((TextBox)PreviousPage.FindControl("txtPrice")).Text + "<br/>";
        }
    }
}
