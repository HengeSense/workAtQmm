using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class MasterPage_master : MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取页面的标题
        Page.Title = ConfigurationManager.AppSettings["pagetitle"];
        //网站的Logo
        HyperLink1.ImageUrl = "~/images/" + ConfigurationManager.AppSettings["sitelogo"];
        //广告电子邮件
        lnkAds.NavigateUrl = "mailto:" + ConfigurationManager.AppSettings["advertiseemail"];
        //站长电子邮件地址
        lnkWebmaster.NavigateUrl = "mailto:" + ConfigurationManager.AppSettings["webmasteremail"];
    }

}
