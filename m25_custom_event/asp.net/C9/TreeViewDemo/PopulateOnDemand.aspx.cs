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

public partial class PopulateOnDemand : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void TreeView1_TreeNodePopulate(object sender, TreeNodeEventArgs e)
    {
        for (int i = 0; i < 3; i++)
        {
            TreeNode newNode = new TreeNode();
            newNode.Text = string.Format("动态加载的节点{0}", i);
            ////这里将新建的节点的PopulateOnDemand属性也设为True,将会形成一个无限递归
            newNode.PopulateOnDemand = true;
            //TreeNodeEventArgs中的Node属性表示当前的节点
            e.Node.ChildNodes.Add(newNode);
        }
    }
}
