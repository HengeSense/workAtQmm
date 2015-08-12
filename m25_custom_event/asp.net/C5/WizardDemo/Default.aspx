<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Wizard ID="Wizard1" runat="server" ActiveStepIndex="0" 
            DisplayCancelButton="True" onactivestepchanged="Wizard1_ActiveStepChanged" 
            onfinishbuttonclick="Wizard1_FinishButtonClick" 
            oncancelbuttonclick="Wizard1_CancelButtonClick" 
            onnextbuttonclick="Wizard1_NextButtonClick" BackColor="#E6E2D8" 
            BorderColor="#999999" BorderStyle="Solid" BorderWidth="1px" 
            Font-Names="Verdana" Font-Size="0.8em">
            <StepStyle BackColor="#F7F6F3" BorderColor="#E6E2D8" BorderStyle="Solid" 
                BorderWidth="2px" />
            <WizardSteps>
                <asp:WizardStep runat="server" ID="Step1"  title="第一步，输入基本信息" StepType="Start">
                <b>请输入你的个人基本信息：</b>
                <br />
                    请输入你的姓名：<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    <br />
                     请输入你的Email地址：<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                </asp:WizardStep>
                <asp:WizardStep runat="server" ID="Step2"  title="第二步，输入用户信息" StepType="Step">
                <b>请输入你的用户信息：</b>
                <br />
                    请输入你的登录用户名：<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                    <br />
                     请输入你的密码：<asp:TextBox ID="TextBox4"  runat="server" TextMode="Password"></asp:TextBox>
                </asp:WizardStep>
                <asp:WizardStep runat="server" StepType="Finish" ID="Finish"  Title="第三步，信息汇总">
                <b>登录信息汇总：</b><br />
                你的姓名是：<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label><br />
                你的Email地址是：<asp:Label ID="Label2" runat="server" Text="Label"></asp:Label><br />
                你的用户名称是：<asp:Label ID="Label3" runat="server" Text="Label"></asp:Label><br />
                你的密码是:<asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
                </asp:WizardStep>
            </WizardSteps>
            <SideBarButtonStyle ForeColor="White" />
            <NavigationButtonStyle BackColor="White" BorderColor="#C5BBAF" 
                BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" 
                ForeColor="#1C5E55" />
            <SideBarStyle BackColor="#1C5E55" Font-Size="0.9em" VerticalAlign="Top" />
            <HeaderStyle BackColor="#666666" BorderColor="#E6E2D8" BorderStyle="Solid" 
                BorderWidth="2px" Font-Bold="True" Font-Size="0.9em" ForeColor="White" 
                HorizontalAlign="Center" />
        </asp:Wizard>
    
    </div>
    </form>
</body>
</html>
