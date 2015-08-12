<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConnectionPoolDemo.aspx.cs" Inherits="ConnectionPoolDemo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>使用连接池</title>
    <style type="text/css">
        #content
        {
            font-family: verdana;
            font-size: 9pt;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
      <fieldset>
        <legend>使用连接池连接打开关闭100次连接</legend>
          <asp:Label ID="lblpool" runat="server" ></asp:Label><br />
          <asp:Button ID="btnpool" runat="server" Text="开始执行连接" onclick="btnpool_Click" />
      </fieldset>
      <br />
       <fieldset>
        <legend>不使用连接池连接打开关闭100次连接</legend>
          <asp:Label ID="lblnopool" runat="server" ></asp:Label><br />
          <asp:Button ID="btnnopool" runat="server" Text="开始执行连接" onclick="btnnopool_Click" />
      </fieldset>
        <fieldset>
        <legend>清除连接池</legend>
          <asp:Label ID="Label1" runat="server" ></asp:Label><br />
          <asp:Button ID="Button1" runat="server" Text="ClearAllPools" 
                    onclick="Button1_Click" />
           <asp:Button ID="Button2" runat="server" Text="ClearPool " onclick="Button2_Click" />
      </fieldset>
    </div>
    </form>
</body>
</html>
