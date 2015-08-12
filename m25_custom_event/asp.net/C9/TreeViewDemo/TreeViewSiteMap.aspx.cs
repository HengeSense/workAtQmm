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

public partial class TreeViewSiteMap : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //初始化根节点
        TreeNode node = new TreeNode();
        //调用递归方法遍历添加节点
        LoadSiteMap(SiteMap.RootNode,node);
        TreeView1.Nodes.Add(node);
    }
    protected void LoadSiteMap(SiteMapNode node,TreeNode tvNode)
    {
        //获取根节点的子节点
        int count = node.ChildNodes.Count;
        //这里循环遍历节点
        for (int i = 0; i < count; i++)
        {
            //获取根节点的子节点
            SiteMapNode smNode =node.ChildNodes[i];
            //从子节点获取导航信息
            TreeNode tempNode = new TreeNode(smNode.Title, "", "", smNode.Url, "");
            tvNode.ChildNodes.Add(tempNode);
            //如果子节点还存在其他子节点
            if (smNode.HasChildNodes)
            {
                //如果当前节点还有子节点，则调用递归过程进行遍历
                LoadSiteMap(smNode, tempNode);
            }
        }
    }
}
