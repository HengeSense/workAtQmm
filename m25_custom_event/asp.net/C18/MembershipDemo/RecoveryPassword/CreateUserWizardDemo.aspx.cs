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

public partial class CreateUserWizardDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    //当用户创建成功后，触发此事件
    protected void CreateUserWizard1_CreatedUser(object sender, EventArgs e)
    {
        string ChineseName, Gender, Love, work;
        WizardStepBase step = null;
        //获取指定的向导页
        for (int i = 0; i < CreateUserWizard1.WizardSteps.Count; i++)
        {
            if (CreateUserWizard1.WizardSteps[i].ID == "PersonalInfo")
            {
                step = CreateUserWizard1.WizardSteps[i];
                break;
            }
        }
        if (step != null)
        {
            //获取向导页中的值。
            ChineseName = ((TextBox)step.FindControl("TextBox1")).Text;
            Gender = ((DropDownList)step.FindControl("DropDownList1")).SelectedValue;
            work = ((TextBox)step.FindControl("TextBox2")).Text;
            Love = ((TextBox)step.FindControl("TextBox3")).Text;
            Label1.Text = "个人信息如下：<br/>";
            Label1.Text += "中文名称：" + ChineseName + "<br/>";
            Label1.Text += "婚否：" + Gender + "<br/>";
            Label1.Text += "职业：" + work + "<br/>";
            Label1.Text += "爱好：" + Love + "<br/>";
        }
    }
}
