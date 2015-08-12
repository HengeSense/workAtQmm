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

public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //registration1.UserName = "Input User Name";
        //registration1.EmailAddress = "Email@Email.com";
        //为用户控件关联OnRegistered事件
        registration1.OnRegistered += new EventHandler<RegistEventArgs>(registration1_OnRegistered);
    }
    //在该事件处理器中，将用户输入的信息显示在Label控件上
    void registration1_OnRegistered(object sender, RegistEventArgs e)
    {
        lblInfo.Text = "您的注册信息是：<br/>";
        //这里使用在RegistEventArgs中定义的参数信息
        lblInfo.Text += "用户名：" + e.UserName + "<br/>";
        lblInfo.Text += "用户密码：" + e.Password + "<br/>";
        lblInfo.Text += "电子邮箱：" + e.EmailAddress + "<br/>";
    }
}
