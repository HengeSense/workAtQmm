using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using JobSiteStarterKit.BOL;

public partial class Statistics_ascx : UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取公司总数
        lblCompanies.Text = Company.GetCompanyCount().ToString();
        //获取职位总数
        lblJobs.Text = JobPosting.GetJobPostingCount().ToString();
        //获取简历总数
        lblResumes.Text = Resume.GetResumeCount().ToString();
    }

}
