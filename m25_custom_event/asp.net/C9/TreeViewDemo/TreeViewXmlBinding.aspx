<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TreeViewXmlBinding.aspx.cs" Inherits="TreeViewXmlBinding" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>XML Binding</title>
    <style type="text/css">
        #nav
        {
            font-family: verdana;
            font-size: 9pt;
            float: left;
            width: 300px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="nav">
        <asp:TreeView ID="TreeView1" runat="server" DataSourceID="XmlDataSource1" 
            onselectednodechanged="TreeView1_SelectedNodeChanged" ShowLines="True">
            <DataBindings>
                <asp:TreeNodeBinding DataMember="Books" TextField="Title" ValueField="Title" />
                <asp:TreeNodeBinding DataMember="Category" TextField="text" ValueField="id" />
                <asp:TreeNodeBinding DataMember="book" TextField="Text" ValueField="id" />
            </DataBindings>
        </asp:TreeView>
        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/Book.xml"></asp:XmlDataSource>
    </div>
    </form>
</body>
</html>
