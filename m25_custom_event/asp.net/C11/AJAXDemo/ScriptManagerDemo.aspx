<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ScriptManagerDemo.aspx.cs" Inherits="ScriptManagerDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ScriptManager演示程序</title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
        <Scripts>
            <asp:ScriptReference Path="Script/Script1.js" ScriptMode="Debug" />
        </Scripts>
    </asp:ScriptManager>
    <div>    
    </div>
    </form>
</body>
</html>
