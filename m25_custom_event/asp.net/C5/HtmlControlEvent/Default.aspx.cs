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
    protected void Button1Click(object sender,EventArgs e)
    {
        Response.Write(DateTime.Now.ToString());
    }
    protected void ImageServerClick(Object sender, ImageClickEventArgs e)
    {
        Label1.Text = "鼠标单击位置点在：(" + e.X.ToString() + ", " + e.Y.ToString() + "). ";
    }
}
