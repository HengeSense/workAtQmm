<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
        <asp:View ID="View1" runat="server">
            <asp:Label ID="Label1" runat="server" Text="这是视图一"></asp:Label>
            <asp:Button ID="btnNext1" runat="server" Text="下一页" CommandName="NextView" />
            </asp:View>
        <asp:View ID="View2" runat="server"> 
            <asp:Label ID="Label2" runat="server" Text="这是视图二"></asp:Label>
            <asp:Button ID="btnPrevious2" runat="server" Text="上一页"  CommandName="PrevView" />
             <asp:Button ID="btnNext2" runat="server" Text="下一页" CommandName="NextView"  />
        </asp:View>
         <asp:View ID="View3" runat="server"> 
            <asp:Label ID="Label3" runat="server" Text="这是视图三"></asp:Label>
            <asp:Button ID="btnPrevious3" runat="server" Text="上一页" CommandName="PrevView" />            
         </asp:View>
        </asp:MultiView>
    </div>
    </form>
</body>
</html>
