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
        //新建一个TreeNode对象
        TreeNode rootNode = new TreeNode("软件开发系列图书");
        //将rootNode对象添加到TreeView对象的Nodes节点，这是必须的，否则TreeView将不会呈现出节点。
        TreeView2.Nodes.Add(rootNode);
        //继续添加子节点
        TreeNode childNode = new TreeNode(".NET版");
        childNode.ChildNodes.Add(new TreeNode("C# 2008程序设计"));
        childNode.ChildNodes.Add(new TreeNode("ASP.NET 3.5 从入门到精通"));
        childNode.ChildNodes.Add(new TreeNode("Silverlight 2.0开发人员指南"));
        childNode.ChildNodes.Add(new TreeNode("WCF程序设计"));        
        rootNode.ChildNodes.Add(childNode);      
    }
}
