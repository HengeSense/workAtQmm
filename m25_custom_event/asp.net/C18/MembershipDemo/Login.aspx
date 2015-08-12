<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>使用Login控件</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
        /*登录窗体外观样式*/
        .loginbody
        {
            width: 250px;
            font: 9pt verdana;
            background-color: lightblue;
            border: solid 3px black;
            padding: 4px;
        }
        /*登录窗体的标题风格，指定深蓝色背影和白色前景*/
        .login_title
       {
            background-color: darkblue;
            color: white;
            font-weight: bold;
            font-family: verdana;
        }
        /*登录窗体的指示文本样式*/
        .login_instructions
       {
            font-size: 12px;
            text-align: left;
            padding: 10px;
            font-family: verdana;
        }
        /*登录窗体的按钮样式*/
        .login_button
        {
            border: solid 1px black;
            padding: 3px;
            font-family: verdana;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <div id="topcontent">
        <asp:LoginStatus ID="LoginStatus1" runat="server" LoginText="请先登录" 
            LogoutAction="Redirect" LogoutPageUrl="~/Default.aspx" LogoutText="登出系统" />
        </div>     
        <asp:Login ID="Login1" runat="server" BackColor="#EEEEFF" 
            DisplayRememberMe="False" InstructionText="请输入您的用户名和密码：" 
            CssClass="loginbody"
            TitleTextStyle-CssClass="login_title"
            InstructionTextStyle-CssClass="login_instructions"
            LoginButtonStyle-CssClass="login_button"
            TitleText="ASP.NET 3.5书籍管理系统登录" DestinationPageUrl="~/Default.aspx" 
            HelpPageText="进入帮助" HelpPageUrl="~/Help.aspx" 
            PasswordRecoveryText="忘记密码" 
            PasswordRecoveryUrl="~/PasswordRecovery.aspx" VisibleWhenLoggedIn="False">
            <LoginButtonStyle CssClass="login_button" />
            <LayoutTemplate>
                <table border="0" cellpadding="1" cellspacing="0" 
                    style="border-collapse:collapse;">
                    <tr>
                        <td>
                            <table border="0" cellpadding="0">
                                <tr>
                                    <td align="center" class="login_title" colspan="2">
                                        ASP.NET 3.5书籍管理系统登录</td>
                                </tr>
                                <tr>
                                    <td align="center" class="login_instructions" colspan="2">
                                        请输入您的用户名和密码：</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName">用户名:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="UserName" runat="server"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" 
                                            ControlToValidate="UserName" ErrorMessage="必须填写“用户名”。" ToolTip="必须填写“用户名”。" 
                                            ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password">密码:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" 
                                            ControlToValidate="Password" ErrorMessage="必须填写“密码”。" ToolTip="必须填写“密码”。" 
                                            ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2" style="color:Red;">
                                        <asp:Literal ID="FailureText" runat="server" EnableViewState="False"></asp:Literal>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right" colspan="2">
                                        <asp:Button ID="LoginButton" runat="server" CommandName="Login" 
                                            CssClass="login_button" Text="登录" ValidationGroup="Login1" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <asp:HyperLink ID="PasswordRecoveryLink" runat="server" 
                                            NavigateUrl="~/RecoveryPassword/PasswordRecovery.aspx">忘记密码</asp:HyperLink>
                                        <br />
                                        <asp:HyperLink ID="HelpLink" runat="server" NavigateUrl="~/help.aspx">进入帮助</asp:HyperLink>
                                        <br />
                                        <asp:HyperLink ID="HyperLink1" runat="server" 
                                            NavigateUrl="~/ChangePassword.aspx">更改密码</asp:HyperLink>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </LayoutTemplate>
            <InstructionTextStyle CssClass="login_instructions" />
            <TitleTextStyle CssClass="login_title" />
        </asp:Login>    
    </div>
    </form>
</body>
</html>
