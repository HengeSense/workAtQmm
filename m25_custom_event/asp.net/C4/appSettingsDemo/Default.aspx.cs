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
//为了使用WebConfigurationManager类，必须添加此命名空间的引用
using System.Web.Configuration;
public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //调用WebConfigurationManager的AppSettings属性获取自定义配置信息
        Label1.Text = WebConfigurationManager.AppSettings["SiteName"];
    }
}
