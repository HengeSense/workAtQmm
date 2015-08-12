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

public partial class CheckBoxTreeView : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void TreeView1_SelectedNodeChanged(object sender, EventArgs e)
    {
        Label1.Text = TreeView1.SelectedNode.Text;
                
    }
    protected void TreeView1_SelectedNodeChanged1(object sender, EventArgs e)
    {

    }
    protected void TreeView1_TreeNodeCheckChanged(object sender, TreeNodeEventArgs e)
    {
        //判断当前选择了多少个节点
        if (TreeView1.CheckedNodes.Count > 0)
        {
            Label1.Text = "当前选择了如下节点：: <br /><br />";
            //CheckedNodes代表当前选择的节点的集合
            foreach (TreeNode node in TreeView1.CheckedNodes)
            {
                Label1.Text += node.Text + "<br />";
            }
        }
        else
        {
            Label1.Text = "没有节点被选择。";
        }
    }
}
