<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>事件日志演示</title>
    <style type="text/css">
        .style1
        {
            width: 600px;
            font-size:9pt;
        }
        th
        {
            text-align: right;
        }
        .exceptionmessage
        {
        	text-align:left;
        	}
        
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="Layout">
    
        <table class="style1">
            <tr>
                <th>
                    除数：</th>
                <td>
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <th>
                    被除数：</th>
                <td>
                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Label ID="lblResult" runat="server"></asp:Label>
                </td>
            </tr>
             <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="运算" />
                 </td>
            </tr>            
        </table>
    
    </div>
    </form>
</body>
</html>
