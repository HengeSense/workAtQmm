<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CallWebServices.aspx.cs" Inherits="CallWebServices" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
        <Services>
            <asp:ServiceReference Path="Servertime.asmx" />
        </Services>
    </asp:ScriptManager>
    <div>
    
    </div>
    </form>
</body>
<script type="text/javascript">
function pageLoad() {  
 //使用Web服务的类名.Web方法名。传递两个委托方函数进行失败或成功能处理，
 Servertime.GetServerTime(success, failed, " 来自用户的任意信息");
}
//如果调用成功，则使用alert方法显示Web服务的结果并同时显示userContext
function success(result, userContext) { 
 alert(result + " " + userContext);
}
//如果调用失败也显示调用失败的信息
function failed(result) {
    var message = String.format("statusCode={0}\r\nexceptionType={1}\r\ntimedOut={2}\r\nmessage={3}\r\nstackTrace={4}",
    result.get_statusCode(),
    result.get_exceptionType(),
    result.get_timedOut(),
    result.get_message(),
    result.get_stackTrace());
    alert(message);
}
</script>

</html>
