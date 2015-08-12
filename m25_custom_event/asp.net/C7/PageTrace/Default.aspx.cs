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
        //启用页面追踪功能
        //Page.Trace.IsEnabled = true;
        Session["test"] = "会话中状态中保存的信息";
        Application["test"] = "应用程序状态中保存的信息";
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Trace.Write("按钮1单击事件", "在Session中放置一个条目");
        Session["Test"] = "Contents";
        Trace.Warn("按钮1单击事件", "己经放置了一个条目在Session中");
        //下面的代码将触发一个异常
        int i, j;
        i = 5;
        j = 0;
        try
        {
            int z = i / j;
        }
        catch (DivideByZeroException ex)
        {
            //这里为Trace.Warn方法传递了一个异常对象
            Trace.Warn("按钮1单击事件", "运算异常！", ex);
        }



    }
}
