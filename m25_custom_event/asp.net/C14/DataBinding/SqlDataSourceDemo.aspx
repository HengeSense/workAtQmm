<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SqlDataSourceDemo.aspx.cs" Inherits="SqlDataSourceDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SqlDataSource控件演示</title>
    <style type="text/css">
        #connect
        {
            font-family: verdana;
            font-size: 9pt;
        }
        h4
        {
            font-family: verdana;
            font-size: 10.5pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <div id="connect">
    <h4>连接数据源</h4>
    <div id="searchProduct">
    请选择您要查询的产品编码：<asp:DropDownList ID="DropDownList1" runat="server" 
            DataSourceID="SqlDataSource2" DataTextField="CategoryName" 
            DataValueField="CategoryID">
        </asp:DropDownList>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT [CategoryName], [CategoryID] FROM [Categories]">
        </asp:SqlDataSource>
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" 
            Text="Select演示" />
    </div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                    DataKeyNames="ProductID" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
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
                    
                    SelectCommand="SELECT * FROM [Products] WHERE ([CategoryID] = @CategoryID)" 
                    ConflictDetection="CompareAllValues" 
                    DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @original_ProductID AND [ProductName] = @original_ProductName AND [SupplierID] = @original_SupplierID AND [CategoryID] = @original_CategoryID AND [QuantityPerUnit] = @original_QuantityPerUnit AND [UnitPrice] = @original_UnitPrice AND [UnitsInStock] = @original_UnitsInStock AND [UnitsOnOrder] = @original_UnitsOnOrder AND [ReorderLevel] = @original_ReorderLevel AND [Discontinued] = @original_Discontinued" 
                    InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued]) VALUES (@ProductName, @SupplierID, @CategoryID, @QuantityPerUnit, @UnitPrice, @UnitsInStock, @UnitsOnOrder, @ReorderLevel, @Discontinued)" 
                    OldValuesParameterFormatString="original_{0}" 
                    ondeleted="SqlDataSource1_Deleted" ondeleting="SqlDataSource1_Deleting" 
                    oninserted="SqlDataSource1_Inserted" oninserting="SqlDataSource1_Inserting" 
                    onselected="SqlDataSource1_Selected" onselecting="SqlDataSource1_Selecting" 
                    onupdated="SqlDataSource1_Updated" onupdating="SqlDataSource1_Updating" 
                    UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID, [QuantityPerUnit] = @QuantityPerUnit, [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock, [UnitsOnOrder] = @UnitsOnOrder, [ReorderLevel] = @ReorderLevel, [Discontinued] = @Discontinued WHERE [ProductID] = @original_ProductID AND [ProductName] = @original_ProductName AND [SupplierID] = @original_SupplierID AND [CategoryID] = @original_CategoryID AND [QuantityPerUnit] = @original_QuantityPerUnit AND [UnitPrice] = @original_UnitPrice AND [UnitsInStock] = @original_UnitsInStock AND [UnitsOnOrder] = @original_UnitsOnOrder AND [ReorderLevel] = @original_ReorderLevel AND [Discontinued] = @original_Discontinued">
                    <SelectParameters>
                        <asp:ControlParameter ControlID="DropDownList1" Name="CategoryID" 
                            PropertyName="SelectedValue" Type="Int32" />
                    </SelectParameters>
                    <DeleteParameters>
                        <asp:Parameter Name="original_ProductID" Type="Int32" />
                        <asp:Parameter Name="original_ProductName" Type="String" />
                        <asp:Parameter Name="original_SupplierID" Type="Int32" />
                        <asp:Parameter Name="original_CategoryID" Type="Int32" />
                        <asp:Parameter Name="original_QuantityPerUnit" Type="String" />
                        <asp:Parameter Name="original_UnitPrice" Type="Decimal" />
                        <asp:Parameter Name="original_UnitsInStock" Type="Int16" />
                        <asp:Parameter Name="original_UnitsOnOrder" Type="Int16" />
                        <asp:Parameter Name="original_ReorderLevel" Type="Int16" />
                        <asp:Parameter Name="original_Discontinued" Type="Boolean" />
                    </DeleteParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="ProductName" Type="String" />
                        <asp:Parameter Name="SupplierID" Type="Int32" />
                        <asp:Parameter Name="CategoryID" Type="Int32" />
                        <asp:Parameter Name="QuantityPerUnit" Type="String" />
                        <asp:Parameter Name="UnitPrice" Type="Decimal" />
                        <asp:Parameter Name="UnitsInStock" Type="Int16" />
                        <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
                        <asp:Parameter Name="ReorderLevel" Type="Int16" />
                        <asp:Parameter Name="Discontinued" Type="Boolean" />
                        <asp:Parameter Name="original_ProductID" Type="Int32" />
                        <asp:Parameter Name="original_ProductName" Type="String" />
                        <asp:Parameter Name="original_SupplierID" Type="Int32" />
                        <asp:Parameter Name="original_CategoryID" Type="Int32" />
                        <asp:Parameter Name="original_QuantityPerUnit" Type="String" />
                        <asp:Parameter Name="original_UnitPrice" Type="Decimal" />
                        <asp:Parameter Name="original_UnitsInStock" Type="Int16" />
                        <asp:Parameter Name="original_UnitsOnOrder" Type="Int16" />
                        <asp:Parameter Name="original_ReorderLevel" Type="Int16" />
                        <asp:Parameter Name="original_Discontinued" Type="Boolean" />
                    </UpdateParameters>
                    <InsertParameters>
                        <asp:Parameter Name="ProductName" Type="String" />
                        <asp:Parameter Name="SupplierID" Type="Int32" />
                        <asp:Parameter Name="CategoryID" Type="Int32" />
                        <asp:Parameter Name="QuantityPerUnit" Type="String" />
                        <asp:Parameter Name="UnitPrice" Type="Decimal" />
                        <asp:Parameter Name="UnitsInStock" Type="Int16" />
                        <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
                        <asp:Parameter Name="ReorderLevel" Type="Int16" />
                        <asp:Parameter Name="Discontinued" Type="Boolean" />
                    </InsertParameters>
                </asp:SqlDataSource>
    </div>
    </div>
    </form>
</body>
</html>
