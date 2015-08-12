<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ScriptErrorHandle.aspx.cs" Inherits="ScriptErrorHandle" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Custom Error Handler</title>
 <style type="text/css">
    body {
        font-family: Tahoma;
    }
     #AlertDiv{
         left: 20%;
         top: 20%;
         position: absolute;
         width: 200px;
         padding: 12px;
         border: #000000 1px solid;
         background-color: white;
         text-align: left;
         visibility: hidden;
         z-index: 99;
         font-family: verdana;
         font-size: 9pt;
     }
     #AlertButtons{
         position: absolute;
         right: 5%;
         bottom: 5%;
         font-family: verdana;
         font-size: 9pt;
     }
	</style>    
</head>
<body id="bodytag">
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server" 
        onasyncpostbackerror="ScriptManager1_AsyncPostBackError">
    </asp:ScriptManager>
 <script type="text/javascript" language="javascript">
                var divElem = 'AlertDiv';
                var messageElem = 'AlertMessage';
                var errorMessageAdditional = ':(.';
                var bodyTag = 'bodytag';
                //调用getInstance方法获取PageRequestManager的实例，并为endRequest 事件指定了事件处理器
                Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
                //根据div的状态的不同，改变<body>的背景色
                function ToggleAlertDiv(visString)
                {
                     if (visString == 'hidden')
                     {
                         $get(bodyTag).style.backgroundColor = 'white';                         
                     }
                     else
                     {
                         $get(bodyTag).style.backgroundColor = 'gray';                         
                     }
                     var adiv = $get(divElem);
                     adiv.style.visibility = visString;
                }
                //清除错误信息，并隐藏错误面板
                function ClearErrorState() {
                     $get(messageElem).innerHTML = '';
                     ToggleAlertDiv('hidden');                     
                }
                //endRequestHandler在异步回发完成，并且控制权返回到浏览器之后引发。获取EndRequestEventArgs类型参数args中的错误信息。
                function EndRequestHandler(sender, args)
                {
                   if (args.get_error() != undefined && args.get_error().httpStatusCode == '500')
                   {
                      //如果异步完成后发现有错误，先获取错误信息。
                       var errorMessage = args.get_error().message
                       //指定己经处理错误，不由AJAX进行处理。
                       args.set_errorHandled(true);
                       //显示错误信息窗口
                       ToggleAlertDiv('visible');
                       //设置错误信息的内容
                       $get(messageElem).innerHTML = '"' + 
                                errorMessage + '" ' + errorMessageAdditional;
                   }
                }
            </script>           
    <div>    
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Button ID="Button1" runat="server" Text="引发一个异常" onclick="Button1_Click"  OnClientClick="ClearErrorState()"/>
            </ContentTemplate>
        </asp:UpdatePanel>    
    </div>
      <div id="AlertDiv">
                <div id="AlertMessage">
                </div>
                <br />
                <div id="AlertButtons" >
                    <input id="OKButton" type="button" value="OK" 
                           runat="server" onclick="ClearErrorState()" />
                </div>
           </div>
    </form>
</body>
</html>
