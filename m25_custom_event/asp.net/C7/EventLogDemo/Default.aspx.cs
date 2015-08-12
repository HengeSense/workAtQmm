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
using System.Diagnostics;

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            //除法运算
            decimal a, b, result;
            a = decimal.Parse(TextBox1.Text);
            b = decimal.Parse(TextBox2.Text);
            result = a / b;
        }
        catch (Exception ex)
        {
            //显示异常详细信息
            lblResult.Text = "<b>错误消息：</b>" + ex.Message + "<br/><br/>";
            lblResult.Text += "<b>错误源：</b>" + ex.Source + "<br/><br/>";
            lblResult.Text += "<b>堆栈追踪：：</b>" + ex.StackTrace + "<br/><br/>";
            lblResult.ForeColor = System.Drawing.Color.Red;
            //将除法运算错误信息写入事件日志

            //该构造函数将打开指定名称的事件日志，如果不存在，则创建一个新的事件日志
            EventLog elog = new EventLog("ASPNET35BookDemo");
            //调用EventLog的静态方法SourceExists判断指定的事件源是否注册
            if (!EventLog.SourceExists("除法运算错误2"))
            {
                //如果没有注册，调用CreateEventSource方法注册事件源，并创建一个新的事件日志。
                EventLog.CreateEventSource("除法运算错误2", "ASPNET35BookDemo");
            }
            //EventLog可以指定事件日志名称，如果不指定，则为Application事件日志

            //指定日志源
            elog.Source = "除法运算错误2";
            //调用WriteEntry方法向日志中写入一个日志项
            elog.WriteEntry(ex.Message, EventLogEntryType.Error);
        }
    }
}
