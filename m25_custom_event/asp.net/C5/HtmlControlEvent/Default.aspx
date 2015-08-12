<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <input id="Button1" type="button" value="button" runat="server" onserverclick="Button1Click" />
    </div>
<p>
    <input type="image" id="Img1"  runat="server" src="desktop.jpg" onserverclick="ImageServerClick"/>
    <br />
    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
    </p>
        </form>
</body>
</html>
