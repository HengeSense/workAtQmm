<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LINQToDataSetDemo.aspx.cs" Inherits="LINQToDataSetDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LINQ to DataSet示例</title>
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
    <h4>LINQ to DataSet查询</h4>
    <div id="top">
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="单表查询" />
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="多表查询" />
            </div>
    <div id="bottom">
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
            </div>
    </div>
    </form>
</body>
</html>
