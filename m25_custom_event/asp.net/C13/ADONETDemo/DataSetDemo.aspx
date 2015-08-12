<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DataSetDemo.aspx.cs" Inherits="DataSetDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>使用DataSet示例</title>
    <style type="text/css">
        #Content
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="Content">
     <div id="CustomersTable">
     <h3>Customers数据表</h3>
       请选择想要查看细节的Customer：<asp:DropDownList ID="ddlCustomer" runat="server" 
             AutoPostBack="true" onselectedindexchanged="ddlCustomer_SelectedIndexChanged">
         </asp:DropDownList>
         <div>
             <asp:GridView ID="GridView1" runat="server">
             </asp:GridView>
         </div>
     </div>
     <div id="OrdersTable">
     <h3>Orders数据表</h3>
     请在下面的列表框中选择所要查看的订单号码：<br />
         <asp:ListBox ID="lstOrder" runat="server" AutoPostBack="True" 
                    onselectedindexchanged="lstOrder_SelectedIndexChanged" Width="493px"></asp:ListBox>
                <asp:GridView ID="GrdOrder" runat="server">
                </asp:GridView>
     </div>
     <div id="OrdersDetailsTable">
     <h3>Orders Details数据表</h3>
         <asp:GridView ID="GridView3" runat="server">
         </asp:GridView>
     </div>
    </div>
    </form>
</body>
</html>
