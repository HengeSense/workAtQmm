<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LinqDataSourceDemo.aspx.cs" Inherits="LinqDataSourceDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
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
    <div id="search">请选择您要查询的产品分类信息：<asp:DropDownList ID="DropDownList1" runat="server" 
            AutoPostBack="True" DataSourceID="LinqDataSource1" DataTextField="CategoryName" 
            DataValueField="CategoryID">
        </asp:DropDownList>
        <asp:LinqDataSource ID="LinqDataSource1" runat="server" 
            ContextTypeName="ProductsDataContext" Select="new (CategoryName, CategoryID)" 
            TableName="Categories">
        </asp:LinqDataSource>
    </div>
      <div id="products">
          <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
              AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ProductID" 
              DataSourceID="LinqDataSource2">
              <Columns>
                  <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" 
                      ShowSelectButton="True" />
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
            <asp:LinqDataSource ID="LinqDataSource2" runat="server" 
              ContextTypeName="ProductsDataContext" EnableDelete="True" EnableInsert="True" 
              EnableUpdate="True" TableName="Products" Where="CategoryID == @CategoryID">
                <WhereParameters>
                    <asp:ControlParameter ControlID="DropDownList1" Name="CategoryID" 
                        PropertyName="SelectedValue" Type="Int32" />
                </WhereParameters>
          </asp:LinqDataSource>
            </div>
    </div>
    </form>
</body>
</html>
