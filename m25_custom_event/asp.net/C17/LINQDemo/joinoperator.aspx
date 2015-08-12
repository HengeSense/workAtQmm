<%@ Page Language="C#" AutoEventWireup="true" CodeFile="joinoperator.aspx.cs" Inherits="joinoperator" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>联接查询示例</title>
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
    <h4>联接查询示例</h4>
    <div id="top">
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="内联查询" />
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="左联示例" />
            </div>
    <div id="bodycontent">
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
            </div>    
    </div>
    </form>
</body>
</html>
