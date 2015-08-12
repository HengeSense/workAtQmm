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

public partial class EditUsers : System.Web.UI.Page
{
    //定义一个MembershipUser类以便以后使用
    MembershipUser mbu;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.QueryString["UserName"] == null)
        {
            Response.Redirect("GetAllusersDemo.aspx");
        }
        //调用GetUser方法获取当前的用户信息
        mbu = Membership.GetUser(Request.QueryString["UserName"]);
        if (!Page.IsPostBack)
        {
            //获取MembershipUser中的属性信息
            lblUser.Text = mbu.UserName;
            txtEmail.Text = mbu.Email;
            txtComment.Text = mbu.Comment;
            CheckBox1.Checked = mbu.IsApproved;
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {

        mbu.Email = txtEmail.Text;
        mbu.Comment = txtComment.Text;
        mbu.IsApproved = CheckBox1.Checked;
        //调用UpdateUser方法更新用户
        Membership.UpdateUser(mbu);
        lblErrorMessage.Text = "保存成功！";        
    }
}
