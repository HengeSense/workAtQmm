<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DetailsView控件演示</title>
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
    <h4>DetailsView控件演示</h4>
    <div id="top">
        <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
            AutoGenerateColumns="False" DataKeyNames="EmployeeID" 
            DataSourceID="DsEmployeeMaster" PageSize="5" SelectedIndex="0">
            <Columns>
                <asp:BoundField DataField="EmployeeID" HeaderText="EmployeeID" 
                    InsertVisible="False" ReadOnly="True" SortExpression="EmployeeID" />
                <asp:BoundField DataField="FirstName" HeaderText="FirstName" 
                    SortExpression="FirstName" />
                <asp:BoundField DataField="LastName" HeaderText="LastName" 
                    SortExpression="LastName" />
                <asp:CommandField ShowSelectButton="True" />
            </Columns>
            <SelectedRowStyle BackColor="#EEEEFF" />
            <HeaderStyle BackColor="#CCFFCC" />
        </asp:GridView>
        <asp:SqlDataSource ID="DsEmployeeMaster" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT [EmployeeID], [FirstName], [LastName] FROM [Employees]">
        </asp:SqlDataSource>
            </div>
    <div id="detailviewbody">
    员工详细信息</h5>
        <asp:DetailsView ID="DetailsView1" runat="server" AutoGenerateRows="False" 
            DataKeyNames="EmployeeID" DataSourceID="DsDetails" Height="50px" Width="552px" 
                    onitemupdated="DetailsView1_ItemUpdated" 
                    onitemupdating="DetailsView1_ItemUpdating">
            <Fields>
                <asp:TemplateField HeaderText="Employee Name">
                    <EditItemTemplate>
                        <div>
                            请输入名：<asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("LastName") %>'></asp:TextBox>
                            &nbsp; 请输入姓：<asp:TextBox ID="TextBox3" runat="server" 
                                Text='<%# Bind("FirstName") %>'></asp:TextBox>
                        </div>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label1" runat="server" 
                            Text='<%# Eval("FirstName")+" "+Eval("LastName") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:BoundField DataField="Title" HeaderText="Title" SortExpression="Title" />
                <asp:BoundField DataField="TitleOfCourtesy" HeaderText="TitleOfCourtesy" 
                    SortExpression="TitleOfCourtesy" />
                <asp:BoundField DataField="BirthDate" HeaderText="BirthDate" 
                    SortExpression="BirthDate" DataFormatString="{0:d}" />
                <asp:BoundField DataField="HireDate" HeaderText="HireDate" 
                    SortExpression="HireDate" DataFormatString="{0:d}" />
                <asp:BoundField DataField="Address" HeaderText="Address" 
                    SortExpression="Address" />
                <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" />
                <asp:BoundField DataField="Region" HeaderText="Region" 
                    SortExpression="Region" />
                <asp:BoundField DataField="PostalCode" HeaderText="PostalCode" 
                    SortExpression="PostalCode" />
                <asp:BoundField DataField="Country" HeaderText="Country" 
                    SortExpression="Country" />
                <asp:BoundField DataField="HomePhone" HeaderText="HomePhone" 
                    SortExpression="HomePhone" />
                <asp:BoundField DataField="Extension" HeaderText="Extension" 
                    SortExpression="Extension" />
                <asp:BoundField DataField="Notes" HeaderText="Notes" SortExpression="Notes" />
                <asp:TemplateField HeaderText="ReportsTo" SortExpression="ReportsTo">
                    <EditItemTemplate>
                        <asp:DropDownList ID="DropDownList1" runat="server" 
                            DataSourceID="DsEmployeeNameID" DataTextField="Name" 
                            DataValueField="EmployeeID" SelectedValue='<%# Bind("EmployeeID") %>'>
                        </asp:DropDownList>
                        <asp:SqlDataSource ID="DsEmployeeNameID" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
                            SelectCommand="Select FirstName+' '+LastName as Name,EmployeeID from Employees">
                        </asp:SqlDataSource>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ReportsTo") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label2" runat="server" 
                            Text='<%# EmployeeIDToName((int)Eval("ReportsTo")) %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="员工照片">
                    <EditItemTemplate>
                        <asp:FileUpload ID="FileUpload1" runat="server" />
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox2" runat="server" Text='<%# Eval("Photo") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Image ID="Image1" runat="server" 
                            ImageUrl='<%# Eval("EmployeeID", "EmployeePhoto.ashx?EmployeeID={0}") %>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" 
                    ShowInsertButton="True" />
            </Fields>
        </asp:DetailsView>
        <asp:SqlDataSource ID="DsDetails" runat="server" 
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
            SelectCommand="SELECT * FROM [Employees] WHERE ([EmployeeID] = @EmployeeID)" 
                    ConflictDetection="CompareAllValues" 
                    DeleteCommand="DELETE FROM [Employees] WHERE [EmployeeID] = @original_EmployeeID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND [Title] = @original_Title AND [TitleOfCourtesy] = @original_TitleOfCourtesy AND [BirthDate] = @original_BirthDate AND [HireDate] = @original_HireDate AND [Address] = @original_Address AND [City] = @original_City AND [Region] = @original_Region AND [PostalCode] = @original_PostalCode AND [Country] = @original_Country AND [HomePhone] = @original_HomePhone AND [Extension] = @original_Extension AND [Photo] = @original_Photo AND [Notes] = @original_Notes AND [ReportsTo] = @original_ReportsTo AND [PhotoPath] = @original_PhotoPath" 
                    InsertCommand="INSERT INTO [Employees] ([LastName], [FirstName], [Title], [TitleOfCourtesy], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [HomePhone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath]) VALUES (@LastName, @FirstName, @Title, @TitleOfCourtesy, @BirthDate, @HireDate, @Address, @City, @Region, @PostalCode, @Country, @HomePhone, @Extension, @Photo, @Notes, @ReportsTo, @PhotoPath)" 
                    OldValuesParameterFormatString="original_{0}" 
                    UpdateCommand="UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [Title] = @Title, [TitleOfCourtesy] = @TitleOfCourtesy, [BirthDate] = @BirthDate, [HireDate] = @HireDate, [Address] = @Address, [City] = @City, [Region] = @Region, [PostalCode] = @PostalCode, [Country] = @Country, [HomePhone] = @HomePhone, [Extension] = @Extension, [Photo] = @Photo, [Notes] = @Notes, [ReportsTo] = @ReportsTo, [PhotoPath] = @PhotoPath WHERE [EmployeeID] = @original_EmployeeID AND [LastName] = @original_LastName AND [FirstName] = @original_FirstName AND [Title] = @original_Title AND [TitleOfCourtesy] = @original_TitleOfCourtesy AND [BirthDate] = @original_BirthDate AND [HireDate] = @original_HireDate AND [Address] = @original_Address AND [City] = @original_City AND [Region] = @original_Region AND [PostalCode] = @original_PostalCode AND [Country] = @original_Country AND [HomePhone] = @original_HomePhone AND [Extension] = @original_Extension AND [Photo] = @original_Photo AND [Notes] = @original_Notes AND [ReportsTo] = @original_ReportsTo AND [PhotoPath] = @original_PhotoPath">
            <SelectParameters>
                <asp:ControlParameter ControlID="GridView1" Name="EmployeeID" 
                    PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
            <DeleteParameters>
                <asp:Parameter Name="original_EmployeeID" Type="Int32" />
                <asp:Parameter Name="original_LastName" Type="String" />
                <asp:Parameter Name="original_FirstName" Type="String" />
                <asp:Parameter Name="original_Title" Type="String" />
                <asp:Parameter Name="original_TitleOfCourtesy" Type="String" />
                <asp:Parameter Name="original_BirthDate" Type="DateTime" />
                <asp:Parameter Name="original_HireDate" Type="DateTime" />
                <asp:Parameter Name="original_Address" Type="String" />
                <asp:Parameter Name="original_City" Type="String" />
                <asp:Parameter Name="original_Region" Type="String" />
                <asp:Parameter Name="original_PostalCode" Type="String" />
                <asp:Parameter Name="original_Country" Type="String" />
                <asp:Parameter Name="original_HomePhone" Type="String" />
                <asp:Parameter Name="original_Extension" Type="String" />
                <asp:Parameter Name="original_Photo" Type="Object" />
                <asp:Parameter Name="original_Notes" Type="String" />
                <asp:Parameter Name="original_ReportsTo" Type="Int32" />
                <asp:Parameter Name="original_PhotoPath" Type="String" />
            </DeleteParameters>
            <UpdateParameters>
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="Title" Type="String" />
                <asp:Parameter Name="TitleOfCourtesy" Type="String" />
                <asp:Parameter Name="BirthDate" Type="DateTime" />
                <asp:Parameter Name="HireDate" Type="DateTime" />
                <asp:Parameter Name="Address" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="Region" Type="String" />
                <asp:Parameter Name="PostalCode" Type="String" />
                <asp:Parameter Name="Country" Type="String" />
                <asp:Parameter Name="HomePhone" Type="String" />
                <asp:Parameter Name="Extension" Type="String" />
                <asp:Parameter Name="Photo" Type="Object" />
                <asp:Parameter Name="Notes" Type="String" />
                <asp:Parameter Name="ReportsTo" Type="Int32" />
                <asp:Parameter Name="PhotoPath" Type="String" />
                <asp:Parameter Name="original_EmployeeID" Type="Int32" />
                <asp:Parameter Name="original_LastName" Type="String" />
                <asp:Parameter Name="original_FirstName" Type="String" />
                <asp:Parameter Name="original_Title" Type="String" />
                <asp:Parameter Name="original_TitleOfCourtesy" Type="String" />
                <asp:Parameter Name="original_BirthDate" Type="DateTime" />
                <asp:Parameter Name="original_HireDate" Type="DateTime" />
                <asp:Parameter Name="original_Address" Type="String" />
                <asp:Parameter Name="original_City" Type="String" />
                <asp:Parameter Name="original_Region" Type="String" />
                <asp:Parameter Name="original_PostalCode" Type="String" />
                <asp:Parameter Name="original_Country" Type="String" />
                <asp:Parameter Name="original_HomePhone" Type="String" />
                <asp:Parameter Name="original_Extension" Type="String" />
                <asp:Parameter Name="original_Photo" Type="Object" />
                <asp:Parameter Name="original_Notes" Type="String" />
                <asp:Parameter Name="original_ReportsTo" Type="Int32" />
                <asp:Parameter Name="original_PhotoPath" Type="String" />
            </UpdateParameters>
            <InsertParameters>
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="Title" Type="String" />
                <asp:Parameter Name="TitleOfCourtesy" Type="String" />
                <asp:Parameter Name="BirthDate" Type="DateTime" />
                <asp:Parameter Name="HireDate" Type="DateTime" />
                <asp:Parameter Name="Address" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="Region" Type="String" />
                <asp:Parameter Name="PostalCode" Type="String" />
                <asp:Parameter Name="Country" Type="String" />
                <asp:Parameter Name="HomePhone" Type="String" />
                <asp:Parameter Name="Extension" Type="String" />
                <asp:Parameter Name="Photo" Type="Object" />
                <asp:Parameter Name="Notes" Type="String" />
                <asp:Parameter Name="ReportsTo" Type="Int32" />
                <asp:Parameter Name="PhotoPath" Type="String" />
            </InsertParameters>
                </asp:SqlDataSource>
            </div>
    
    </div>
    </form>
</body>
</html>
