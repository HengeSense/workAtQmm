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
//演示页面处理过程的示例代码
public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Label1.Text += "Page.Load事件处理器<br/>";
        if (Page.IsPostBack)
        {
            Label1.Text+= "<b>这不是页面首次加载，这是回送请求</b><br/>";
        }
    }    
    protected void Page_Init(object sender, System.EventArgs e)
    {
        Label1.Text += "Page.Init事件处理器<br/>";
    }
    protected void Page_PreRender(object sender, EventArgs e)
    {
        Label1.Text += "Page.PreRender事件处理器<br/>";
    }
    protected void Page_Unload(object sender, EventArgs e)
    {
        Label1.Text += "Page.Unload事件处理器<br/>";
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Text += "Button.Click事件处理器<br/>";
    }
}
