<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>    
        <asp:Label ID="Label1" runat="server" AssociatedControlID="TextBox1" 
            Text="与TextBox关联的Label控件："></asp:Label>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Button ID="Button1" runat="server" Text="OK" onclick="Button1_Click" />
        <asp:LinkButton ID="LinkButton1" runat="server" onclick="LinkButton1_Click">Please Click
        </asp:LinkButton>    
    </div>
    <asp:TextBox runat="server" ID="TextBox2" Text="测试文本"
      ForeColor="red" BackColor="lightyellow" Width="250px"
      Font-Name="Verdana" Font-Bold="True" Font-Size="20" />
    </form>
</body>
</html>
