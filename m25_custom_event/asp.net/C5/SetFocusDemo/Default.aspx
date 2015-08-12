<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:TextBox ID="TextBox1" runat="server" Height="20px" 
            ontextchanged="TextBox1_TextChanged" Width="267px">TextMode=SingleLine</asp:TextBox>
        <br />
        <br />
        <asp:TextBox ID="TextBox2" runat="server" Height="37px" TextMode="MultiLine" 
            Width="267px">TextMode=MultiLine</asp:TextBox>
        <br />
        <br />
        <asp:TextBox ID="TextBox3" runat="server" Height="22px" TextMode="Password" 
            Width="268px">TextMode=Password</asp:TextBox>
        <br />
        <br />
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="OK" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="Cancel" />
        <br />
    
    </div>
    </form>
</body>
</html>
