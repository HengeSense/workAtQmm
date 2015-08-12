<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="被零除" />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        <br />
         <asp:Button ID="Button2" runat="server" onclick="Button2_Click" 
            Text="捕捉异常示例" />
        <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
        <br />
                 <asp:Button ID="Button3" runat="server" onclick="Button3_Click" 
            Text="嵌套的异常示例" />
            <br />
        <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
        <br />
         <asp:Button ID="Button4" runat="server" onclick="Button4_Click" 
            Text="自定义的异常类" />
            <br />
        <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
    
    </div>
    </form>
</body>
</html>
