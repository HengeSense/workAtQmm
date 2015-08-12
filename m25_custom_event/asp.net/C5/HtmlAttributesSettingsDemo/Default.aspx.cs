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
        //使用HtmlControl类的Attributes属性为Button1控件添加onclick事件
        Button1.Attributes.Add("onclick", "alert('HTML控件属性设置演示')");
        //设置Button1的背景色
        Button1.Style.Add("background-color", "green");
        //在浏览器中输出HTML控件的属性
        Response.Write(Button1.Attributes[("Style")] + "<br/>");
        foreach (string key in Button1.Attributes.Keys)
        {
            Response.Write(key + "=" + Button1.Attributes[key] + "<br/>");
        }
    }
}
