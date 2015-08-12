using System;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Web.Script.Services;
using JobSiteStarterKit.BOL;
using System.Text;
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[ScriptService]
public class WebService : System.Web.Services.WebService 
{

    [WebMethod]
    [ScriptMethod]
    public string GetToolTipText(int contextKey)
    {
        try
        {
            //根据职位编号获取职位对象
            JobPosting job = JobPosting.GetPosting(contextKey);
            //返回职位描述
            return job.Description;
        }
        catch (Exception ex)
        {
            return ex.Message;
        }        
    }

    [WebMethod]
    [ScriptMethod]
    public string GetCompanyProfile(int contextKey)
    {
        //获取公司信息
        Company c=Company.GetCompany(contextKey);
        StringBuilder sb=new StringBuilder();
        sb.Append("<table width='100%'>");
        //添加表头
        sb.Append("<tr><td colspan='2' class='dataentryformlabelbig' align='left'>");
        sb.Append("Company Details");
        sb.Append("</td></tr>");
        //公司名信息
        sb.Append("<tr><td nowrap align='right'>");
        sb.Append("Company Name :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.CompanyName);
        sb.Append("</td></tr>");
        //公司简介
        sb.Append("<tr><td nowrap valign='top' align='right'>");
        sb.Append("Brief Profile :");
        sb.Append("</td>");
        sb.Append("<td><textarea readonly='true' rows=5 cols=30>");
        sb.Append(c.BriefProfile);
        sb.Append("</textarea></td></tr>");
        //公司位置
        sb.Append("<tr><td colspan='2' class='dataentryformlabelbig' align='left'>");
        sb.Append("Location");
        sb.Append("</td></tr>");
        //公司地址1
        sb.Append("<tr><td valign='top' align='right'>");
        sb.Append("Address 1 :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.Address1);
        sb.Append("</td></tr>");
        //公司地址2
        sb.Append("<tr><td valign='top' align='right'>");
        sb.Append("Address 2 :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.Address2);
        sb.Append("</td></tr>");
        //公司所在城市
        sb.Append("<tr><td align='right'>");
        sb.Append("City :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.City);
        sb.Append("</td></tr>");
        //公司所在的省份
        sb.Append("<tr><td align='right'>");
        sb.Append("State :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(State.GetStateName(c.StateID));
        sb.Append("</td></tr>");
        //公司所在国家
        sb.Append("<tr><td align='right'>");
        sb.Append("Country :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(Country.GetCountryName(c.CountryID));
        sb.Append("</td></tr>");
        //公司邮政编码
        sb.Append("<tr><td align='right'>");
        sb.Append("ZIP :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.ZIP);
        sb.Append("</td></tr>");
        //联系详细信息
        sb.Append("<tr><td colspan='2' class='dataentryformlabelbig' align='left'>");
        sb.Append("Contact Details");
        sb.Append("</td></tr>");
        //公司电话
        sb.Append("<tr><td align='right'>");
        sb.Append("Phone :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.Phone);
        sb.Append("</td></tr>");
        //公司传真号码
        sb.Append("<tr><td align='right'>");
        sb.Append("Fax :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.Fax);
        sb.Append("</td></tr>");
        //公司电子邮件地址
        sb.Append("<tr><td align='right'>");
        sb.Append("Email :");
        sb.Append("</td>");
        sb.Append("<td>");
        sb.Append(c.Email);
        sb.Append("</td></tr>");
        //公司的Web站点
        sb.Append("<tr><td align='right'>");
        sb.Append("Web Site :");
        sb.Append("</td>");
        sb.Append("<td><a href='");
        sb.Append(c.WebSiteUrl);
        sb.Append("'>");
        sb.Append(c.WebSiteUrl);
        sb.Append("</a></td></tr>");
        //表结束标记符
        sb.Append("</table>");
        //向客户端返回HTML字符串
        return sb.ToString();        
    }

}

