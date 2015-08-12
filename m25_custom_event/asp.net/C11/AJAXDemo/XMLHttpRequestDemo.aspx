<%@ Page Language="C#" AutoEventWireup="true" CodeFile="XMLHttpRequestDemo.aspx.cs" Inherits="XMLHttpRequestDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>XMLHttpRequest Demo</title>
    <style type="text/css">
        #layout {
            font-family: verdana;
            font-size: 9pt;
            color: #006666;
        }
        select
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div id="layout">
                请选择书名以便查看书籍价格：<asp:DropDownList ID="DDLBook" runat="server">
                </asp:DropDownList>
                <asp:Button ID="btnView" runat="server" Text="查看" onclick="btnView_Click" />
                <br />
                所选书籍的价格是： 
                <asp:Label ID="lblPrice" runat="server" ></asp:Label>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    </form>
</body>
</html>
