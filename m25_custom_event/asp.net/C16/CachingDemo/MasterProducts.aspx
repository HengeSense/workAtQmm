<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MasterProducts.aspx.cs" Inherits="MasterProducts" %>
<%@ OutputCache Duration="10" VaryByParam="*" VaryByControl="GridView1" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>产品列表</title>
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
    <h4>产品列表</h4>
     <div id="productsbody">
         <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
             AutoGenerateColumns="False" BackColor="White" BorderColor="#DEDFDE" 
             BorderStyle="None" BorderWidth="1px" CellPadding="4" DataKeyNames="ProductID" 
             DataSourceID="SqlDataSource1" ForeColor="Black" GridLines="Vertical" 
             Width="470px">
             <FooterStyle BackColor="#CCCC99" />
             <RowStyle BackColor="#F7F7DE" />
             <Columns>
                 <asp:BoundField DataField="ProductID" HeaderText="ProductID" 
                     InsertVisible="False" ReadOnly="True" SortExpression="ProductID" />
                 <asp:HyperLinkField DataNavigateUrlFields="ProductID" 
                     DataNavigateUrlFormatString="DetailsPage.aspx?ProductID={0}" 
                     DataTextField="ProductName" HeaderText="Product Name" Target="_blank" />
             </Columns>
             <PagerStyle BackColor="#F7F7DE" ForeColor="Black" HorizontalAlign="Right" />
             <SelectedRowStyle BackColor="#CE5D5A" Font-Bold="True" ForeColor="White" />
             <HeaderStyle BackColor="#6B696B" Font-Bold="True" ForeColor="White" />
             <AlternatingRowStyle BackColor="White" />
         </asp:GridView>
         <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
             ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
             SelectCommand="SELECT [ProductID], [ProductName] FROM [Products]">
         </asp:SqlDataSource>
     </div>    
    </div>
    </form>
</body>
</html>
