<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DatareaderDemo.aspx.cs" Inherits="DatareaderDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DataReader举例</title>
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
      <div id="customerlist">选择客户编码：<asp:DropDownList ID="DropDownList1" runat="server" 
              AutoPostBack="True" 
              onselectedindexchanged="DropDownList1_SelectedIndexChanged">
          </asp:DropDownList><br />
          当前选定的公司的客户编码是：<asp:Label ID="lblCustomerID" runat="server" ></asp:Label>
            <br />
          <asp:Label ID="lblProduct" runat="server" Text="Label"></asp:Label>
            </div>
    </div>
    </form>
</body>
</html>
