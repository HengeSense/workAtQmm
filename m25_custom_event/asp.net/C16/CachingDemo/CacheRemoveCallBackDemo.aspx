<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CacheRemoveCallBackDemo.aspx.cs" Inherits="CacheRemoveCallBackDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>缓存通知演示</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
            color: #006600;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
       <h4>缓存删除通知演示</h4>
       <h6>
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></h6>
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
    </div>
    <div id="bottom">
        <asp:Button ID="Button2" runat="server"
            Text="移除缓存" onclick="Button2_Click" /></div>
    </form>
</body>
</html>
