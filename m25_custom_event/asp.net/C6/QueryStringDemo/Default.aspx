<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>QueryString Demo</title>
    <style type="text/css">
        #book
        {
            font-family: 幼圆;
            font-size: 14px;
            background-color: #CCCCFF;
            width:300px;
            height:200px;
        }
        .ListBoxcss
        {
            font-family: verdana;
            font-size: 14px;
            height:70%;
            margin:auto 20px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="book">
    &nbsp;请选择所要查看的书籍名称：<br />
        <asp:ListBox ID="ListBox1" runat="server" CssClass="ListBoxcss">
            <asp:ListItem>Silverlight 2.0高级开发指南</asp:ListItem>
            <asp:ListItem>CSS网站布局实战</asp:ListItem>
            <asp:ListItem>C# 3.5企业级应用程序开发与设计</asp:ListItem>
            <asp:ListItem>在企业级应用程序中应用模式与重构</asp:ListItem>
        </asp:ListBox>
        <br />
        <asp:Button ID="Button1" runat="server" Text="查看书籍信息" onclick="Button1_Click" /> 
    </div>
    </form>
</body>
</html>
