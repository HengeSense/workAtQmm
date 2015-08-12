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

public partial class GetAllusersDemo : System.Web.UI.Page
{
    //一个私有成员变量，保存用户的列表信息
    MembershipUserCollection UsersList;
    protected void Page_Load(object sender, EventArgs e)
    {
        //调用GetAllUsers获取所有的用户信息
        UsersList = Membership.GetAllUsers();       
        if (!this.IsPostBack)
        {
            UsersGridView.DataSource = UsersList;
            UsersGridView.DataBind();
        }
    }
    protected void UsersGridView_SelectedIndexChanged(object sender, EventArgs e)
    {
        List<MembershipUser> currentuser=new List<MembershipUser>();
        //根据指定的用户名获取当前的MembershipUser对象。
        //currentuser.Add(UsersList[(string)UsersGridView.SelectedValue]);

        //使用如下的代码同样可以获取用户信息。GridView中己经将UserName设置为主键，因此可以使用DataKeys属性。
        MembershipUser user = Membership.GetUser((string)UsersGridView.DataKeys[0].Value);
        currentuser.Add(user);


        //显示Membership对象的细节到DetailsView控件中。
        DetailsView1.DataSource = currentuser;
        DetailsView1.DataBind();
    }

    protected void UsersGridView_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteUser")
        {
            string userName = (string)UsersGridView.DataKeys[0].Value;
            //调用Membership的DeleteUser方法删除用户
            Membership.DeleteUser(userName);
            //下面的代码用于刷新 GridView控件的显示
            UsersList = Membership.GetAllUsers();
            UsersGridView.DataSource = UsersList;
            UsersGridView.DataBind();
        }
    }
}
