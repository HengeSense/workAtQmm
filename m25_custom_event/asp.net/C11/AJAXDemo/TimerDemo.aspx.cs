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

public partial class TimerDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Timer1_Tick(object sender, EventArgs e)
    {
        // 指定当前的时间值给Label，这样模拟时钟效果
        Label1.Text = DateTime.Now.ToString();
    }
    protected void Timer2_Tick(object sender, EventArgs e)
    {
        // 指定当前的时间值给Label，这样模拟时钟效果
        Label2.Text = DateTime.Now.ToString();
    }
}
