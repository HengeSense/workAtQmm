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

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //调用ValidateUser验证用户
        if (Membership.ValidateUser(txtUserName.Text,txtUserpass.Text))
        {
            //如果验证成功，则保存身份验证信息，并将用户重定向到原始请求页面
            FormsAuthentication.RedirectFromLoginPage(txtUserName.Text, false);
        }
        else
        {
            lblInfo.Text ="无效的用户名或密码！";
        }
    }
}
