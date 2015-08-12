<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>    
        <asp:DropDownList ID="DropDownList1" runat="server" 
            onselectedindexchanged="DropDownList1_SelectedIndexChanged">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>        
        </asp:DropDownList>
        <br />
        DropDownList控件<br />
        <asp:ListBox ID="ListBox1" runat="server" SelectionMode="Multiple">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>
        </asp:ListBox>
        <br />
        ListBox控件<br />
         <asp:CheckBoxList ID="CheckBoxList1" runat="server" RepeatColumns="3" 
            RepeatDirection="Horizontal">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>
        </asp:CheckBoxList>
        <br />
        CheckBoxList控件<br />
        <asp:RadioButtonList ID="RadioButtonList1" runat="server" RepeatColumns="2" 
            onselectedindexchanged="RadioButtonList1_SelectedIndexChanged">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>        
        </asp:RadioButtonList>
        <br />
        RadioButtonList控件<br />
        <asp:BulletedList ID="BulletedList1" runat="server">
            <asp:ListItem>C#程序设计入门</asp:ListItem>
            <asp:ListItem>C# 2008编程指南</asp:ListItem>
            <asp:ListItem>LINQ in Action</asp:ListItem>
            <asp:ListItem>WPF 程序设计</asp:ListItem>        
        </asp:BulletedList>
        BulletedList控件<br />
        <asp:Button ID="Button1" runat="server" Text="显示每个列表控件的列表项" 
            onclick="Button1_Click" />
        <br />
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" 
            Text="显示ListBox中的选中项" />
        <br />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        <br />
    </div>
    </form>
</body>
</html>
