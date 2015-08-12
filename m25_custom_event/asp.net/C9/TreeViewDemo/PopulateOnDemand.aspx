<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PopulateOnDemand.aspx.cs" Inherits="PopulateOnDemand" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Populate On Demand</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:TreeView ID="TreeView1" runat="server" ExpandDepth="0" 
            ontreenodepopulate="TreeView1_TreeNodePopulate">
            <Nodes>
                <asp:TreeNode PopulateOnDemand="True" Text="按需加载顶层结点" Value="按需加载顶层结点">
                </asp:TreeNode>
            </Nodes>
        </asp:TreeView>
    </div>
    </form>
</body>
</html>
