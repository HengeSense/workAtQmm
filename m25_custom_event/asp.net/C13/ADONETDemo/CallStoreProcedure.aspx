<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CallStoreProcedure.aspx.cs" Inherits="CallStoreProcedure" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Northwind年度分类销售报表</title>
    <style type="text/css">
        body
        {
            font-family: verdana;
            font-size: 9pt;
            height:100%;
            margin:0px;      
        }
        #content
        {
            background-color: #EEEEFF;
            width: 600px;
            height:100%;
            margin:0px auto;
        }
        #top
        {
            height: 50px;
            text-align:center;
        }
        #search
        {
            height: 80px;
        }
        .tbl
        {
            width: 100%;
            height:100%
        }
        th
        {
            text-align: right;
        }
        #reportbody
        {
            width: 100%;
            height: 100%;          
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
      <div id="top">
      <h2>Northwind年度分类销售报表</h2>
      </div>
      <div id="search">
          <table class="tbl">
              <tr>
                  <th>
                      请输入年份四位数：</th>
                  <td>
                      <asp:TextBox ID="txtYear" runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                          ErrorMessage="请输入四位数的年份" ControlToValidate="txtYear"></asp:RequiredFieldValidator>
                        </td>
                  <td rowspan="2">
                      <asp:Button ID="Button1" runat="server" Text="查看报表" onclick="Button1_Click" />
                        </td>
              </tr>
              <tr>
                  <th>
                      请选择产品分类：</th>
                  <td>
                      <asp:DropDownList ID="ddlCategory" runat="server">
                      </asp:DropDownList>
                        </td>
              </tr>
              </table>
        </div>
      <div id="reportbody">
          <asp:GridView ID="GridView1" runat="server" BackColor="White" 
              BorderColor="#CCCCCC" BorderStyle="None" BorderWidth="1px" CellPadding="3" 
              Width="594px">
              <FooterStyle BackColor="White" ForeColor="#000066" />
              <RowStyle ForeColor="#000066" />
              <PagerStyle BackColor="White" ForeColor="#000066" HorizontalAlign="Left" />
              <SelectedRowStyle BackColor="#669999" Font-Bold="True" ForeColor="White" />
              <HeaderStyle BackColor="#006699" Font-Bold="True" ForeColor="White" />
          </asp:GridView>
            </div>
    </div>
    </form>
</body>
</html>
