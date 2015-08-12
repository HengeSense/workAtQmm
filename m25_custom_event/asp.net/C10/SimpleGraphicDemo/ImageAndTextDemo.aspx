<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ImageAndTextDemo.aspx.cs" Inherits="ImageAndTextDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Web and Image</title>
    <style type="text/css">
        #select
        {
            font-family: verdana;
            font-size: 9pt;
        }
        select,input
        {
            font-family: verdana;
            font-size: 9pt;
            color: #333300;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="select">
    请指定要缩放的高度：<asp:DropDownList ID="DropDownList1" runat="server">
        </asp:DropDownList>
        <asp:Button ID="Button1" runat="server" Text="显示图片" onclick="Button1_Click" />
    </div>
    <div id="image">
        <asp:Image ID="Image1" runat="server" />
    </div>    
    </form>
</body>
</html>
