<%@ Page Language="C#" CodeFile="login.aspx.cs" Inherits="login_aspx" MasterPageFile="~/MasterPage.master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="server">

    <script type="text/javascript">
    //定义一个membership变量
    var membership
    //完成异步登录过程。
    function DoLogin()
    {
        //实例化客户端的JSSK命名空间下的Membership类
        membership=new JSSK.Membership();
        //获取用户名和密码的值，$get是ASP.NET AJAX客户端脚本扩展的简化语法。
        //其代表GetElementByID函数。
        var uid=$get('Text2').value;
        var pwd=$get('Password2').value;
        //获取是否记住我复选框的值
        var rememberme=$get('Checkbox2').checked;
        //设置WaitLableId属性的值。
        membership.set_WaitLabelId("waitmsg");
        //开始异步验证过程。
        membership.BeginLogin(uid,pwd,rememberme);
    }    
</script>

<div align=center>
    <asp:ScriptManagerProxy ID="ScriptManagerProxy1" runat="server">
        <scripts>
            <asp:scriptreference Path="~/scripts/membership.js" />
            <asp:scriptreference Path="~/scripts/progressmessage.js" />
        </scripts>
    </asp:ScriptManagerProxy>
    <asp:Label ID="Label1" Runat="server" 
	Text="Already Registered? Login Now!" 
	SkinID="FormHeading"></asp:Label>
    <br />
    <br />
    <table align="center" cellpadding="3" cellspacing="0" style="width: 60%">
        <tr>
            <td align="right">
                <asp:Label ID="Label2" runat="server" Text="User ID :"></asp:Label>
            </td>
            <td align="left">
                <input id="Text2" type="text" /></td>
        </tr>
        <tr>
            <td align="right">
                <asp:Label ID="Label3" runat="server" Text="Password :"></asp:Label>
            </td>
            <td align="left">
                <input id="Password2" type="password" /></td>
        </tr>
        <tr>
            <td colspan="2">
                <input id="Button3" type="button" value="Login" class="dataentryformbutton" onclick="DoLogin()" /></td>
        </tr>
        <tr>
            <td colspan="2">
                <input id="Checkbox2" type="checkbox" /><asp:Label ID="Label5" runat="server" 
                    Text="Remember Me"></asp:Label>
            </td>
        </tr>
        </table>
    <br />
    <span id="waitmsg">&nbsp;</span>
	<br />
        <asp:HyperLink ID="HyperLink1" Runat="server" NavigateUrl="~/register.aspx">New user? Register here!</asp:HyperLink>
    <br />
    <br />
        <asp:PasswordRecovery ID="PasswordRecovery1" Runat="server" 
        onsendingmail="PasswordRecovery1_SendingMail">
        </asp:PasswordRecovery>&nbsp;</div>        
</asp:Content>
        
