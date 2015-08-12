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

public partial class BookDetail : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //调用Request.QueryString方法获取查询字符串的值
        string BookName =Server.UrlDecode(Request.QueryString["BookName"]);
        //构造一个BookStock类，初始化书籍信息
        BookStock books = new BookStock();
        //使用Linq表达式查询BookStock中指定书名的书籍信息
        var s = from book in books
                where book.BookName == BookName
                select book;
        //绑定查询结果到DetailsView控件中
        DetailsView1.DataSource = s;
        DetailsView1.DataBind();
    }
}
