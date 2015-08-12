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

public partial class XMLHttpRequestDemo : System.Web.UI.Page
{
    //初始化BookStock类，该类的构造函数将向集合中添加数据
    BookStock books = new BookStock();
    protected void Page_Load(object sender, EventArgs e)
    {        
        if (!Page.IsPostBack)
        {
            //将DropDownList控件绑定到BookStock类
            DDLBook.DataSource = books;
            DDLBook.DataTextField = "BookName";
            DDLBook.DataBind();
        }
    }
    protected void btnView_Click(object sender, EventArgs e)
    {
        //使用LINQ查询指定书名的书籍类
        var searchbook = from book in books
                         where book.BookName == DDLBook.SelectedItem.Text
                         select book;
        //如果查到了数据，则为Label赋值
        if (searchbook.Count() > 0)
        { 
            foreach(Book book in searchbook)
            {
                lblPrice.Text = book.Price.ToString();
            }
        }
    }
}
