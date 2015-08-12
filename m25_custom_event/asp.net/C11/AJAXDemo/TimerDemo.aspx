<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TimerDemo.aspx.cs" Inherits="TimerDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Timer控件演示</title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <!--在UpdatePanel内部放置了一个Timer控件，当Tick事件触发时将自动更新该UpdatePanel-->
    <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <asp:Label ID="Label1" runat="server"></asp:Label>
            <asp:Timer ID="Timer1" runat="server" Interval="1000" ontick="Timer1_Tick">
            </asp:Timer>
        </ContentTemplate>
    </asp:UpdatePanel>
    <br /><br />
    <!--在UpdatePanel的外部放置一个Timer控件-->
     <asp:Timer ID="Timer2" runat="server" Interval="1000" ontick="Timer2_Tick" >
      </asp:Timer>
        <asp:UpdatePanel ID="UpdatePanel2" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <asp:Label ID="Label2" runat="server"></asp:Label>          
        </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="Timer2" EventName="Tick" />
            </Triggers>
    </asp:UpdatePanel>
    </form>
</body>
</html>
