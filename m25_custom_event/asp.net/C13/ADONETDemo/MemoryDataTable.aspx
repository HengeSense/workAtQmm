﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MemoryDataTable.aspx.cs" Inherits="MemoryDataTable" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>内存表管理示例</title>
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
         <asp:Button ID="btnCreate" runat="server" Text="创建内存表" 
             onclick="btnCreate_Click"/>
        </div>
     <div id="productbody">
         <asp:GridView ID="GridView1" runat="server">
         </asp:GridView>
        </div>
     </div>
    </form>
</body>
</html>
