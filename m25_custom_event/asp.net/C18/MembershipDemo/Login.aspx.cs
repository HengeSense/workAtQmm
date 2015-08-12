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
    protected void Login1_Authenticate(object sender, AuthenticateEventArgs e)
    {
        //if (CheckUsers(Login1.UserName, Login1.Password))
        //{
        //    //Authenticated属性指示验证是否成功。
        //    e.Authenticated = true;
        //}
        //else
        //{
        //    e.Authenticated = false;
        //}
    }
    /// <summary>
    /// 自定义验证函数
    /// </summary>
    /// <param name="UserName">要验证的用户名称</param>
    /// <param name="Password">要验证的用户密码</param>
    /// <returns></returns>
    protected bool CheckUsers(string UserName, string Password)
    {
        if (UserName == "ding" && Password == "1234")
        {
            return true;
        }
        else
            return false;
    }
}
