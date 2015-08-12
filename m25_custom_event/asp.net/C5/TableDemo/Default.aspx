<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    行：<asp:TextBox ID="txtRows" runat="server" >5</asp:TextBox>
        &nbsp;
    列：<asp:TextBox ID="txtCols" runat="server" >6</asp:TextBox>
        <br /><br />
       <asp:CheckBox ID="chkBorder" runat="server" Text="允许列边框" /><br /><br />
       <asp:Button ID="cmdCreate" OnClick="cmdCreate_Click" runat="server" Text="开始创建" /><br /><br />
       <asp:Table ID="tbl" runat="server" />
    </div>
    </form>
</body>
</html>
