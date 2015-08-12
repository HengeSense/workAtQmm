<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProductsControl.ascx.cs" Inherits="ProductsControl" %>
<asp:DropDownList ID="DropDownList1" runat="server" 
    DataSourceID="SqlDataSource1" DataTextField="ProductName" 
    DataValueField="ProductID">
</asp:DropDownList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="SELECT [ProductName], [ProductID] FROM [Products]">
</asp:SqlDataSource>
