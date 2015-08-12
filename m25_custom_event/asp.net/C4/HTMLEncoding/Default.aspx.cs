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
        Label1.Text=@"<b>你好</b>，换行符<br\>你在这里<吗>";
        Label1.Text = Server.HtmlEncode(@"<b>你好</b>，换行符<br\>你在这里<吗>");
    }
}
