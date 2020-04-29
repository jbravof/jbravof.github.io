<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ODBC_DB_01.aspx.vb" Inherits="WebApplication2.ODBC_DB_01" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="ODB_DB_01">
            <Columns>
                <asp:BoundField DataField="SYTCNCID" HeaderText="SYTCNCID" SortExpression="SYTCNCID" />
                <asp:BoundField DataField="STATUSCODE" HeaderText="STATUSCODE" SortExpression="STATUSCODE" />
                <asp:BoundField DataField="COMPANYNO" HeaderText="COMPANYNO" SortExpression="COMPANYNO" />
                <asp:BoundField DataField="DIVISIONNO" HeaderText="DIVISIONNO" SortExpression="DIVISIONNO" />
                <asp:BoundField DataField="COMPANYNAME" HeaderText="COMPANYNAME" SortExpression="COMPANYNAME" />
                <asp:BoundField DataField="ADDRESS1" HeaderText="ADDRESS1" SortExpression="ADDRESS1" />
                <asp:BoundField DataField="ADDRESS2" HeaderText="ADDRESS2" SortExpression="ADDRESS2" />
                <asp:BoundField DataField="CITY" HeaderText="CITY" SortExpression="CITY" />
                <asp:BoundField DataField="STATECODE" HeaderText="STATECODE" SortExpression="STATECODE" />
                <asp:BoundField DataField="ZIPCODE" HeaderText="ZIPCODE" SortExpression="ZIPCODE" />
                <asp:BoundField DataField="AREACODE" HeaderText="AREACODE" SortExpression="AREACODE" />
                <asp:BoundField DataField="PHONENO" HeaderText="PHONENO" SortExpression="PHONENO" />
                <asp:BoundField DataField="COUNTRYCODE" HeaderText="COUNTRYCODE" SortExpression="COUNTRYCODE" />
                <asp:BoundField DataField="ITEMNOLENGTH" HeaderText="ITEMNOLENGTH" SortExpression="ITEMNOLENGTH" />
                <asp:BoundField DataField="IMAGINGENABLED" HeaderText="IMAGINGENABLED" SortExpression="IMAGINGENABLED" />
                <asp:BoundField DataField="EFORMSENABLED" HeaderText="EFORMSENABLED" SortExpression="EFORMSENABLED" />
                <asp:BoundField DataField="HEAVYHWY" HeaderText="HEAVYHWY" SortExpression="HEAVYHWY" />
                <asp:BoundField DataField="SECCHK" HeaderText="SECCHK" SortExpression="SECCHK" />
                <asp:BoundField DataField="COLLABINT" HeaderText="COLLABINT" SortExpression="COLLABINT" />
                <asp:BoundField DataField="USERID" HeaderText="USERID" SortExpression="USERID" />
                <asp:BoundField DataField="UPDPROGRAM" HeaderText="UPDPROGRAM" SortExpression="UPDPROGRAM" />
                <asp:BoundField DataField="LASTTBLUPD" HeaderText="LASTTBLUPD" SortExpression="LASTTBLUPD" />
                <asp:BoundField DataField="NOLONGINBUS" HeaderText="NOLONGINBUS" SortExpression="NOLONGINBUS" />
                <asp:BoundField DataField="ADDEDBY" HeaderText="ADDEDBY" SortExpression="ADDEDBY" />
                <asp:BoundField DataField="ADDDATE" HeaderText="ADDDATE" SortExpression="ADDDATE" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="ODB_DB_01" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString_ODBC_DB %>" ProviderName="<%$ ConnectionStrings:ConnectionString_ODBC_DB.ProviderName %>" SelectCommand="SELECT * FROM [Tabla01_SYTCNC$Query_from_CMSFIL_SYTCNC]"></asp:SqlDataSource>
        <div>
        </div>
    </form>
</body>
</html>
