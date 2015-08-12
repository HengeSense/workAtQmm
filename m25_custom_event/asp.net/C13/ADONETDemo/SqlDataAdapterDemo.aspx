<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SqlDataAdapterDemo.aspx.cs" Inherits="SqlDataAdapterDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DataAdapter程序示例</title>
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
     <div id="top">
         <asp:Button ID="btnSearch" runat="server" Text="查询Products表" 
             onclick="btnSearch_Click" />
        </div>
     <div id="productbody">
         <asp:GridView ID="GridView1" runat="server">
         </asp:GridView>
        </div>
    </div>
    </form>
</body>
</html>
