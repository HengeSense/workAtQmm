<%@ Page Language="C#" MasterPageFile="MasterPage/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="TopContent" Runat="Server">
    <h2>使用母版页示例程序</h2>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="LeftContent" Runat="Server">
    <h3>左侧边栏</h3>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h3>右侧边栏</h3>
    <ul id="nav">
<li>
<a href="Default.aspx?master=Dynamic1">加载母版页一</a>
</li>
<li>
<a href="Default.aspx?master=Dynamic2">加载母版页二</a>
</li>
</ul>
</asp:Content>

