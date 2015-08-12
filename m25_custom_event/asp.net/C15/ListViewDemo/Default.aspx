<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ListView控件示例</title>
    <style type="text/css">
        /*显示标题文字*/
        h3
        {
            font-family: verdana;
            font-size: 14pt;
            font-weight: bold;
        }
        /*内容外框DIV显示字体*/
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
       /*HTML标签显示字体*/
        h6
        {
            font-family: verdana;
            font-size: 9pt;
            font-weight: bold;
        }
       /*每个ItemTemplate项，这里显示为浮动式布局*/        
        #item
        {
            padding: 10px;
            background-color: #EEEEFF;
            width: 200px;
            float : left;
            margin: 20px;
        }
        /*组的外框显示*/
        .group
        {
            border: 1px solid #006600;
            width: 100%;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h3>ListView控件使用示例</h3>
      <div id="top"></div>
      <div id="divbody">
      <asp:ListView ID="ListView1" runat="server" DataSourceID="SqlDataSource1" 
              GroupItemCount="3">
       <LayoutTemplate>
       <fieldset runat="server">
       <legend runat="server">产品列表</legend>
       <asp:PlaceHolder runat="server" ID="groupPlaceholder"></asp:PlaceHolder>
       </fieldset> 
     <asp:DataPager ID="DataPager1" runat="server" PageSize="6">
                <Fields>
                    <asp:NextPreviousPagerField ButtonType="Button" ShowFirstPageButton="True" 
                        ShowLastPageButton="True" />
                </Fields>
     </asp:DataPager>          
   </LayoutTemplate>
    <GroupTemplate>
    <div id="group" runat="server" class="group">
      <asp:PlaceHolder runat="server" ID="itemPlaceholder"></asp:PlaceHolder> 
    </div>      
   </GroupTemplate>
   <ItemTemplate> 
       <div id="item">
      <h6>产品名称：<%#Eval("ProductName")%> (产品分类编码：<%# Eval("CategoryID") %>)</h6>
      产品单价：<%#Eval("UnitPrice", "{0:c}")%>, 
      单位数量： <%#Eval("QuantityPerUnit")%>.
      </div>  
   </ItemTemplate>
 </asp:ListView>
          <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
              ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
              DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID" 
              InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued]) VALUES (@ProductName, @SupplierID, @CategoryID, @QuantityPerUnit, @UnitPrice, @UnitsInStock, @UnitsOnOrder, @ReorderLevel, @Discontinued)" 
              SelectCommand="SELECT * FROM [Products]" 
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
            
            </div>                  
    </div>
    </form>
</body>
</html>
