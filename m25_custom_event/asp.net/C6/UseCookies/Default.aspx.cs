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
    protected void Button2_Click(object sender, EventArgs e)
    {
        //创建一个Cookie对象
        HttpCookie cookie = new HttpCookie("BooksInfo");
        //为Cookie赋值
        cookie["BookName"] = TextBox1.Text;
        cookie["ISBN"] = TextBox2.Text;
        cookie["Price"] = TextBox3.Text;
        //将cookie对象添加到Cookies集合中发送到浏览器。
        Response.Cookies.Add(cookie);
        //设置Cookie对象的过期时间
        cookie.Expires = DateTime.Now.AddDays(1);
        cookie = Request.Cookies["BooksInfo"];
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //从Request.Cookies集合中获取指定名称的Cookie对象
        HttpCookie cookie = Request.Cookies["BooksInfo"];
        //获取Cookie中指定键的值
        Label1.Text = "Cookie中的书籍信息为：<br/>";
        Label1.Text += cookie["BookName"]+"<br/>";
        Label1.Text += cookie["ISBN"]+"<br/>";
        Label1.Text += cookie["Price"] + "<br/>";
    }
}
