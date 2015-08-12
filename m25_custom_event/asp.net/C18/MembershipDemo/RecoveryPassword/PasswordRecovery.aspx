<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PasswordRecovery.aspx.cs" Inherits="PasswordRecovery" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>找回密码窗口</title>
    <style type="text/css">
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
      <h6>找回密码控件</h6>
        <asp:PasswordRecovery ID="PasswordRecovery1" runat="server" BackColor="#EEEEFF" 
                BorderColor="#009999">
            <MailDefinition BodyFileName="MailBody.txt" From="cat_317@163.com" 
                Priority="High" Subject="您的密码己经找到">
            </MailDefinition>
        </asp:PasswordRecovery>
    </div>
    </form>
</body>
</html>
