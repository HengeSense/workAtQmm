<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SingleValueBinding.aspx.cs" Inherits="SingleValueBinding" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>单值绑定示例</title>
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
        <asp:Label ID="Label1" runat="server" Text=<%#DateTime.Now.ToString() %>></asp:Label>
        <br />
        <asp:Label ID="Label2" runat="server" Text=<%#GetWeeks() %>></asp:Label>
        <br />
        <asp:Label ID="Label3" runat="server" Text=<%#Path %>></asp:Label>
    </div>
    </form>
</body>
</html>
