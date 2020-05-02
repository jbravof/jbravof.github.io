<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="WebForm2.aspx.vb" Inherits="WebApplication1.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
     <form  id="form1" runat="server">

<%--        <div>
   <input id="Submit1" type="submit" value="submit" /> 
            <asp:TextBox  ID="TextBox1" runat="server">  </asp:TextBox>   
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
           
        </div>--%>

    <div style="top:0px">
        <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="False" CellPadding="2" CellSpacing="3" DataKeyNames="JCTPSTID" Font-Names="Calibri" Font-Size="11pt" AllowSorting="True" Width="100%">
            <Columns>
                <asp:BoundField DataField="COMPANYNUMBER" HeaderText="CO" SortExpression="COMPANYNUMBER">
                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="5%" />
                </asp:BoundField>
                <asp:BoundField DataField="DIVISIONNUMBER" HeaderText="DIV" SortExpression="DIVISIONNUMBER">
                <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:BoundField>
                <asp:BoundField DataField="JOBNUMBER" HeaderText="JOB" SortExpression="JOBNUMBER">
                <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:BoundField>
                <asp:BoundField DataField="TPSYR" HeaderText="YEAR" SortExpression="TPSYR" >
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="POSTINGPER" HeaderText="MONTH" SortExpression="POSTINGPER" >
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="COSTTYPE" HeaderText="CT" SortExpression="COSTTYPE">
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="GENLEDGERACCT" HeaderText="GLACCT" SortExpression="GENLEDGERACCT" />
                <asp:BoundField DataField="JCDISTRIBTUION" HeaderText="CCODE" SortExpression="JCDISTRIBTUION" />
                <asp:BoundField DataField="TRANSSOURCE" HeaderText="SOURCE" SortExpression="TRANSSOURCE" >
                <ItemStyle Wrap="False" />
                </asp:BoundField>
                <asp:BoundField DataField="DESC20A" HeaderText="DESC20A" SortExpression="DESC20A">
                <ItemStyle Wrap="False" />
                </asp:BoundField>
                <asp:BoundField DataField="ORIGINATECODE" HeaderText="ORIGCODE" SortExpression="ORIGINATECODE" >
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="GLAMT" HeaderText="GLAMT" SortExpression="GLAMT" DataFormatString="{0:C}" >
                <ItemStyle HorizontalAlign="Right" />
                </asp:BoundField>
                <asp:BoundField DataField="ACTUALAMT" HeaderText="ACTUALAMT" SortExpression="ACTUALAMT" DataFormatString="{0:C}">
                <ItemStyle HorizontalAlign="Right" />
                </asp:BoundField>
                <asp:BoundField DataField="TRANSACTIONDATE" HeaderText="TRNDATE" SortExpression="TRANSACTIONDATE" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" ProviderName="<%$ ConnectionStrings:ConnectionString.ProviderName %>" SelectCommand="SELECT STATUSCODE, COMPANYNUMBER, DIVISIONNUMBER, JOBNUMBER, SUBJOBNUMBER, JCDISTRIBTUION, COSTTYPE, RECORDTYPE, EMPLOYEECLASS, ENTEREDDATE, JOURNALCTL, JOURNALNO, GLAMT, GENLEDGERACCT, TRANSSOURCE, DESC20A, REGHOURS, OVTHRS, OTHHRS, REGGROSS, OVTGROSS, OTHGROSS, CLOSEDDATE, DISTRIBUTIONCODE, UNITOFMEAS, CHECKNUMBER, CHECKDATE, CHECKAMT, ACTUALAMT, ORIGINATECODE, TENANTSTATUS, VOUCHNO, REFERENCENO15, CASHJRNLCTL, TRANSACTIONDATE, CREWGROUP, CREWNUMBER, VENDORCUSTEMPL, PONUMBER, CURRCONVAMT, CURRCONVFACT, CURRCONVRATETYP, POSTINGPER, POITEMT, TPSYR, TTRRC, TICKETNO, CUSTOMERNUMBER, QTY9, DOCUMENTIDNO, EMPLCOMPANY, EMPLDIVISION, USERID, UPDPROGRAM, LASTTBLUPD, JCTMSTID, CREATEDBY, CRTFUNCTION, DATECREATED, JCTPSTID, REFERENCENO25 FROM CMSFILDEV.JCTPST WHERE (COMPANYNUMBER = ?) AND (DIVISIONNUMBER = ?) AND (TPSYR = ?) AND (POSTINGPER = ?) AND (COSTTYPE = ?) ">
            <SelectParameters>
                <asp:QueryStringParameter DefaultValue="8" Name="COMPANYNUMBER" QueryStringField="Co" Type="Decimal" />
                <asp:QueryStringParameter DefaultValue="4" Name="DIVISIONNUMBER" QueryStringField="Div" Type="Decimal" />
                <asp:QueryStringParameter DefaultValue="2019" Name="TPSYR" QueryStringField="Year" Type="Decimal" />
                <asp:QueryStringParameter DefaultValue="" Name="POSTINGPER" QueryStringField="Month" />
                <asp:QueryStringParameter DefaultValue="" Name="COSTTYPE" QueryStringField="Costtype" />
            </SelectParameters>
        </asp:SqlDataSource>
    </div>
    </form>
</body>
</html>
