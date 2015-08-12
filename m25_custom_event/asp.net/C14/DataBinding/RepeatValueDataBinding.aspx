<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RepeatValueDataBinding.aspx.cs" Inherits="RepeatValueDataBinding" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>重复值绑定示例</title>
    <style type="text/css">
        /*body区的边界为0，宽度650高度100%，可以实现自适应高度*/
        body {
            font-family: verdana;
            font-size: 9pt;
            height: 100%;
            margin:0px;
        }
        /*每个div中将放置控件，这里使用浮动式布局*/
        .divstyle
        {
            width: 200px;
            background-color: #eeeeff;
            height: 200px;
            float: left;
            margin:2px;
        }
        /*margin属性使外层div居中显示*/
        #content
        {
            width: 650px;
            height: 100%;
            margin:0px auto;
        }
        /*统一控制标题的文本*/
        h5
        {
            font-family: verdana;
            font-size: 9pt;
            font-weight: bold;
            color: #800000;
        }
        /*列表控件最终输出为select标签，这里控制列表控件的样式*/
        select
        {
            font-family: verdana;
            font-size: 9pt;
            color: #006600;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
     <div id="repeat1" class="divstyle">
     <h5>DropDownList控件</h5>
         <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" 
                    onselectedindexchanged="DropDownList1_SelectedIndexChanged">
         </asp:DropDownList>
     </div>
     <div id="Div1" class="divstyle">
     <h5>ListBox控件</h5>
         <asp:ListBox ID="ListBox1" runat="server"></asp:ListBox>
     </div>
     <div id="Div2" class="divstyle">
     <h5>CheckBoxList控件 </h5>
     <asp:CheckBoxList ID="CheckBoxList1" runat="server">
         </asp:CheckBoxList>                    
     </div>
     <div id="Div3" class="divstyle">
     <h5>RadioButtonList控件</h5>
     <asp:RadioButtonList ID="RadioButtonList1" runat="server">
     </asp:RadioButtonList>
     </div>
     <div id="Div4" class="divstyle">
     <h5>BulletedList控件</h5>
     <asp:BulletedList ID="BulletedList1" runat="server">
         </asp:BulletedList>
     </div>
     <div id="Div5" class="divstyle">
     <h5>选择结果：</h5>
         <asp:Label ID="lblInfo" runat="server" ></asp:Label>
     </div>
    </div>
    </form>
</body>
</html>
