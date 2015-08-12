<%@ Page Language="C#" AutoEventWireup="true" CodeFile="webconfigConnectionString.aspx.cs" Inherits="webconfigConnectionString" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>web.config ConnectionString Demo</title>

    <style type="text/css">
        .newStyle1
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
    <div id="content" class="newStyle1">
    
    <asp:Label ID="lblInfo" runat="server"></asp:Label>
    <br />
    <asp:Button ID="Button1" runat="server" Text="连接数据库" onclick="Button1_Click" />
    
    </div>
    </form>
</body>
</html>
