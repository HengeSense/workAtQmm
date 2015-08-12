<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Binding To XML</title>
    <style type="text/css">
        /*第一层菜单样式*/
        .level1
        {
            color: White;
            background-color: #000099;
            font-variant: small-caps;
            font-size: 9pt;
            font-weight: bold;
            font-family: verdana;
        }
        /*第二层菜单样式*/
        .level2
        {
            color: #000000;
            font-family: verdana;
            font-size: 9pt;
            background-color: #eeeeef;
        }
        /*第三层菜单样式*/
        .level3
        {
            color: #666666;
            background-color: #eeeeff;
            font-family: verdana;
            font-size: 9pt;
        }
        /*鼠标悬停菜单样式*/
        .hoverstyle
        {
            font-weight: bold;
            font-size: 9pt;
            font-family: verdana;
        }
        /*子层菜单样式*/
        .sublevel1
{
            background-color: #33CC33;
            color: #000000;
            font-family: verdana;
            font-size: 9pt;
        }

    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="navmenu">        
        <asp:Menu ID="Menu1" runat="server" Orientation="Horizontal" 
            DataSourceID="XmlDataSource1" StaticDisplayLevels="2">
             <LevelMenuItemStyles>             
               <asp:MenuItemStyle CssClass="level1"/>
               <asp:MenuItemStyle CssClass="level2"/>
               <asp:MenuItemStyle CssClass="level3" />
             </LevelMenuItemStyles>
               <StaticHoverStyle CssClass="hoverstyle"/>
            <LevelSubMenuStyles>
               <asp:SubMenuStyle CssClass="sublevel1" />
            </LevelSubMenuStyles>
            <DataBindings>
                <asp:MenuItemBinding DataMember="Books" TextField="title" />
                <asp:MenuItemBinding DataMember="Category" TextField="title" />
                <asp:MenuItemBinding DataMember="book" TextField="title" />
            </DataBindings>
             <StaticItemTemplate>
                <small><%# Eval("Text") %></small> 
             </StaticItemTemplate>
             <DynamicItemTemplate>
                <b> <%# Eval("Text") %></b>
             </DynamicItemTemplate>
        </asp:Menu>
       <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/Books.xml"></asp:XmlDataSource> 
    </div>
    </form>
</body>
</html>
