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
using System.Web.Configuration;

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取网站根目录下的web.config配置文件对蠏
        Configuration config = WebConfigurationManager.OpenWebConfiguration("~/");
        //获取appSettings配置块信息
        ConfigurationSection appSettings = config.GetSection("appSettings");
        //判断配置块是否加密，如果己经加密，则进行解密
        if (appSettings.SectionInformation.IsProtected)
        {
            appSettings.SectionInformation.UnprotectSection();
        }
        else
        {
            //如果没有加密，则调用ProtecSection方法进行加密工作
            appSettings.SectionInformation.ProtectSection(
            "DataProtectionConfigurationProvider");
        }
        //保存配置信息
        config.Save();
        Response.Write("读取web.config配置文件中的<appSettings>配置节<br/>");
        foreach (string key in WebConfigurationManager.AppSettings.Keys)
        {
            Response.Write("键值名: " + key + "<br />");
            Response.Write("键值值为: " + WebConfigurationManager.AppSettings[key] + "<br/><br/>");
        }
    }
}
