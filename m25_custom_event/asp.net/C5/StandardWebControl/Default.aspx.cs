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
    protected void Button1_Click(object sender, EventArgs e)
    {
        //向文本框的Text属性赋字符串。
        TextBox1.Text = "与TextBox关联的Label控件：";
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        //清除文本框中的字符串
        TextBox1.Text = "";
    }
}
