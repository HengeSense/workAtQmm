<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Menu Demo</title>
    <style type="text/css">
        #nav {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="nav">
    
        <asp:Menu ID="Menu1" runat="server" Orientation="Horizontal" 
            BackColor="#E3EAEB" DynamicHorizontalOffset="2" Font-Names="Verdana" 
            Font-Size="9pt" ForeColor="#666666" StaticSubMenuIndent="10px" 
            MaximumDynamicDisplayLevels="1">
            <StaticSelectedStyle BackColor="#1C5E55" />
            <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <DynamicHoverStyle BackColor="#666666" ForeColor="White" />
            <DynamicMenuStyle BackColor="#E3EAEB" />
            <DynamicSelectedStyle BackColor="#1C5E55" />
            <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
            <StaticHoverStyle BackColor="#666666" ForeColor="White" />
            <Items>
                <asp:MenuItem Text="首页" Value="首页"></asp:MenuItem>
                <asp:MenuItem Text="公司介绍" Value="公司介绍">
                    <asp:MenuItem Text="公司信息" Value="公司信息"></asp:MenuItem>
                    <asp:MenuItem Text="公司规模" Value="公司规模"></asp:MenuItem>
                    <asp:MenuItem Text="公司人员" Value="公司人员"></asp:MenuItem>
                </asp:MenuItem>
                <asp:MenuItem Text="产品信息" Value="产品信息">
                    <asp:MenuItem Text="硬件产品" Value="硬件产品"></asp:MenuItem>
                    <asp:MenuItem Text="软件产品" Value="软件产品"></asp:MenuItem>
                    <asp:MenuItem Text="专利产品" Value="专利产品"></asp:MenuItem>
                </asp:MenuItem>
                <asp:MenuItem Text="服务中心" Value="服务中心">
                    <asp:MenuItem Text="服务事项" Value="服务事项"></asp:MenuItem>
                    <asp:MenuItem Text="服务申报" Value="服务申报"></asp:MenuItem>
                    <asp:MenuItem Text="服务建议" Value="服务建议"></asp:MenuItem>
                </asp:MenuItem>
                <asp:MenuItem Text="关于" Value="关于"></asp:MenuItem>
            </Items>
        </asp:Menu>
    
    </div>
    </form>
</body>
</html>
