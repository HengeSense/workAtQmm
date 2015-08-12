<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SimpleWebPartDemo.aspx.cs" Inherits="SimpleWebPartDemo" %>
<%@ Register src="DisplayModeMenu.ascx" tagname="DisplayModeMenu" tagprefix="uc1" %>
<%@ Register src="BookCategory.ascx" tagname="BookCategory" tagprefix="uc2" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>一个WebParts示例程序</title>
    <link href="StyleSheet.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <asp:WebPartManager ID="WebPartManager1" runat="server">
    </asp:WebPartManager>
    <!--content div用于使内容具中显示，并设置了固定的长和宽-->
    <div id="content">
       <div class="top">
         <div>
          <h2>Web部件示例程序</h2>
         </div>
         <div>
             <uc1:DisplayModeMenu ID="DisplayModeMenu1" runat="server" />
                </div>
      </div>
     <!--layout样式类使用流式布局，使这几个div控件能依次排列-->
      <div class="layout">
       <!--这里将放置WebPartZone控件-->          
          <asp:WebPartZone ID="WebPartZone1" runat="server" HeaderText="我的链接" 
              Height="99px" Width="232px" WebPartVerbRenderMode="TitleBar">
              <ZoneTemplate>              
             <asp:label runat="server" id="linksPart" title="我的链接" Height="47px" Width="214px">
             <a href="http://www.asp.net">ASP.NET网站</a> 
             <br />
             <a href="http://www.gotdotnet.com">GotDotNet网站</a> 
             <br />
             <a href="http://www.contoso.com">Contoso.com示例网站</a> 
             <br />
      </asp:label>     
             <uc2:BookCategory ID="BookCategory1" runat="server" title="书籍列表"/>
              </ZoneTemplate>
          </asp:WebPartZone>
         
      </div>
      <div class="layout">
      <!--这里将放置日历控件-->
          <asp:WebPartZone ID="WebPartZone2" runat="server" HeaderText="我的生活日历">
              <ZoneTemplate>
                  <asp:Calendar ID="Calendar4" runat="server" title="生活日历" Width="222px"></asp:Calendar>
              </ZoneTemplate>
          </asp:WebPartZone>
      </div>
     <div class="layout">
      <!--这里将放置日历控件-->
         <asp:WebPartZone ID="WebPartZone3" runat="server" HeaderText="我的度假日历">
             <ZoneTemplate>
                 <asp:Calendar ID="Calendar3" runat="server"  title="工作日历" Width="234px" 
                     ShowTitle="False" Height="144px"></asp:Calendar>
                
             </ZoneTemplate>
         </asp:WebPartZone>
      </div>
      <div class="layout">
      <!--这里将放置了一个CatalogZone控件，用来获取页面上其他WebPartZone控件-->          
          <asp:CatalogZone ID="CatalogZone1" runat="server">
              <ZoneTemplate>
                  <asp:PageCatalogPart ID="PageCatalogPart1" runat="server" />
                  <asp:DeclarativeCatalogPart ID="DeclarativeCatalogPart1" runat="server">
                      <WebPartsTemplate>
                          <asp:Calendar id="Calendar1" runat="server" Title="其他日历" /> 
                          <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" title="新建用户向导" />
                      </WebPartsTemplate>
                 </asp:DeclarativeCatalogPart>
              </ZoneTemplate>
          </asp:CatalogZone>
          <asp:EditorZone ID="EditorZone1" runat="server">
              <ZoneTemplate>
                  <asp:AppearanceEditorPart ID="AppearanceEditorPart1" runat="server" />
                  <asp:BehaviorEditorPart ID="BehaviorEditorPart1" runat="server" />
                  <asp:LayoutEditorPart ID="LayoutEditorPart1" runat="server" />
                  <asp:PropertyGridEditorPart ID="PropertyGridEditorPart1" runat="server" />
              </ZoneTemplate>              
          </asp:EditorZone>
      </div>
    </div>
    </form>
</body>
</html>
