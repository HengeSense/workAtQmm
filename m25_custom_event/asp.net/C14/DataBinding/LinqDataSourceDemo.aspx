<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LinqDataSourceDemo.aspx.cs" Inherits="LinqDataSourceDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LinqDataSource示例</title>
    <style type="text/css">
        #content {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>    
</head>
<body>
   <form id="form1" runat="server">
    <div id="content">
    <h4>LinqDataSource数据源控件示例</h4>
    <div id="search">请选择您要查询的产品分类信息：<asp:DropDownList ID="DropDownList1" runat="server">
        </asp:DropDownList>
        <asp:LinqDataSource ID="LinqDataSource1" runat="server">
        </asp:LinqDataSource>
    </div>
      <div id="products">
          <asp:GridView ID="GridView1" runat="server">
          </asp:GridView>
            </div>
    </div>
    </form>
</body>
</html>
