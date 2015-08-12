<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:TreeView ID="TreeView1" runat="server" ImageSet="WindowsHelp" 
            ShowLines="True">
            <ParentNodeStyle Font-Bold="False" />
            <HoverNodeStyle Font-Underline="True" ForeColor="#6666AA" />
            <SelectedNodeStyle BackColor="#B5B5B5" Font-Underline="False" 
                HorizontalPadding="0px" VerticalPadding="0px" />
            <Nodes>
                <asp:TreeNode Text="软件开发系列图书" Value="软件开发系列图书">
                    <asp:TreeNode Text=".NET版" Value=".NET版">
                        <asp:TreeNode Text="C# 2008程序设计" Value="C# 2008程序设计"></asp:TreeNode>
                        <asp:TreeNode Text="ASP.NET 3.5 从入门到精通" Value="ASP.NET 3.5 从入门到精通">
                        </asp:TreeNode>
                        <asp:TreeNode Text="Silverlight 2.0开发人员指南" Value="Silverlight 2.0开发人员指南">
                        </asp:TreeNode>
                        <asp:TreeNode Text="WCF程序设计" Value="WCF程序设计"></asp:TreeNode>
                        <asp:TreeNode Text="WF本质论" Value="WF本质论"></asp:TreeNode>
                    </asp:TreeNode>
                </asp:TreeNode>
            </Nodes>
            <NodeStyle Font-Names="Tahoma" Font-Size="8pt" ForeColor="Black" 
                HorizontalPadding="5px" NodeSpacing="0px" VerticalPadding="1px" />
        </asp:TreeView>
        <asp:TreeView ID="TreeView2" runat="server" ImageSet="XPFileExplorer" 
            NodeIndent="15">
            <ParentNodeStyle Font-Bold="False" />
            <HoverNodeStyle Font-Underline="True" ForeColor="#6666AA" />
            <SelectedNodeStyle BackColor="#B5B5B5" Font-Underline="False" 
                HorizontalPadding="0px" VerticalPadding="0px" />
            <NodeStyle Font-Names="Tahoma" Font-Size="8pt" ForeColor="Black" 
                HorizontalPadding="2px" NodeSpacing="0px" VerticalPadding="2px" />
        </asp:TreeView>
    
    </div>
    </form>
</body>
</html>
