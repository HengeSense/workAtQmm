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

public partial class HttpCachePolicyDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        // 在服务器端缓存此页
        Response.Cache.SetCacheability(HttpCacheability.Public);
        // 设置缓存的超时时间
        Response.Cache.SetExpires(DateTime.Now.AddSeconds(60));
        //是否应忽略由使缓存无效的客户端发送的 HTTP Cache-Control 标头
        Response.Cache.SetValidUntilExpires(true);
        Label1.Text = "现在的时间是:<br />" + DateTime.Now.ToString();
    }



   
}
