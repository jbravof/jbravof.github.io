<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="WebForm3.aspx.vb" Inherits="WebApplication1.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
                                <asp:GridView ID="GridView2" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource3" Width="100%">
            <Columns>
                <asp:CommandField ButtonType="Button" ShowSelectButton="True" HeaderText="SELECT" SelectText="Select">
                <ControlStyle Width="100%" />
                <ItemStyle Width="100px" />
                </asp:CommandField>
                <asp:BoundField DataField="COSTTYPE" HeaderText="C.T." SortExpression="COSTTYPE">
                <ItemStyle HorizontalAlign="Center" Width="10%" />
                </asp:BoundField>
                <asp:BoundField DataField="COSTTYPEDESC" HeaderText="CT DESCRIPTION">
                <ItemStyle Width="70%" />
                </asp:BoundField>
                <asp:BoundField DataField="EXPR1" DataFormatString="{0:c}" HeaderText="Total" SortExpression="EXPR1">
                <ItemStyle HorizontalAlign="Right" VerticalAlign="Middle" />
                </asp:BoundField>
            </Columns>
                                    <SelectedRowStyle BorderColor="#FF1515" BorderStyle="Solid" />
        </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT DISTINCT CMSFILDEV.JCTPST.COMPANYNUMBER, CMSFILDEV.JCTPST.DIVISIONNUMBER, SUM(CMSFILDEV.JCTPST.GLAMT) AS Expr1, CMSFILDEV.JCTPST.TPSYR, CMSFILDEV.JCTPST.COSTTYPE, CMSFILDEV.JCVMST01W2.COSTTYPEDESC FROM CMSFILDEV.JCTPST, CMSFILDEV.JCVMST01W2 WHERE CMSFILDEV.JCTPST.COMPANYNUMBER = CMSFILDEV.JCVMST01W2.COMPANYNO AND CMSFILDEV.JCTPST.DIVISIONNUMBER = CMSFILDEV.JCVMST01W2.DIVISIONNO AND CMSFILDEV.JCTPST.COSTTYPE = CMSFILDEV.JCVMST01W2.COSTTYPE GROUP BY CMSFILDEV.JCTPST.COMPANYNUMBER, CMSFILDEV.JCTPST.DIVISIONNUMBER, CMSFILDEV.JCTPST.TPSYR, CMSFILDEV.JCTPST.COSTTYPE, CMSFILDEV.JCVMST01W2.COSTTYPEDESC HAVING (CMSFILDEV.JCTPST.COMPANYNUMBER = 8) AND (CMSFILDEV.JCTPST.DIVISIONNUMBER = 3) AND (CMSFILDEV.JCTPST.TPSYR = 2016)">
                    <SelectParameters>
                        <asp:Parameter DefaultValue="8" Name="Co" />
                        <asp:Parameter DefaultValue="3" Name="Div" />
                    </SelectParameters>
                                </asp:SqlDataSource>
    </div>


        <asp:GridView ID="GridView3" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" Width="100%" ShowFooter="True">
            <Columns>
                <asp:CommandField ButtonType="Button" ShowSelectButton="True" HeaderText="SELECT" SelectText="Select">
                <ControlStyle Width="100%" />
                <ItemStyle Width="150px" />
                </asp:CommandField>
                <asp:BoundField DataField="JCDISTRIBTUION" HeaderText="JCDISTRIBTUION" SortExpression="JCDISTRIBTUION">
                <ItemStyle HorizontalAlign="Center" Width="80%" />
                </asp:BoundField>
                <asp:BoundField DataField="EXPR1" DataFormatString="{0:c}" HeaderText="Total" SortExpression="EXPR1">
                <ItemStyle HorizontalAlign="Right" Width="300px" />
                </asp:BoundField>
            </Columns>
            <SelectedRowStyle BorderColor="#000066" BorderStyle="Solid" />
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>">
            <SelectParameters>
                <asp:Parameter DefaultValue="8" Name="Co" />
                <asp:Parameter DefaultValue="3" Name="Div" />
            </SelectParameters>
        </asp:SqlDataSource>


    </form>
</body>
</html>
