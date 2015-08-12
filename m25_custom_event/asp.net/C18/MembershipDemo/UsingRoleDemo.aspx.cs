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

public partial class UsingRoleDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //如果请求未通过验证，则返回到登录页
        if (!Request.IsAuthenticated)
        {
            FormsAuthentication.RedirectToLoginPage();
            Response.End();
        }
        //如果不存在Sales角色，则创建一个名为Sales的角色。
        if (!Roles.RoleExists("Sales"))
        {
            Roles.CreateRole("Sales");
        }
        //如果用户不在Sales角色中，则添加用户到角色中。
        if (!Roles.IsUserInRole("Sales"))
        {
            Roles.AddUserToRole(User.Identity.Name, "Sales");
        }
    }
}
