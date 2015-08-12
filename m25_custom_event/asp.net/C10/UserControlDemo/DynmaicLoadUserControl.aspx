<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DynmaicLoadUserControl.aspx.cs" Inherits="DynmaicLoadUserControl" %>
<%@ Reference Control="~/UserControl/Registration.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dynamic Load UserControl</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
        <br />
        <asp:Label ID="lblInfo" runat="server"></asp:Label>
    </div>
    </form>
</body>
</html>
