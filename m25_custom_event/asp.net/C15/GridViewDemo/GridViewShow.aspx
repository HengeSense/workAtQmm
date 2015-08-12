<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GridViewShow.aspx.cs" Inherits="GridViewShow" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>GridView控件演示</title>
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
    <h4>GridView控件示例</h4>
     <asp:Label ID="lblProduct" runat="server"></asp:Label>
    <div id="contentbody">
        <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
            AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ProductID" 
            DataSourceID="SqlDataSource1" onrowcreated="GridView1_RowCreated" 
            onrowdatabound="GridView1_RowDataBound" 
            onselectedindexchanged="GridView1_SelectedIndexChanged" 
            onsorted="GridView1_Sorted" onsorting="GridView1_Sorting">
            <Columns>
                <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" 
                    ShowSelectButton="True" />
                <asp:BoundField DataField="ProductID" HeaderText="产品编号" InsertVisible="False" 
                    ReadOnly="True" SortExpression="ProductID" />
                <asp:BoundField DataField="ProductName" HeaderText="产品名称" 
                    SortExpression="ProductName" />
                <asp:TemplateField HeaderText="供应商编号" SortExpression="SupplierID">
                    <EditItemTemplate>
                        <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="dssupplier" 
                            DataTextField="CompanyName" DataValueField="SupplierID" 
                            SelectedValue='<%# Bind("SupplierID") %>'>
                        </asp:DropDownList>
                        <asp:SqlDataSource ID="dssupplier" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                            SelectCommand="SELECT [SupplierID], [CompanyName] FROM [Suppliers]">
                        </asp:SqlDataSource>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:HyperLink ID="HyperLink1" runat="server" 
                            NavigateUrl='<%# Eval("SupplierID", "SupplierDetail.aspx?SupplierID={0}") %>' 
                            Text='<%# GetSupNameBySupID((int)Eval("SupplierID")) %>'></asp:HyperLink>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:BoundField DataField="CategoryID" HeaderText="分类编号" 
                    SortExpression="CategoryID" />
                <asp:BoundField DataField="QuantityPerUnit" HeaderText="单位数量" 
                    SortExpression="QuantityPerUnit" />
                <asp:BoundField DataField="UnitPrice" HeaderText="单价" 
                    SortExpression="UnitPrice" />
                <asp:BoundField DataField="UnitsInStock" HeaderText="库存单位" 
                    SortExpression="UnitsInStock" />
                <asp:BoundField DataField="UnitsOnOrder" HeaderText="订单单位" 
                    SortExpression="UnitsOnOrder" />
                <asp:BoundField DataField="ReorderLevel" HeaderText="库存等级" 
                    SortExpression="ReorderLevel" />
                <asp:CheckBoxField DataField="Discontinued" HeaderText="是否作废" 
                    SortExpression="Discontinued" />
            </Columns>
            <SelectedRowStyle BackColor="#CCFFCC" />
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT * FROM [Products]" 
            DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID" 
            InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued]) VALUES (@ProductName, @SupplierID, @CategoryID, @QuantityPerUnit, @UnitPrice, @UnitsInStock, @UnitsOnOrder, @ReorderLevel, @Discontinued)" 
            UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID, [QuantityPerUnit] = @QuantityPerUnit, [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock, [UnitsOnOrder] = @UnitsOnOrder, [ReorderLevel] = @ReorderLevel, [Discontinued] = @Discontinued WHERE [ProductID] = @ProductID">
            <DeleteParameters>
                <asp:Parameter Name="ProductID" Type="Int32" />
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
                <asp:Parameter Name="ProductID" Type="Int32" />
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
        <div>
        <h5>订单详细信息</h5>
            <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" 
                        DataKeyNames="OrderID,ProductID" DataSourceID="SqlDataSource2" 
                        onrowdatabound="GridView2_RowDataBound" ShowFooter="True">
                <Columns>
                    <asp:BoundField DataField="OrderID" HeaderText="订单编号" ReadOnly="True" 
                        SortExpression="OrderID" />
                    <asp:BoundField DataField="ProductID" HeaderText="产品编号" ReadOnly="True" 
                        SortExpression="ProductID" />
                    <asp:BoundField DataField="UnitPrice" HeaderText="单价" 
                        SortExpression="UnitPrice" />
                    <asp:TemplateField HeaderText="数量" SortExpression="Quantity">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("Quantity") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <FooterTemplate>
                            <asp:Label ID="lblquantity" runat="server"></asp:Label>
                        </FooterTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="server" Text='<%# Bind("Quantity") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="Discount" HeaderText="折扣" 
                        SortExpression="Discount" />
                    <asp:TemplateField HeaderText="金额汇总">
                        <FooterTemplate>
                            <asp:Label ID="lblSumMoney" runat="server"></asp:Label>
                        </FooterTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                        SelectCommand="SELECT * FROM [Order Details] WHERE ([ProductID] = @ProductID)">
                        <SelectParameters>
                            <asp:ControlParameter ControlID="GridView1" Name="ProductID" 
                                PropertyName="SelectedValue" Type="Int32" />
                        </SelectParameters>
                    </asp:SqlDataSource>
        </div>
            </div>
    </div>
    </form>
</body>
</html>
