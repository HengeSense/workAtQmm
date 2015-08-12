<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        当前共有记录数：<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        <asp:DetailsView ID="DetailsView1" runat="server" 
            DataSourceID="LinqDataSource1" Height="50px" Width="277px" 
            AllowPaging="True" AutoGenerateRows="False" CellPadding="4" 
            DataKeyNames="au_id" ForeColor="#333333" GridLines="None">
            <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
            <CommandRowStyle BackColor="#E2DED6" Font-Bold="True" />
            <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
            <FieldHeaderStyle BackColor="#E9ECF1" Font-Bold="True" />
            <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
            <Fields>
                <asp:BoundField DataField="au_id" HeaderText="au_id" ReadOnly="True" 
                    SortExpression="au_id" />
                <asp:BoundField DataField="au_lname" HeaderText="au_lname" 
                    SortExpression="au_lname" />
                <asp:BoundField DataField="au_fname" HeaderText="au_fname" 
                    SortExpression="au_fname" />
                <asp:BoundField DataField="phone" HeaderText="phone" SortExpression="phone" />
                <asp:BoundField DataField="address" HeaderText="address" 
                    SortExpression="address" />
                <asp:BoundField DataField="city" HeaderText="city" SortExpression="city" />
                <asp:BoundField DataField="state" HeaderText="state" SortExpression="state" />
                <asp:BoundField DataField="zip" HeaderText="zip" SortExpression="zip" />
                <asp:CheckBoxField DataField="contract" HeaderText="contract" 
                    SortExpression="contract" />
                <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" 
                    ShowInsertButton="True" />
            </Fields>
            <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
            <EditRowStyle BackColor="#999999" />
            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
        </asp:DetailsView>
        <asp:LinqDataSource ID="LinqDataSource1" runat="server" 
            ContextTypeName="PubsDataContext" EnableDelete="True" EnableInsert="True" 
            EnableUpdate="True" TableName="authors">
        </asp:LinqDataSource>
    
    </div>
    </form>
</body>
</html>
