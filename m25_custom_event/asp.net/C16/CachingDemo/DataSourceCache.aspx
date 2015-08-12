<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DataSourceCache.aspx.cs" Inherits="DataSourceCache" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>数据源控件缓存</title>
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
    <h4>使用SqlDatasource控件的缓存示例</h4>
    <div id="top">
        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" 
            DataSourceID="SqlDataSource2" DataTextField="CategoryName" 
            DataValueField="CategoryID">
        </asp:DropDownList>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" CacheDuration="6000" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            EnableCaching="True" 
            SelectCommand="SELECT [CategoryID], [CategoryName] FROM [Categories]">
        </asp:SqlDataSource>
    </div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                DataKeyNames="ProductID" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="ProductID" HeaderText="ProductID" 
                    InsertVisible="False" ReadOnly="True" SortExpression="ProductID" />
                <asp:BoundField DataField="ProductName" HeaderText="ProductName" 
                    SortExpression="ProductName" />
                <asp:BoundField DataField="SupplierID" HeaderText="SupplierID" 
                    SortExpression="SupplierID" />
                <asp:BoundField DataField="CategoryID" HeaderText="CategoryID" 
                    SortExpression="CategoryID" />
                <asp:BoundField DataField="QuantityPerUnit" HeaderText="QuantityPerUnit" 
                    SortExpression="QuantityPerUnit" />
                <asp:BoundField DataField="UnitPrice" HeaderText="UnitPrice" 
                    SortExpression="UnitPrice" />
                <asp:BoundField DataField="UnitsInStock" HeaderText="UnitsInStock" 
                    SortExpression="UnitsInStock" />
                <asp:BoundField DataField="UnitsOnOrder" HeaderText="UnitsOnOrder" 
                    SortExpression="UnitsOnOrder" />
                <asp:BoundField DataField="ReorderLevel" HeaderText="ReorderLevel" 
                    SortExpression="ReorderLevel" />
                <asp:CheckBoxField DataField="Discontinued" HeaderText="Discontinued" 
                    SortExpression="Discontinued" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT * FROM [Products]" CacheDuration="6000" 
                CacheExpirationPolicy="Sliding" EnableCaching="True" 
                FilterExpression="CategoryID={0}">
            <FilterParameters>
                <asp:ControlParameter ControlID="DropDownList1" Name="CategoryID" 
                    PropertyName="SelectedValue" />
            </FilterParameters>
            </asp:SqlDataSource>
    </div>
    </form>
</body>
</html>
