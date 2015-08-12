<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ObjectDataSourceDemo.aspx.cs" Inherits="ObjectDataSourceDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ObjectDataSource示例</title>
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
    <h4>绑定到ObjectDataSource示例</h4>
    <div id="search">请选择您要查询的产品分类信息<asp:DropDownList ID="DropDownList1" runat="server" 
            AutoPostBack="True" DataSourceID="ObjectDataSource2" 
            DataTextField="CategoryName" DataValueField="CategoryID">
        </asp:DropDownList>
        <asp:ObjectDataSource ID="ObjectDataSource2" runat="server" 
            SelectMethod="GetCategories" TypeName="Categories"></asp:ObjectDataSource>
    </div>
      <div id="products">
          <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
              DataSourceID="ObjectDataSource1">
              <Columns>
                  <asp:CommandField ShowEditButton="True" />
                  <asp:BoundField DataField="ProductID" HeaderText="ProductID" 
                      SortExpression="ProductID" />
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
          <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" 
              SelectMethod="GetProductsByCategoryID" TypeName="Products" 
              DataObjectTypeName="Products" 
              onobjectcreating="ObjectDataSource1_ObjectCreating" 
              UpdateMethod="UpdateProduct">
              <SelectParameters>
                  <asp:ControlParameter ControlID="DropDownList1" Name="categoryID" 
                      PropertyName="SelectedValue" Type="Int32" />
              </SelectParameters>
          </asp:ObjectDataSource>
            </div>
    </div>
    </form>
</body>
</html>
