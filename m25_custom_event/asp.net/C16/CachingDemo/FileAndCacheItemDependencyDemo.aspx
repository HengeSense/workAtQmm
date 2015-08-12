<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FileAndCacheItemDependencyDemo.aspx.cs" Inherits="FileAndCacheItemDependencyDemo" %>
<%@ OutputCache Duration="1200" VaryByParam="none" SqlDependency="NorthwindDataBase:Products" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>文件和缓存项依赖</title>
    <style type="text/css">
        #content {
            font-family: verdana;
            font-size: 9pt;
        }
        input
        {
            font-family: verdana;
            font-size: 9pt;
            border-style: dotted;
            border-width: 1px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
      <h4>文件和缓存项依赖</h4>
      <div id="top">
      <h6>
          <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></h6>
          <asp:Button ID="Button1" runat="server" onclick="Button1_Click" 
              Text="写入XML文件" />
          <asp:Button ID="Button2" runat="server" onclick="Button2_Click" 
              Text="读取并缓存XML文件" />
          <asp:Button ID="Button3" runat="server" onclick="Button3_Click" 
              Text="修改文件" />
            <asp:Button ID="Button4" runat="server" Text="获取缓存对象" 
              onclick="Button4_Click" />
            </div>
      <div id="contentbody">
      
          <asp:GridView ID="GridView1" runat="server">
          </asp:GridView>
      
      </div>
      <div>
      <h4>缓存数据项</h4>
          <asp:GridView ID="GridView2" runat="server">
          </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" CacheDuration="3600" 
                    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString2 %>" 
                    EnableCaching="True" SelectCommand="SELECT * FROM [Products]" 
                    SqlCacheDependency="NorthwindDataBase:Products"></asp:SqlDataSource>
      </div>
    </div>
    </form>
</body>
</html>
