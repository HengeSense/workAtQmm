<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>FormView演示</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
        th
        {
            border: 1px solid #00FF00;
            font-family: verdana;
            font-size: 9pt;
            color: #003399;
            background-color: #EEEEFF;
            width: 100px;
            text-align: right;
        }
        table
        {
            border: 1px dotted #FF0000;
            width: 600px;
        }
        td
        {
            border: 1px solid #00FF00;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
    <h3>FormView演示</h3>
      <div id="top"></div>
      <div id="employeebody">
          <asp:FormView ID="FormView1" runat="server" DataKeyNames="EmployeeID" 
              DataSourceID="SqlDataSource1" AllowPaging="True">
              <EditItemTemplate>
                  EmployeeID:
                  <asp:Label ID="EmployeeIDLabel1" runat="server" 
                      Text='<%# Eval("EmployeeID") %>' />
                  <br />
                  LastName:
                  <asp:TextBox ID="LastNameTextBox" runat="server" 
                      Text='<%# Bind("LastName") %>' />
                  <br />
                  FirstName:
                  <asp:TextBox ID="FirstNameTextBox" runat="server" 
                      Text='<%# Bind("FirstName") %>' />
                  <br />
                  Title:
                  <asp:TextBox ID="TitleTextBox" runat="server" Text='<%# Bind("Title") %>' />
                  <br />
                  TitleOfCourtesy:
                  <asp:TextBox ID="TitleOfCourtesyTextBox" runat="server" 
                      Text='<%# Bind("TitleOfCourtesy") %>' />
                  <br />
                  BirthDate:
                  <asp:TextBox ID="BirthDateTextBox" runat="server" 
                      Text='<%# Bind("BirthDate") %>' />
                  <br />
                  HireDate:
                  <asp:TextBox ID="HireDateTextBox" runat="server" 
                      Text='<%# Bind("HireDate") %>' />
                  <br />
                  Address:
                  <asp:TextBox ID="AddressTextBox" runat="server" Text='<%# Bind("Address") %>' />
                  <br />
                  City:
                  <asp:TextBox ID="CityTextBox" runat="server" Text='<%# Bind("City") %>' />
                  <br />
                  Region:
                  <asp:TextBox ID="RegionTextBox" runat="server" Text='<%# Bind("Region") %>' />
                  <br />
                  PostalCode:
                  <asp:TextBox ID="PostalCodeTextBox" runat="server" 
                      Text='<%# Bind("PostalCode") %>' />
                  <br />
                  Country:
                  <asp:TextBox ID="CountryTextBox" runat="server" Text='<%# Bind("Country") %>' />
                  <br />
                  HomePhone:
                  <asp:TextBox ID="HomePhoneTextBox" runat="server" 
                      Text='<%# Bind("HomePhone") %>' />
                  <br />
                  Extension:
                  <asp:TextBox ID="ExtensionTextBox" runat="server" 
                      Text='<%# Bind("Extension") %>' />
                  <br />
                  Photo:
                  <asp:TextBox ID="PhotoTextBox" runat="server" Text='<%# Bind("Photo") %>' />
                  <br />
                  Notes:
                  <asp:TextBox ID="NotesTextBox" runat="server" Text='<%# Bind("Notes") %>' />
                  <br />
                  ReportsTo:
                  <asp:TextBox ID="ReportsToTextBox" runat="server" 
                      Text='<%# Bind("ReportsTo") %>' />
                  <br />
                  PhotoPath:
                  <asp:TextBox ID="PhotoPathTextBox" runat="server" 
                      Text='<%# Bind("PhotoPath") %>' />
                  <br />
                  <asp:LinkButton ID="UpdateButton" runat="server" CausesValidation="True" 
                      CommandName="Update" Text="更新" />
                  &nbsp;<asp:LinkButton ID="UpdateCancelButton" runat="server" 
                      CausesValidation="False" CommandName="Cancel" Text="取消" />
              </EditItemTemplate>
              <InsertItemTemplate>
                  LastName:
                  <asp:TextBox ID="LastNameTextBox" runat="server" 
                      Text='<%# Bind("LastName") %>' />
                  <br />
                  FirstName:
                  <asp:TextBox ID="FirstNameTextBox" runat="server" 
                      Text='<%# Bind("FirstName") %>' />
                  <br />
                  Title:
                  <asp:TextBox ID="TitleTextBox" runat="server" Text='<%# Bind("Title") %>' />
                  <br />
                  TitleOfCourtesy:
                  <asp:TextBox ID="TitleOfCourtesyTextBox" runat="server" 
                      Text='<%# Bind("TitleOfCourtesy") %>' />
                  <br />
                  BirthDate:
                  <asp:TextBox ID="BirthDateTextBox" runat="server" 
                      Text='<%# Bind("BirthDate") %>' />
                  <br />
                  HireDate:
                  <asp:TextBox ID="HireDateTextBox" runat="server" 
                      Text='<%# Bind("HireDate") %>' />
                  <br />
                  Address:
                  <asp:TextBox ID="AddressTextBox" runat="server" Text='<%# Bind("Address") %>' />
                  <br />
                  City:
                  <asp:TextBox ID="CityTextBox" runat="server" Text='<%# Bind("City") %>' />
                  <br />
                  Region:
                  <asp:TextBox ID="RegionTextBox" runat="server" Text='<%# Bind("Region") %>' />
                  <br />
                  PostalCode:
                  <asp:TextBox ID="PostalCodeTextBox" runat="server" 
                      Text='<%# Bind("PostalCode") %>' />
                  <br />
                  Country:
                  <asp:TextBox ID="CountryTextBox" runat="server" Text='<%# Bind("Country") %>' />
                  <br />
                  HomePhone:
                  <asp:TextBox ID="HomePhoneTextBox" runat="server" 
                      Text='<%# Bind("HomePhone") %>' />
                  <br />
                  Extension:
                  <asp:TextBox ID="ExtensionTextBox" runat="server" 
                      Text='<%# Bind("Extension") %>' />
                  <br />
                  Photo:
                  <asp:TextBox ID="PhotoTextBox" runat="server" Text='<%# Bind("Photo") %>' />
                  <br />
                  Notes:
                  <asp:TextBox ID="NotesTextBox" runat="server" Text='<%# Bind("Notes") %>' />
                  <br />
                  ReportsTo:
                  <asp:TextBox ID="ReportsToTextBox" runat="server" 
                      Text='<%# Bind("ReportsTo") %>' />
                  <br />
                  PhotoPath:
                  <asp:TextBox ID="PhotoPathTextBox" runat="server" 
                      Text='<%# Bind("PhotoPath") %>' />
                  <br />
                  <asp:LinkButton ID="InsertButton" runat="server" CausesValidation="True" 
                      CommandName="Insert" Text="插入" />
                  &nbsp;<asp:LinkButton ID="InsertCancelButton" runat="server" 
                      CausesValidation="False" CommandName="Cancel" Text="取消" />
              </InsertItemTemplate>
              <ItemTemplate>
                 <table border="1" style="border-collapse: collapse">
                    <tr>
                        <th>
                            EmployeeID:
                        </th>
                        <td>
                <asp:Label ID="EmployeeIDLabel" runat="server" Text='<%# Eval("EmployeeID") %>'></asp:Label></td>
                        <th>
                            BirthDate:
                        </th>
                        <td>
                <asp:Label ID="BirthDateLabel" runat="server" Text='<%# Bind("BirthDate", "{0:d}") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            LastName:
                        </th>
                        <td >
                <asp:Label ID="LastNameLabel" runat="server" Text='<%# Bind("LastName") %>'></asp:Label></td>
                        <th>
                            HireDate:
                        </th>
                        <td>
                <asp:Label ID="HireDateLabel" runat="server" Text='<%# Bind("HireDate", "{0:d}") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            FirstName:</th>
                        <td>
                <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Bind("FirstName") %>'></asp:Label></td>
                        <th>
                            Address:
                        </th>
                        <td>
                <asp:Label ID="AddressLabel" runat="server" Text='<%# Bind("Address") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            Title:
                        </th>
                        <td>
                <asp:Label ID="TitleLabel" runat="server" Text='<%# Bind("Title") %>'></asp:Label></td>
                        <th>
                            City:
                        </th>
                        <td>
                <asp:Label ID="CityLabel" runat="server" Text='<%# Bind("City") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            TitleOfCourtesy:</th>
                        <td>
                <asp:Label ID="TitleOfCourtesyLabel" runat="server" Text='<%# Bind("TitleOfCourtesy") %>'></asp:Label></td>
                        <th>
                            Region:
                        </th>
                        <td>
                <asp:Label ID="RegionLabel" runat="server" Text='<%# Bind("Region") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            PostalCode:</th>
                        <td>
                <asp:Label ID="PostalCodeLabel" runat="server" Text='<%# Bind("PostalCode") %>'></asp:Label></td>
                        <th>
                            Country:
                        </th>
                        <td >
                <asp:Label ID="CountryLabel" runat="server" Text='<%# Bind("Country") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            HomePhone:</th>
                        <td>
                <asp:Label ID="HomePhoneLabel" runat="server" Text='<%# Bind("HomePhone") %>'></asp:Label></td>
                        <th>
                            Extension:
                        </th>
                        <td>
                <asp:Label ID="ExtensionLabel" runat="server" Text='<%# Bind("Extension") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            Notes:
                        </th>
                        <td colspan="3">
                <asp:Label ID="NotesLabel" runat="server" Text='<%# Bind("Notes") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            ReportsTo:
                        </th>
                        <td colspan="3">
                <asp:Label ID="ReportsToLabel" runat="server" Text='<%# EmployeeIDToName((int)Eval("ReportsTo")) %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            PhotoPath:</th>
                        <td colspan="3">
                <asp:Label ID="PhotoPathLabel" runat="server" Text='<%# Bind("PhotoPath") %>'></asp:Label></td>
                    </tr>
                    <tr>
                        <th>
                            Photo:
                        </th>
                        <td colspan="3">
                            <asp:Image ID="Image1" runat="server" 
                                ImageUrl='<%# Eval("EmployeeID", "EmployeePhoto.ashx?EmployeeID={0}") %>' /></td>
                    </tr>
                </table>
              </ItemTemplate>
          </asp:FormView>
          <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
              ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
              SelectCommand="SELECT * FROM [Employees]"></asp:SqlDataSource>
            </div>
    </div>
    </form>
</body>
</html>
