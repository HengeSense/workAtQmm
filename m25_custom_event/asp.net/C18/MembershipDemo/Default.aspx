<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>首页</title>
    <style type="text/css">
        #Changepassword
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h4>这是网站首页</h4>
     <div id="top">
      <asp:LoginStatus ID="LoginStatus1" runat="server" LoginText="请先登录" 
            LogoutAction="Redirect" LogoutPageUrl="~/Default.aspx" LogoutText="登出系统" />
     </div>
    <asp:LoginView ID="LoginViewCtrl" runat="server">
      <AnonymousTemplate>
        <h4>用户没有登录，请先登录！</h4>
      </AnonymousTemplate>
      <LoggedInTemplate>
        <h2>用户</h2>
           提交评论: <asp:TextBox runat="server" ID="CommentText" /><br />
                     <asp:Button runat="server" ID="SubmitCommentAction" Text="提交" />
       </LoggedInTemplate>
    </asp:LoginView>
    <div id="Changepassword">
        <asp:ChangePassword ID="ChangePassword1" runat="server">
        </asp:ChangePassword>
    </div>
    <div id="Links">
        <asp:HyperLink ID="HyperLink1" runat="server" 
            NavigateUrl="~/GetAllusersDemo.aspx" Target="_blank">显示用户列表信息</asp:HyperLink>
    </div>
    </div>
    </form>
</body>
</html>
