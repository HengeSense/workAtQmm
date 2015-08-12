<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
    <style type="text/css">
        .tbl
        {
            font-family: verdana;
            font-size: 9pt;
            width: 500px;
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
    
        <table class="tbl">
            <tr>
                <th>
                   请输入用户名：</th>
                <td>
                    <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <th>
                   请输入密码：</th>
                <td>
                    <asp:TextBox ID="txtPassword" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="Msg" runat="server"></asp:Label>
                </td>
                <td>
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="登录" />
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
