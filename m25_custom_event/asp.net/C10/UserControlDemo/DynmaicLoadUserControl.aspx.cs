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

public partial class DynmaicLoadUserControl : System.Web.UI.Page
{
    //指定用户控件所在的路径
    const string fileName = "~/UserControl/Registration.ascx";
    protected void Page_Load(object sender, EventArgs e)
    {
        //调用Pag.LoadControl方法传入指定的用户控件文件，并返回一个Control对象
        Control RegUserControl = Page.LoadControl(fileName);        
        PlaceHolder1.Controls.Add(RegUserControl);
        //在这里对用户控件进行强制类型转换
        Registration regUserControl = (Registration)RegUserControl;
        //现在可以获取用户控件中的自定义信息
        regUserControl.EmailAddress = "Email@Email.com";
        regUserControl.UserName = "User Name";
        regUserControl.OnRegistered += new EventHandler<RegistEventArgs>(regUserControl_OnRegistered);
        //可以直接使用用户控件的FindContron方法来搜索用户控件中的控件
        TextBox txtUserName =(TextBox)regUserControl.FindControl("txtUserName");
        txtUserName.Text = "用户名";
    }
    //用户控件事件的事件处理器
    void regUserControl_OnRegistered(object sender, RegistEventArgs e)
    {
        lblInfo.Text = "您的注册信息是：<br/>";
        //这里使用在RegistEventArgs中定义的参数信息
        lblInfo.Text += "用户名：" + e.UserName + "<br/>";
        lblInfo.Text += "用户密码：" + e.Password + "<br/>";
        lblInfo.Text += "电子邮箱：" + e.EmailAddress + "<br/>";
    }
}
