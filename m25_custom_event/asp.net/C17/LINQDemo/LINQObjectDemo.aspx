<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LINQObjectDemo.aspx.cs" Inherits="LINQObjectDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LINQ to Object演示</title>
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
    <h5>LINQ 演示一</h5>
      <div id="orign">
          <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label><br />
          <asp:Button ID="Button1" runat="server" Text="使用传统方法" onclick="Button1_Click" />
      </div>
      <div id="linq">
          <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label><br />
          <asp:Button ID="Button2" runat="server" Text="使用LINQ语法" 
              onclick="Button2_Click" />
      </div>  
      <div id="linq2">
      <div>
          <asp:Button ID="Button3" runat="server" Text="执行查询" onclick="Button3_Click" /></div>
          <asp:GridView ID="GridView1" runat="server">
          </asp:GridView>
          <asp:Label ID="Label3" runat="server"></asp:Label>
          <br />
      </div> 
    </div>
    </form>
</body>
</html>
