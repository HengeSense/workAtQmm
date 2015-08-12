<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TransactionDemoPage.aspx.cs" Inherits="TransactionDemoPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>事务使用示例</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
            width: 400px;
            margin:0px auto;
        }
        .bank
        {
            width: 200px;
            float: left;
            height:100px;
        }
        #result
        {
            float: left;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <div id="banka" class="bank">BankA账户：<asp:GridView ID="GridView1" runat="server" 
            AutoGenerateColumns="False" DataKeyNames="Account" 
            DataSourceID="SqlDataSource1" EmptyDataText="没有可显示的数据记录。">
        <Columns>
            <asp:BoundField DataField="Account" HeaderText="Account" ReadOnly="True" 
                SortExpression="Account" />
            <asp:BoundField DataField="Customer" HeaderText="Customer" 
                SortExpression="Customer" />
            <asp:BoundField DataField="Balance" HeaderText="Balance" 
                SortExpression="Balance" />
        </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:TransactionDemoConnectionString1 %>" 
            DeleteCommand="DELETE FROM [BankA] WHERE [Account] = @Account" 
            InsertCommand="INSERT INTO [BankA] ([Account], [Customer], [Balance]) VALUES (@Account, @Customer, @Balance)" 
            ProviderName="<%$ ConnectionStrings:TransactionDemoConnectionString1.ProviderName %>" 
            SelectCommand="SELECT [Account], [Customer], [Balance] FROM [BankA]" 
            UpdateCommand="UPDATE [BankA] SET [Customer] = @Customer, [Balance] = @Balance WHERE [Account] = @Account">
            <DeleteParameters>
                <asp:Parameter Name="Account" Type="String" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="Account" Type="String" />
                <asp:Parameter Name="Customer" Type="String" />
                <asp:Parameter Name="Balance" Type="Decimal" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="Customer" Type="String" />
                <asp:Parameter Name="Balance" Type="Decimal" />
                <asp:Parameter Name="Account" Type="String" />
            </UpdateParameters>
        </asp:SqlDataSource>
            </div>
    <div id="bankb" class="bank">BankB账户：<asp:GridView ID="GridView2" runat="server" 
            AutoGenerateColumns="False" DataKeyNames="Account" 
            DataSourceID="SqlDataSource2" EmptyDataText="没有可显示的数据记录。">
        <Columns>
            <asp:BoundField DataField="Account" HeaderText="Account" ReadOnly="True" 
                SortExpression="Account" />
            <asp:BoundField DataField="Customer" HeaderText="Customer" 
                SortExpression="Customer" />
            <asp:BoundField DataField="Balance" HeaderText="Balance" 
                SortExpression="Balance" />
        </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
            ConnectionString="<%$ ConnectionStrings:TransactionDemoConnectionString1 %>" 
            DeleteCommand="DELETE FROM [BankB] WHERE [Account] = @Account" 
            InsertCommand="INSERT INTO [BankB] ([Account], [Customer], [Balance]) VALUES (@Account, @Customer, @Balance)" 
            ProviderName="<%$ ConnectionStrings:TransactionDemoConnectionString1.ProviderName %>" 
            SelectCommand="SELECT [Account], [Customer], [Balance] FROM [BankB]" 
            UpdateCommand="UPDATE [BankB] SET [Customer] = @Customer, [Balance] = @Balance WHERE [Account] = @Account">
            <DeleteParameters>
                <asp:Parameter Name="Account" Type="String" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="Account" Type="String" />
                <asp:Parameter Name="Customer" Type="String" />
                <asp:Parameter Name="Balance" Type="Decimal" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="Customer" Type="String" />
                <asp:Parameter Name="Balance" Type="Decimal" />
                <asp:Parameter Name="Account" Type="String" />
            </UpdateParameters>
        </asp:SqlDataSource>
            </div>
    <div id="result">
        <asp:Button ID="Button1" runat="server" Text="开始转账" onclick="Button1_Click" />
        <asp:Label ID="lblResult" runat="server" ></asp:Label>
            </div>
    </div>
    </form>
</body>
</html>
