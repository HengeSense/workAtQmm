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
        //当页面启动时，将bookstock对象加载到会话变量中
        //这样就可以让BookStock对象被多个页面访问
        BookStock bookstock = new BookStock();
        Session["bookstock"] = bookstock;
        GetSessionInformation();
    }
    //获取Session信息
    private void GetSessionInformation()
    {
        lblSession.Text = "Session ID：" + Session.SessionID + "<br/>";
        lblSession.Text += "Session中的对象个数：" + Session.Count.ToString() + "<br/>";
        lblSession.Text += "Session Mode：" + Session.Mode.ToString() + "<br/>";
        lblSession.Text += "Cookieless：" + Session.IsCookieless.ToString() + "<br/>";
        lblSession.Text += "是否是新的会话：" + Session.IsNewSession.ToString() + "<br/>";
        lblSession.Text += "超时分钟数：" + Session.Timeout.ToString();
    }
    protected void btnmore_Click(object sender, EventArgs e)
    {
        if (ListBox1.SelectedIndex == -1)
        {
            Response.Write("请选择书籍信息");
        }
        else
        {
            ////从Session中获取BookStock类。
            BookStock bookstock = (BookStock)Session["bookstock"];
            //使用LINQ查询泛型集合
            var s = from book in bookstock
                    where book.BookName == ListBox1.SelectedValue
                    select book;
            //绑定到DetailsView控件
            DetailsView1.DataSource = s;
            DetailsView1.DataBind();
        }
    }
}
