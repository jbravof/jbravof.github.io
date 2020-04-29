<%@ Page Title="About" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.vb" Inherits="WebApplication2.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <p>Your app description page.</p>
    <p>Use this area to provide additional information.</p>
    <asp:Menu ID="Menu1" runat="server">
        <Items>
            <asp:MenuItem Text="New Item" Value="New Item">
                <asp:MenuItem Text="New Item" Value="New Item"></asp:MenuItem>
            </asp:MenuItem>
            <asp:MenuItem Text="New Item" Value="New Item">
                <asp:MenuItem Text="New Item" Value="New Item"></asp:MenuItem>
            </asp:MenuItem>
        </Items>
    </asp:Menu>
    <asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
        <asp:View ID="View1" runat="server">

            hola
        </asp:View>
        <asp:View ID="View2" runat="server"></asp:View>

    </asp:MultiView>

</asp:Content>
