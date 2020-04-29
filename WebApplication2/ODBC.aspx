<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master" CodeBehind="ODBC.aspx.vb" Inherits="WebApplication2.ODBC" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <div>

        <div>

            <asp:Button ID="Button1" runat="server" Text="Button" /><asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><asp:TextBox ID="TextBox2" runat="server" TextMode="Password" CausesValidation="False">JBRAVOF2</asp:TextBox>
        </div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="COMPANYNUMBER">
            <Columns>
                <asp:BoundField DataField="COMPANYNUMBER" HeaderText="COMPANYNUMBER" ReadOnly="True" SortExpression="COMPANYNUMBER" />
                <asp:BoundField DataField="DIVISIONNUMBER" HeaderText="DIVISIONNUMBER" SortExpression="DIVISIONNUMBER" />
                <asp:BoundField DataField="COMPANYNAME" HeaderText="COMPANYNAME" SortExpression="COMPANYNAME" />
            </Columns>
        </asp:GridView>

        <asp:SqlDataSource ID="ecmsODBClive" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="System.Data.Odbc" SelectCommand="SELECT SECCDP.COMPANYNUMBER, SECCDP.DIVISIONNUMBER, SYTCNC.COMPANYNAME FROM S104E7FP.CMSFIL.SECCDP SECCDP, S104E7FP.CMSFIL.SECUSP SECUSP, S104E7FP.CMSFIL.SYTCNC SYTCNC WHERE SECCDP.SECUSPID = SECUSP.SECUSPID AND SECCDP.SYTCNCID = SYTCNC.SYTCNCID AND (SECUSP.USERID = ?)">
            <SelectParameters>
                <asp:ControlParameter ControlID="TextBox1" DefaultValue="DWILSON" Name="userid" PropertyName="Text" />
            </SelectParameters>
        </asp:SqlDataSource>

    </div>



</asp:Content>
