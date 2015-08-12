<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PageCaching.aspx.cs" Inherits="PageCaching" %>
<%@ OutputCache Duration="5" VaryByParam="None" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>输出缓存示例</title>
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
        <asp:Label ID="lblDate" runat="server" Text="Label"></asp:Label>
        <br />
        <asp:Button ID="Button1" runat="server" Text="刷新" />
    </div>
    
    </form>
</body>
</html>
