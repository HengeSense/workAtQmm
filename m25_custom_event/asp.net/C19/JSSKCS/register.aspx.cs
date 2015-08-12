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
    /// ������CreateUserWizard�򵼵���һ����ťʱ�������¼�
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void CreateUserWizard1_NextButtonClick(object sender, WizardNavigationEventArgs e)
    {
        //�����ҳ���ڵڶ�ҳ�����û��ڵ�һҳ���� ���FirstName��LastName���浽ViewState�С�
        if (CreateUserWizard1.ActiveStep.ID == "WizardStep2")
        {
            TextBox t = ((TextBox)CreateUserWizard1.ActiveStep.FindControl("TextBox1"));
            ViewState["firstname"]=t.Text;
            t = ((TextBox)CreateUserWizard1.ActiveStep.FindControl("TextBox2"));
            ViewState["lastname"]=t.Text;
        }
        //����л���ѡ���ɫ����ʱ����ʱ�û������ɹ�����������¼�����û���Ϣ���浽���Ի��С�
        if (CreateUserWizard1.ActiveStep.ID == "WizardStep1")
        {
            //��ȡ��ǰ��¼���û���
            MembershipUser objUser = Membership.GetUser();
            //��ȡ��ɫѡ��DropDownList��
            DropDownList ddl = ((DropDownList)CreateUserWizard1.ActiveStep.FindControl("DropDownList1"));
            if (ddl != null)
            {
                //���ָ�µ��û���ָ���Ľ�ɫ
                Roles.AddUserToRole(objUser.UserName, ddl.SelectedValue);
            }
            //������Ի���Ϣ
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
