using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class register_aspx : Page
{

    protected void CreateUserWizard1_ContinueButtonClick(object sender, EventArgs e)
    {
        Response.Redirect("~/default.aspx");
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        
    }
    /// <summary>
    /// 当单击CreateUserWizard向导的下一步按钮时触发此事件
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void CreateUserWizard1_NextButtonClick(object sender, WizardNavigationEventArgs e)
    {
        //如果向导页等于第二页，则将用户在第一页中输 入的FirstName和LastName保存到ViewState中。
        if (CreateUserWizard1.ActiveStep.ID == "WizardStep2")
        {
            TextBox t = ((TextBox)CreateUserWizard1.ActiveStep.FindControl("TextBox1"));
            ViewState["firstname"]=t.Text;
            t = ((TextBox)CreateUserWizard1.ActiveStep.FindControl("TextBox2"));
            ViewState["lastname"]=t.Text;
        }
        //如果切换到选择角色窗口时，此时用户己经成功创建，并登录，将用户信息保存到个性化中。
        if (CreateUserWizard1.ActiveStep.ID == "WizardStep1")
        {
            //获取当前登录的用户名
            MembershipUser objUser = Membership.GetUser();
            //获取角色选择DropDownList。
            DropDownList ddl = ((DropDownList)CreateUserWizard1.ActiveStep.FindControl("DropDownList1"));
            if (ddl != null)
            {
                //添加指下的用户到指定的角色
                Roles.AddUserToRole(objUser.UserName, ddl.SelectedValue);
            }
            //保存个性化信息
            Profile.UserName = objUser.UserName;
            Profile.Email = objUser.Email;
            Profile.FirstName=ViewState["firstname"].ToString();
            Profile.LastName=ViewState["lastname"].ToString();
            Profile.JobSeeker.ResumeID = -1;
            Profile.Employer.CompanyID = -1;
        }
    }

    protected void CreateUserWizard1_ActiveStepChanged(object sender, EventArgs e)
    {
        if (CreateUserWizard1.ActiveStep.ID == "WizardStep1")
        {
            DropDownList ddl = ((DropDownList)CreateUserWizard1.ActiveStep.FindControl("DropDownList1"));
            if (ddl != null)
            {
                ListItem li1 = new ListItem("Job Seeker", ConfigurationManager.AppSettings["jobseekerrolename"]);
                ListItem li2 = new ListItem("Employer", ConfigurationManager.AppSettings["employerrolename"]);
                ddl.Items.Add(li1);
                ddl.Items.Add(li2);
            }

        }
    }
}
