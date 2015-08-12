<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>页面重定向示例</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>       
    <asp:Button ID="Button1" runat="server" Text="使用Response.Redirect重定向页面" 
            onclick="Button1_Click" /><br />
    <asp:Button ID="Button2" runat="server" Text="使用Server.Transfer重定向页面" 
            onclick="Button2_Click" />
    </div>
    </form>
</body>
</html>
