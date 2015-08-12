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
    protected void AdRotator1_AdCreated(object sender, AdCreatedEventArgs e)
    {
        //使用e.AlternateText获取图片文本
        HyperLink1.Text = e.AlternateText;
        //使用e.NavigateUrl获取链接的信息
        Uri PicPath = new Uri(Request.Url,e.NavigateUrl.Substring(3));
        //获取Uri的绝对路径
        string str = PicPath.AbsolutePath;
        HyperLink1.NavigateUrl = str;
    }
}
