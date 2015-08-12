<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DataContextObjectDemo.aspx.cs" Inherits="DataContextObjectDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
    <style type="text/css">
        #content {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h4>DataContext 示例</h4>
    <div id="top">
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="获取数据" />
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="查询产品表" />
        <asp:Button ID="Button3" runat="server" onclick="Button3_Click" Text="客户端过滤" />
        <h6>
            <asp:Label ID="Label1" runat="server"></asp:Label></h6>
            </div>
    <div id="bottom">
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
            </div>
    
    </div>
    </form>
</body>
</html>
