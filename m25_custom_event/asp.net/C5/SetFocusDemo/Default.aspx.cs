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
        //让TextBox1获取输入焦点
        TextBox1.Focus();
        //让Button1按钮成为默认按钮
        Page.Form.DefaultButton = "Button1";
    }
    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "点击了OK按钮";
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "点击了Cancel按钮";
    }
}
