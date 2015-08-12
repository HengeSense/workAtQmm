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
//为了使用WebConfigurationManager,需要添加这个命名空间
using System.Web.Configuration;
public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Write("读取web.config配置文件中的连接字符串<br/>");
        foreach (ConnectionStringSettings connection in WebConfigurationManager.ConnectionStrings)
        {
            Response.Write("连接名称: " + connection.Name + "<br />");
            Response.Write("连接字符串: " +
            connection.ConnectionString + "<br /><br />");

            ////返回位于网站根目下的配置对象
            //Configuration config =WebConfigurationManager.OpenWebConfiguration("/");
            //// 搜索位于<system.web>内部的 <authentication> 元素
            //AuthenticationSection authSection =
            //(AuthenticationSection)config.GetSection(@"system.web/authentication");
            //首先返回位于网站根目下的配置对象，必须注意这里的网站根目录虚拟路径用~/，而不要使用一个/号。
            Configuration config = WebConfigurationManager.OpenWebConfiguration("~/") as System.Configuration.Configuration;
            KeyValueConfigurationCollection appSettings =config.AppSettings.Settings;
            if (config != null)
            {
                //在这里更改appSettings对象
                appSettings["SiteName"].Value = "WebConfigurationManager类使用演示";
                appSettings["FileName"].Value = "这是一个web.Config文件";
                config.Save();
            }
            Response.Write("读取web.config配置文件中的<appSettings>配置节<br/>");
            foreach (string key in appSettings.AllKeys)
            {
                Response.Write("键值名: " + key + "<br />");
                Response.Write("键值值为: " + appSettings[key].Value + "<br/><br/>");
            }
        }
    }
}
