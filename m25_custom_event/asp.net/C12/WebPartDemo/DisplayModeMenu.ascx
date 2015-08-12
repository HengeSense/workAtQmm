<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DisplayModeMenu.ascx.cs" Inherits="DisplayModeMenu" %>
<div>
  <asp:Panel ID="Panel1" runat="server" 
    Borderwidth="1" 
    Width="292px" 
    BackColor="#EEEEFF"
    Font-Names="Verdana" >
    <asp:Label ID="Label1" runat="server" 
      Text="&nbsp;显示模式" 
      Font-Bold="true"
      Font-Size="9"
      Width="120" 
      AssociatedControlID="DisplayModeDropdown"/>
    <asp:DropDownList ID="DisplayModeDropdown" runat="server"  
      AutoPostBack="true" 
      Width="120"
      OnSelectedIndexChanged="DisplayModeDropdown_SelectedIndexChanged" />
    <asp:LinkButton ID="LinkButton1" runat="server"
      Text="重置状态" 
      ToolTip="重新设置当前用户的个性化状态."
      Font-Size="9" 
      OnClick="LinkButton1_Click" />
      </asp:Panel>
    <asp:Panel ID="Panel2" runat="server" 
      GroupingText="个性化范围"
      Font-Bold="true"
      Font-Size="9" 
      Visible="false" BackColor="#EEEEFF" >
      <asp:RadioButton ID="RadioButton1" runat="server" 
        Text="User" 
        AutoPostBack="true"
        GroupName="Scope" OnCheckedChanged="RadioButton1_CheckedChanged" />
      <asp:RadioButton ID="RadioButton2" runat="server" 
        Text="Shared" 
        AutoPostBack="true"
        GroupName="Scope" 
        OnCheckedChanged="RadioButton2_CheckedChanged" />
      
  </asp:Panel>
</div>
