<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TypedDataSetDemo.aspx.cs" Inherits="TypedDataSetDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>类型化数据集演示</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h4>LINQ查询类型化数据集演示</h4>
    <div id="top">
        <asp:Button ID="Button1" runat="server" Text="单表查询" onclick="Button1_Click" />
        <asp:Button ID="Button2" runat="server" Text="多表查询" onclick="Button2_Click" />
            </div>
    <div id="bottom">
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
            </div>
    </div>
    </form>
</body>
</html>
