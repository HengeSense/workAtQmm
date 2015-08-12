<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UsingDataAccess.aspx.cs" Inherits="UsingDataAccess" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>使用数据访问类</title>
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
    <h4>使用数据访问类</h4>
    <div id="top">
       <h6>
           <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></h6>
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" 
            Text="获取Products表" />
    
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="调用存储过程" />
    
    </div>
    <div id="body">
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
            </div>
    
    </div>
    </form>
</body>
</html>
