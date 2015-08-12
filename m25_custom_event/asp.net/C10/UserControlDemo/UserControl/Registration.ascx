<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Registration.ascx.cs" Inherits="Registration" %>
<style type="text/css">
    /*表格整体的样式设置，设置了表格宽度，表格字符和字体大小 */
    .style1
    {
        width: 400px;
        font-family: verdana;
        font-size: 9pt;
    }
    /*设置表格的提示文本 */
    th
    {
        text-align: right;
         width: 150px;
        }
   /*表单的输入文本样式 */
    input
    {
        font-family: verdana;
        font-size: 9pt;
        border-style: solid;
        border-width: 1px;
        background-color: #EEEEEF;
    }
     /*设置表格标题样式 */
    thead
    {
        font-family: 幼圆;
        font-size: 15pt;
        font-weight: bold;
        color: #006600;
        text-align: center;
    }
    
</style>
<table class="style1">
<thead>
<tr>
 <td colspan="2">用户注册窗体</td>
  </tr>
</thead>
    <tr>
        <th>
            请输入用户名称：</th>
        <td>
            <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                ControlToValidate="txtUserName" ErrorMessage="请输入用户名称">*</asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <th>
            请输入用户密码：</th>
        <td>
            <asp:TextBox ID="txtUserPass" runat="server" TextMode="Password"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                ControlToValidate="txtUserPass" ErrorMessage="请输入用户密码">*</asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <th>
            请再次输入用户名密码：</th>
        <td>
            <asp:TextBox ID="txtrepass" runat="server" TextMode="Password"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                ControlToValidate="txtrepass" ErrorMessage="请再次输入用户密码">*</asp:RequiredFieldValidator>
            <asp:CompareValidator ID="CompareValidator1" runat="server" 
                ControlToCompare="txtUserPass" ControlToValidate="txtrepass" 
                ErrorMessage="两次输入密码必须相同">*</asp:CompareValidator>
        </td>
    </tr>
    <tr>
        <th>
            请输入电子邮件地址：</th>
        <td>
            <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                ControlToValidate="txtEmail" ErrorMessage="请输入电子邮件地址">*</asp:RequiredFieldValidator>
            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                ControlToValidate="txtEmail" ErrorMessage="请输入正确格式的电子邮件地址" 
                ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">*</asp:RegularExpressionValidator>
        </td>
    </tr>
    <tr>
        <th>
            请重复电子邮件地址：</th>
        <td>
            <asp:TextBox ID="txtReEmail" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
                ControlToValidate="txtReEmail" ErrorMessage="请再次输入电子邮件地址">*</asp:RequiredFieldValidator>
            <asp:CompareValidator ID="CompareValidator2" runat="server" 
                ControlToCompare="txtEmail" ControlToValidate="txtReEmail" 
                ErrorMessage="两次输入的电子邮件地址必须一致">*</asp:CompareValidator>
        </td>
    </tr>
    <tr>
        <td colspan="2" align="center">
            <asp:Button ID="btnok" runat="server" Text="确定" onclick="btnok_Click" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="btnCancel" runat="server" Text="取消" />
        </td>
    </tr>
    <tr>
        <td colspan="2" align="center">
            <asp:ValidationSummary ID="ValidationSummary1" runat="server" />
        </td>
    </tr>
</table>
