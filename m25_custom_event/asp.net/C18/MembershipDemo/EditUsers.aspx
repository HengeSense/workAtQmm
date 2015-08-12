<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EditUsers.aspx.cs" Inherits="EditUsers" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>编辑用户</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
        .style1
        {
            width: 500px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h4>编辑用户</h4>
        <table class="style1">
            <tr>
                <td>
                    当前用户名：</td>
                <td>
                    <asp:Label ID="lblUser" runat="server"></asp:Label>
                </td>
            </tr>
            <tr>
                <td>
                    电子邮箱：</td>
                <td>
                    <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    评语：</td>
                <td>
                    <asp:TextBox ID="txtComment" runat="server" TextMode="MultiLine"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    <asp:CheckBox ID="CheckBox1" runat="server" Text="是否确认" />
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    <asp:Button ID="Button1" runat="server" Text="更新用户" onclick="Button1_Click" />
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    <asp:Label ID="lblErrorMessage" runat="server"></asp:Label>
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
