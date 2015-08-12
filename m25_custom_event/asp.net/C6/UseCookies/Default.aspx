<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cookie示例程序</title>
    <style type="text/css">
        .style1
        {
            width:500px;  
            font-size:14px;          
        }
        th,td
        {
        	padding:3px;
        }
        th
        {
        	text-align:right;
        	font-weight:bold;
        }
        tr
        {
        	width:40%;
        	}
        #layout
        {
        	width:500px;
        	margin:0 auto;
        	background-color:#F6F6F6;
        	}                	
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="layout">
    
        <table class="style1">
            <tr>
            <th>请输入书籍名称：</th>
                <td>
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    </td>
            </tr>
            <tr>
            <th>请输入图书ISBN编号：</th>
                <td>
                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                    </td>
            </tr>
            <tr>
            <th>请输入接受价格：</th>
                <td>
                    <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                    </td>
            </tr>
            <tr>
                <td align=right>
                    <asp:Button ID="Button2" runat="server" Text="保存为Cookie" 
                        onclick="Button2_Click" />
                </td>
                <td>
                    <asp:Button ID="Button1" runat="server" Text="读取Cookie" 
                        onclick="Button1_Click" />
                </td>
            </tr>
        </table>  
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label> 
    </div>
    </form>
</body>
</html>
