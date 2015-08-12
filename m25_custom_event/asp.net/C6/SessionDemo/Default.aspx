<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Session Demo</title>
    <style type="text/css">
        #layout {
            font-family: verdana;
            font-size: 9pt;
            margin:0px auto;
            width:600px;
            height:400px;
        }        
        #top
        {
            background-color: #D9ECFF;
            position:relative;
            top: 0px;
            left: 0px;
            width: 100%;
            height:30%;
            float:left;
            padding-left:5px;
        }
        #Content
        {
            background-color: #FFFFCC;
            width: 100%;              
            height:70%         
        }               
        h2
        {
            font-family: Verdana;
            font-size: 9pt;
            font-weight: bold;         
        }
        #left
        {
        	width:200px;
        	height:200px;
        	float:left;    
        	margin-left:10px;    	        
        }
        #right
        {
        	width:300px;
        	height:200px;
        	float:left;    
        	margin-left:10px;    	        
        }               
        .Listbox
        {
            font-family: verdana;
            font-size: 9pt;
            background-color: #DDEBF9;
        }               
    </style>
</head>

<body>
    <form id="form1" runat="server">
    <div id="layout">
      <div id="top">
      <h2>Session的状态：</h2>
          <asp:Label ID="lblSession" runat="server" Text="Label"></asp:Label>
       </div>
       <div id="Content">
             <h2>查询Session内容</h2>
             <div id="left">
             
                 <asp:ListBox ID="ListBox1" runat="server" Height=100% CssClass="Listbox">
                     <asp:ListItem>Silverlight 2.0高级开发指南</asp:ListItem>
                     <asp:ListItem>CSS网站布局实战</asp:ListItem>
                     <asp:ListItem>C# 3.5企业级应用程序开发与设计</asp:ListItem>
                     <asp:ListItem>在企业级应用程序中应用模式与重构</asp:ListItem>
                 </asp:ListBox>
             
             </div>
             <div id="right">
             
                 <asp:Button ID="btnmore" runat="server" Text="获取更多书籍信息" 
                     onclick="btnmore_Click" />
                 <br />
                 
                 <asp:DetailsView ID="DetailsView1" runat="server" BackColor="White" 
                     BorderColor="#DEDFDE" BorderStyle="None" BorderWidth="1px" CellPadding="4" 
                     ForeColor="Black" GridLines="Vertical" Height="50px" Width="266px">
                     <FooterStyle BackColor="#CCCC99" />
                     <RowStyle BackColor="#F7F7DE" />
                     <PagerStyle BackColor="#F7F7DE" ForeColor="Black" HorizontalAlign="Right" />
                     <HeaderStyle BackColor="#6B696B" Font-Bold="True" ForeColor="White" />
                     <EditRowStyle BackColor="#CE5D5A" Font-Bold="True" ForeColor="White" />
                     <AlternatingRowStyle BackColor="White" />
                 </asp:DetailsView>
             </div>
       </div>
    </div>
    </form>
</body>
</html>
