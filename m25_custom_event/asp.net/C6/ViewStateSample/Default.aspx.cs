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
using System.Collections.Generic;

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
       // Page.RegisterRequiresViewStateEncryption();
        Book book = new Book("ASP.NET 3.5完全手册", "1234-000000", 59.8);
        //将自定义对象保存到视图状态中
        ViewState["Book"] = book;

        //下面的代码将一个泛型字典对象保存到ViewState中。
        Dictionary<string, Book> books = new Dictionary<string, Book>();
        books.Add("Book1", new Book("C# 2008程序设计", "000000", 60));
        books.Add("Book2",new Book("ASP.NET 3.5 专业技术详解","111111",70));
        ViewState["Books"]=books;
        //从ViewState中获取泛型字典对象，必须进行类型的转换
        books=(Dictionary<string,Book>)ViewState["Books"];
        //遍历字典对象
        foreach (KeyValuePair<string, Book> bookDictionary in books)
        {
            Label1.Text += "key=" + bookDictionary.Key + "<br/>";
            Book bk = (Book)bookDictionary.Value;
            Label1.Text += "书名：" + bk.BookName + "<br/>";
            Label1.Text += "ISBN：" + bk.ISBN + "<br/>";
            Label1.Text += "价格：" + bk.Price + "<br/>";
        }
        Page.RegisterRequiresViewStateEncryption();
    }
}
