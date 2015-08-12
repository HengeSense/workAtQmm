<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Createuser.aspx.cs" Inherits="Createuser" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>创建新用户</title>
    <style type="text/css">
        .style1
        {
            width: 500px;
        }
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
     <h4>创建新用户</h4>
     

    <table class="style1">
        <tr>
            <td>
                用户名：</td>
            <td>
                <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                密码：</td>
            <td>
                <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
                    </td>
        </tr>
        <tr>
            <td>
                电子邮件地址：</td>
            <td>
                <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                密码提示问题 ：</td>
            <td>
                <asp:TextBox ID="txtQuestion" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                问题答案：</td>
            <td>
                <asp:TextBox ID="txtAnswer" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="创建用户" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="lblStatus" runat="server"></asp:Label>
                    </td>
        </tr>
    </table>
        </div>
    </form>
</body>
</html>
