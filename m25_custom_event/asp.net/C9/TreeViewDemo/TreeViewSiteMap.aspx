<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TreeViewSiteMap.aspx.cs" Inherits="TreeViewSiteMap" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>TreeView Demo</title>
    <style type="text/css">
        #left
        {
            font-family: verdana;
            font-size: 9px;
            float: left;
            width: 300px;
        }
        #right
        {
            width: 300px;
            font-family: verdana;
            font-size: 9px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="left">
        <asp:TreeView ID="TreeView1" runat="server" ImageSet="Arrows">
            <ParentNodeStyle Font-Bold="False" />
            <HoverNodeStyle Font-Underline="True" ForeColor="#5555DD" />
            <SelectedNodeStyle Font-Underline="True" ForeColor="#5555DD" 
                HorizontalPadding="0px" VerticalPadding="0px" />
            <NodeStyle Font-Names="Tahoma" Font-Size="10pt" ForeColor="Black" 
                HorizontalPadding="5px" NodeSpacing="0px" VerticalPadding="0px" />
        </asp:TreeView>      
    </div>
    <div id="right">
      <asp:TreeView ID="TreeView2" runat="server" DataSourceID="SiteMapDataSource1">
        </asp:TreeView>
        <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" />
    </div>
    </form>
</body>
</html>
