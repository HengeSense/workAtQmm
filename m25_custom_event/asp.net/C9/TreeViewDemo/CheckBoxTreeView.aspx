<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CheckBoxTreeView.aspx.cs" Inherits="CheckBoxTreeView" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CheckBox TreeView</title>
    <style type="text/css">
        #nav
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div id="nav">
        <asp:TreeView ID="TreeView1" runat="server" DataSourceID="XmlDataSource1" 
            ShowLines="True" onselectednodechanged="TreeView1_SelectedNodeChanged1" 
                ontreenodecheckchanged="TreeView1_TreeNodeCheckChanged" ShowCheckBoxes="Leaf">
            <DataBindings>
                <asp:TreeNodeBinding DataMember="Books" TextField="Title" ValueField="Title" 
                    ShowCheckBox="True" SelectAction="None" />
                <asp:TreeNodeBinding DataMember="Category" TextField="text" ValueField="id" 
                    ShowCheckBox="True" SelectAction="None" />
                <asp:TreeNodeBinding DataMember="book" TextField="Text" ValueField="id" 
                    ShowCheckBox="True" SelectAction="None" />
            </DataBindings>
        </asp:TreeView>
        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/Book.xml"></asp:XmlDataSource>        
        <asp:Button ID="Button1" runat="server" Text="获取选中节点" />        
        <br />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
            </div>
    </div>
    </form>
</body>
</html>
