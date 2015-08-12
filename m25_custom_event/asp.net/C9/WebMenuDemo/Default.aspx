<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Menu and SiteMapDataSource</title>
    <style type="text/css">
        #topmenu
        {
            font-family: verdana;
            font-size: 9pt;
            display: block;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="topmenu">
    
        <asp:Menu ID="Menu1" runat="server" DataSourceID="SiteMapDataSource1" 
            MaximumDynamicDisplayLevels="0" Orientation="Horizontal" 
            onmenuitemclick="Menu1_MenuItemClick" BackColor="#E3EAEB" 
            DynamicHorizontalOffset="2" Font-Names="Verdana" Font-Size="9pt" 
            ForeColor="#666666" StaticSubMenuIndent="10px">
            <StaticSelectedStyle BackColor="#1C5E55" />
            <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <DynamicHoverStyle BackColor="#666666" ForeColor="White" />
            <DynamicMenuStyle BackColor="#E3EAEB" />
            <DynamicSelectedStyle BackColor="#1C5E55" />
            <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <DataBindings>
                <asp:MenuItemBinding DataMember="SiteMapNode" TextField="Title" />
            </DataBindings>
            <StaticHoverStyle BackColor="#666666" ForeColor="White" />
        </asp:Menu>
        <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" 
            ShowStartingNode="False" />   
            <br />
           当前菜单项的子菜单：  
    </div>
    <div id="bottommenu">
        <asp:Menu ID="Menu2" runat="server" DataSourceID="SiteMapDataSource2" 
            Orientation="Horizontal" BackColor="#F7F6F3" DynamicHorizontalOffset="2" 
            Font-Names="Verdana" Font-Size="9pt" ForeColor="#7C6F57" 
            StaticSubMenuIndent="10px">
            <StaticSelectedStyle BackColor="#5D7B9D" />
            <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <DynamicHoverStyle BackColor="#7C6F57" ForeColor="White" />
            <DynamicMenuStyle BackColor="#F7F6F3" />
            <DynamicSelectedStyle BackColor="#5D7B9D" />
            <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <StaticHoverStyle BackColor="#7C6F57" ForeColor="White" />
        </asp:Menu>
        <asp:SiteMapDataSource ID="SiteMapDataSource2" runat="server" 
            ShowStartingNode="False" StartingNodeOffset="-1" 
            StartingNodeUrl="Default.aspx?node=hardware" />
    </div>
    </form>
</body>
</html>
