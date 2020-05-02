<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="WebForm1.aspx.vb" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">

                            <asp:GridView ID="GridView2" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource3" Width="100%">
            <Columns>
                <asp:BoundField DataField="COSTTYPE" HeaderText="C.T." SortExpression="COSTTYPE">
                <ItemStyle HorizontalAlign="Center" Width="50px" />
                </asp:BoundField>
                <asp:BoundField DataField="EXPR1" DataFormatString="{0:c}" HeaderText="Total" SortExpression="EXPR1">
                <ItemStyle HorizontalAlign="Right" VerticalAlign="Middle" />
                </asp:BoundField>
            </Columns>
        </asp:GridView>
        <div>


            <asp:DataList ID="DataList1" runat="server" CellPadding="5" CellSpacing="4" DataSourceID="SqlDataSource2" RepeatColumns="100" RepeatDirection="Horizontal" RepeatLayout="Flow" GridLines="Both">
                <ItemStyle BorderStyle="None" BorderWidth="1" HorizontalAlign="Center" Width="70" Height="30" />
                <ItemTemplate>

                    <button style="margin-top: 3px; width: 64px; height: 24px; background-color: #FFFFFF;" onclick="document.getElementById('TextBox1').value='<%# Eval("COMPANYNO") %>'  ;">
                        Co: 
    <asp:Label ID="COMPANYNOLabel" runat="server" Text='<%# Eval("COMPANYNO") %>' />


                    </button>
                </ItemTemplate>
            </asp:DataList>
            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT DISTINCT COMPANYNO FROM CMSFILDEV.SYTCNC"></asp:SqlDataSource>

            <div style="visibility: hidden">
                <br />

                <asp:TextBox ID="TextBox1" runat="server" Width="41px" Visible="true">45</asp:TextBox>
                <br />
            </div >
        </div>
        <div style="padding: 5px">

        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT COSTTYPE, SUM(GLAMT) AS Expr1 FROM CMSFILDEV.JCTPST GROUP BY COMPANYNUMBER, DIVISIONNUMBER, COSTTYPE HAVING (COMPANYNUMBER = 8) AND (DIVISIONNUMBER = 4)"></asp:SqlDataSource>

        <asp:GridView Width="100%" ID="GridView1" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" GridLines="None">
            <Columns>
                <asp:ButtonField  ButtonType="Button" DataTextField="DIVISIONNO"  Text="DIV" HeaderText="DIV" SortExpression="DIVISIONNO">
                <ControlStyle  Width="80%" BackColor="White" Font-Bold="True" Font-Names="Calibri" />
                <HeaderStyle Font-Bold="True" ForeColor="#009933" Height="30px" HorizontalAlign="Center" VerticalAlign="Middle" />
                <ItemStyle HorizontalAlign="Left" VerticalAlign="Middle" Width="40px" BackColor="White" />
                </asp:ButtonField>

                <asp:BoundField DataField="COMPANYNAME" HeaderText="COMPANY NAME" SortExpression="COMPANYNAME" >
                <ItemStyle ForeColor="#FF0066" HorizontalAlign="Justify" VerticalAlign="Middle" Height="30px" Font-Names="Calibri" />
                </asp:BoundField>

            </Columns>
        </asp:GridView>
            </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT DIVISIONNO, COMPANYNAME FROM CMSFILDEV.SYTCNC WHERE (COMPANYNO = ?)">
            <SelectParameters>
                <asp:ControlParameter ControlID="TextBox1" DefaultValue="50" Name="COMPANYNO" PropertyName="Text" Type="Decimal" />
            </SelectParameters>
        </asp:SqlDataSource>
    </form>
</body>
</html>
