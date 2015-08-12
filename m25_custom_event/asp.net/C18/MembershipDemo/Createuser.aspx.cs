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

public partial class Createuser : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            //MembershipCreateStatus将返回创建用户的操作结果
            MembershipCreateStatus Status;
            //调用CreateUser创建用户
            Membership.CreateUser(txtUserName.Text,
                txtPassword.Text,
                txtEmail.Text,
                txtQuestion.Text,
                txtAnswer.Text,true,out Status);
            lblStatus.Text = "创建用户成功!";
        }
            //创建失败显示失败信息。
        catch (Exception ex)
        {

            lblStatus.Text = "不能创建用户!";
        }
    }
}
