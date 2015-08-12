<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>

<script type="text/javascript">
function ChineseNameMatch(ctl, args)
{
   //如果中文姓名为许三多，则有效
  args.IsValid=(args.Value=="许三多");
}
</script>
<body>
        <form id="form1" runat="server">
    <div>
    
        用户注册窗口<br /><hr />
        用户名：&nbsp;&nbsp;&nbsp; 
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ControlToValidate="TextBox1" ErrorMessage="请输入姓名">*</asp:RequiredFieldValidator>
        <br />
        密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ControlToValidate="TextBox2" ErrorMessage="请输入密码">*</asp:RequiredFieldValidator>
        <br />
        重复密码：<asp:TextBox ID="TextBox3" runat="server" TextMode="Password"></asp:TextBox>
        <asp:CompareValidator ID="CompareValidator1" runat="server" 
            ControlToCompare="TextBox2" ControlToValidate="TextBox3" ErrorMessage="请重复输入密码">*</asp:CompareValidator>
        <br />
<br>
中文姓名：<asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
        <asp:CustomValidator ID="CustomValidator1" runat="server" 
            ControlToValidate="TextBox4" ErrorMessage="请输入固定的中文姓名" 
            onservervalidate="CustomValidator1_ServerValidate" >*</asp:CustomValidator>
<br>
电子邮箱：<asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
            ControlToValidate="TextBox5" ErrorMessage="请输入正确格式的电子邮件地址" 
            ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">*</asp:RegularExpressionValidator>
<br>
真实年龄：<asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
        <asp:RangeValidator ID="RangeValidator1" runat="server" 
            ControlToValidate="TextBox6" ErrorMessage="请输入20-30之间的年龄:)" MaximumValue="30" 
            MinimumValue="20" Type="Integer">*</asp:RangeValidator>
        <br />
        <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
            ShowMessageBox="True" HeaderText="登录页面的错误信息汇总" />
        <br />
        <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button1" runat="server" Text="注册" />
    
    </div>
    </form>
</body>
</html>
