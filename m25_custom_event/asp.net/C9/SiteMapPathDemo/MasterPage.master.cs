using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        lblTree.Text="当前节点信息：<br/>";
        lblTree.Text += SiteMap.CurrentNode.Title+"<br/>";
        lblTree.Text += SiteMap.CurrentNode.Description+"<br/>";
        if (SiteMap.CurrentNode.NextSibling != null)
        {
            lblTree.Text += "同级节点的下一个节点的的信息：<br/>";
            lblTree.Text += SiteMap.CurrentNode.NextSibling.Title + "<br/>";
            lblTree.Text += SiteMap.CurrentNode.NextSibling.Url + "<br/>";
        }
    }
}
