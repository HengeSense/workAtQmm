<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SqlCommandSelectProduct.aspx.cs" Inherits="SqlCommandSelectProduct" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SqlCommand Demo</title>
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
        <asp:Button ID="btnExecute" runat="server" Text="执行查询" 
            onclick="btnExecute_Click" />
        <asp:Label ID="lblCount" runat="server"></asp:Label>
        <br />
        选择要查看的供应商编码：<asp:DropDownList ID="DropDownList1" runat="server" 
            AutoPostBack="True" onselectedindexchanged="DropDownList1_SelectedIndexChanged">
        </asp:DropDownList>
        <br />
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
    </div>
    </form>
</body>
</html>
