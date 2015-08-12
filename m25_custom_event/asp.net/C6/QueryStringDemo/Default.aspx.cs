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
        //如果没有选择任何书籍，提示用户进行选择
        if (ListBox1.SelectedIndex == -1)
        {
            Response.Write("请选择一本书!");
        }
        else
        {
            //使用选择的书籍名称购造Url.
            string url = "BookDetail.aspx?";
            //为了防止在Url中出现非法字符，这里使用Server.UrlEncode对Url进行编码
            url += "BookName=" +Server.UrlEncode(ListBox1.SelectedValue);
            //重定向到指定的Url
            Response.Redirect(url);
        }
    }
}
