using System;
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

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Wizard1_ActiveStepChanged(object sender, EventArgs e)
    {
        //如果当前页面是第三页
        if (Wizard1.ActiveStepIndex == 2)
        {
            Label1.Text = (string)Session["RealName"];
            Label2.Text = (string)Session["Email"];
            Label3.Text = (string)Session["UserName"];
            Label4.Text = (string)Session["Password"];
        }
    }
    protected void Wizard1_FinishButtonClick(object sender, WizardNavigationEventArgs e)
    {
        Response.Write("注册成功完成");
    }
    protected void Wizard1_NextButtonClick(object sender, WizardNavigationEventArgs e)
    {
        //如果当前页面是第一页
        if (Wizard1.ActiveStepIndex == 0)
        {
            Session["RealName"] = TextBox1.Text;
            Session["Email"] = TextBox2.Text;
        }
        //如果当前页面是第二页
        if (Wizard1.ActiveStepIndex == 1)
        {
            Session["UserName"] = TextBox3.Text;
            Session["Password"] = TextBox4.Text;
        }      
    }
    protected void Wizard1_CancelButtonClick(object sender, EventArgs e)
    {
        //清除Session信息，并导航到步骤一
        Session["RealName"] = "";
        Session["Email"] = "";
        Session["UserName"] = "";
        Session["Password"] = "";
        Wizard1.MoveTo(this.Step1);
    }
}
