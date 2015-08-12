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
using System.Collections.Generic;

public partial class Registration : System.Web.UI.UserControl
{
    public string UserName
    {
        get { return txtUserName.Text; }
        set { txtUserName.Text = value; }
    }
    public string EmailAddress
    {
        get { return txtEmail.Text; }
        set { txtEmail.Text = value; }
    }
    //定义一个事件
    public event EventHandler<RegistEventArgs> OnRegistered;
    protected void Page_Load(object sender, EventArgs e)
    {
        //
    }

    protected void btnok_Click(object sender, EventArgs e)
    {
        //这里省略了实际的验证代码
        //如果事件源不为空，就立刻触发事件
        if (OnRegistered != null)
        {
            OnRegistered(sender, new RegistEventArgs(txtUserName.Text, txtEmail.Text, txtUserPass.Text));
        }
    }
}
/// <summary>
/// 自定义的事件参数类
/// </summary>
public class RegistEventArgs : EventArgs
{
    private string _userName;
    public string UserName
    {
        get { return _userName; }
    }
    private string _emailAddress;
    public string EmailAddress
    {
        get { return _emailAddress; }
    }
    private string _password;
    public string Password
    {
        get { return _password; }
    }
    //在构造函数中，获取用户名，密码和EMAIL地址
    public RegistEventArgs(string userName, string emailAddress, string passWord)
    {
        _userName = userName;
        _emailAddress = emailAddress;
        _password = passWord;
    }
}
