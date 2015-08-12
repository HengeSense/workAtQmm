<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login1.aspx.cs" Inherits="Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>这是登录页</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
        h4
        {
            font-family: verdana;
            font-size: 16pt;            
        }
        .style1
        {
            border: 1px solid #008000;
            width: 400px;
        }
        th
        {
            font-family: verdana;
            font-size: 9pt;
            text-align: right;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h4>登录页面</h4>
    <div id="loginform">
        <table class="style1">
            <tr>
                <th>
                    请输入用户名：</th>
                <td>
                    <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <th>请输入密码：</th>
                <td><asp:TextBox ID="txtUserpass" runat="server" TextMode="Password"></asp:TextBox></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Label ID="lblInfo" runat="server"></asp:Label>
                </td></tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="登录" 
                        Width="105px" />
                </td>
            </tr>
        </table>
        </div>
    </div>
    <asp:Login ID="Login1" runat="server">
    </asp:Login>
    </form>
</body>
</html>
