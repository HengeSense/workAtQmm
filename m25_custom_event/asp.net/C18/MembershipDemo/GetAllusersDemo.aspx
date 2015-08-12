<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GetAllusersDemo.aspx.cs" Inherits="GetAllusersDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>用户列表</title>
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
    <h4>用户列表</h4>
     <asp:GridView ID="UsersGridView" runat="server" DataKeyNames="UserName"
        AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" GridLines="None" 
                onselectedindexchanged="UsersGridView_SelectedIndexChanged" 
                onrowcommand="UsersGridView_RowCommand">
         <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
         <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
     <Columns>
       <asp:BoundField DataField="UserName" HeaderText="Username" />
       <asp:BoundField DataField="Email" HeaderText="Email" />
       <asp:BoundField DataField="CreationDate" HeaderText="Creation Date" />
       <asp:CommandField ShowSelectButton="True" />       
         <asp:HyperLinkField DataNavigateUrlFields="UserName" 
             DataNavigateUrlFormatString="EditUsers.aspx?UserName={0}" HeaderText="编辑用户" 
             Target="_blank" Text="编辑用户" />
         <asp:ButtonField CommandName="DeleteUser" Text="删除用户" />
     </Columns>
         <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
         <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
         <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
         <EditRowStyle BackColor="#999999" />
         <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
    </asp:GridView>    
    <div id="details">
    <h4>用户详细信息：</h4>
    
                <asp:DetailsView ID="DetailsView1" runat="server" 
                    BackColor="LightGoldenrodYellow" BorderColor="Tan" BorderWidth="1px" 
                    CellPadding="2" ForeColor="Black" GridLines="None" Height="50px" Width="125px">
                    <FooterStyle BackColor="Tan" />
                    <PagerStyle BackColor="PaleGoldenrod" ForeColor="DarkSlateBlue" 
                        HorizontalAlign="Center" />
                    <HeaderStyle BackColor="Tan" Font-Bold="True" />
                    <EditRowStyle BackColor="DarkSlateBlue" ForeColor="GhostWhite" />
                    <AlternatingRowStyle BackColor="PaleGoldenrod" />
                </asp:DetailsView>
                <br />
    
    </div>
    </div>
    </form>
</body>
</html>
