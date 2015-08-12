<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateUserWizardDemo.aspx.cs" Inherits="CreateUserWizardDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>用户注册窗体</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
        .style1
        {
            width: 101%;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
        <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" BackColor="#EEEEFF" 
            ContinueDestinationPageUrl="~/Default.aspx" 
            oncreateduser="CreateUserWizard1_CreatedUser">
            <WizardSteps>
                <asp:WizardStep ID="PersonalInfo" runat="server" Title="个人信息">
                    <table class="style1">
                        <tr>
                            <td colspan="2">
                                请输入个人信息</td>
                        </tr>
                        <tr>
                            <td>
                                中文名称：</td>
                            <td>
                                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                婚否</td>
                            <td>
                                <asp:DropDownList ID="DropDownList1" runat="server">
                                    <asp:ListItem>己婚</asp:ListItem>
                                    <asp:ListItem>未婚</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                职业：</td>
                            <td>
                                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                爱好</td>
                            <td>
                                <asp:TextBox ID="TextBox3" runat="server" Height="96px" TextMode="MultiLine"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </asp:WizardStep>
                <asp:CreateUserWizardStep ID="CreateUserWizardStep1" runat="server">
                </asp:CreateUserWizardStep>
                <asp:CompleteWizardStep ID="CompleteWizardStep1" runat="server">
                </asp:CompleteWizardStep>
            </WizardSteps>
        </asp:CreateUserWizard>
        <asp:Label ID="Label1" runat="server"></asp:Label>
        <br />
    </div>
    </form>
</body>
</html>
