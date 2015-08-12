<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:BulletedList ID="BulletedList1" runat="server" DisplayMode="LinkButton" 
            onclick="BulletedList1_Click">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>          
        </asp:BulletedList>
    </div>
    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
    </form>
</body>
</html>
