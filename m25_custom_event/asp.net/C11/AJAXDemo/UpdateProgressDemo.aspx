<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdateProgressDemo.aspx.cs" Inherits="UpdateProgressDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>UpdateProgress Demo</title>
    <style type="text/css">
        body
        {
            font-family: verdana;
            font-size: 9pt;
            color: #003300;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <script language="javascript" type="text/javascript">
        <!-- 
        //先获取PageRequestManager客户端类的实例
        var prm = Sys.WebForms.PageRequestManager.getInstance();
        function CancelAsyncPostBack() {
              //判断客户端生命周期中是否处理异步回发状态
            if (prm.get_isInAsyncPostBack()) {
            //中断回发
              prm.abortPostBack();
            }
        }
        // -->
        </script>          
    <!--放一个UpdateProgress控件用于显示进度数据，在ProgressTemplate模板中设置有意义的进度提示-->
    <!--使用AssociatedUpdatePanelID属性关联到指定的UpdatePanel控件-->
    <asp:UpdateProgress ID="UpdateProgress1" runat="server" 
        AssociatedUpdatePanelID="UpdatePanel1">
        <ProgressTemplate>
            <asp:Image ID="Image1" runat="server" ImageUrl="~/Images/1-0.gif" />
            正在获取服务器端数据.....
            <input id="Button1" type="button" value="取消异步回送" onclick="CancelAsyncPostBack()" />
        </ProgressTemplate>
    </asp:UpdateProgress>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Label ID="lblServerTime" runat="server"></asp:Label>
                <asp:Button ID="btnTime" runat="server" onclick="btnTime_Click" 
                    Text="获取服务器端时间" />   
            </ContentTemplate>
        </asp:UpdatePanel>
        <br />
    </form>
</body>
</html>
