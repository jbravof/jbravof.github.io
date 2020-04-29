<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="forma2.aspx.vb" Inherits="WebApplication2.forma2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="SYTCNCID" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="SYTCNCID" HeaderText="SYTCNCID" ReadOnly="True" SortExpression="SYTCNCID" />
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
                <asp:BoundField DataField="FAXAREACODE" HeaderText="FAXAREACODE" SortExpression="FAXAREACODE" />
                <asp:BoundField DataField="FAXPHONENO" HeaderText="FAXPHONENO" SortExpression="FAXPHONENO" />
                <asp:BoundField DataField="OTHAREACODE" HeaderText="OTHAREACODE" SortExpression="OTHAREACODE" />
                <asp:BoundField DataField="OTHPHONENO" HeaderText="OTHPHONENO" SortExpression="OTHPHONENO" />
                <asp:BoundField DataField="SITEDESC" HeaderText="SITEDESC" SortExpression="SITEDESC" />
                <asp:BoundField DataField="SUBSITE" HeaderText="SUBSITE" SortExpression="SUBSITE" />
                <asp:BoundField DataField="CONSLCOMPANY" HeaderText="CONSLCOMPANY" SortExpression="CONSLCOMPANY" />
                <asp:BoundField DataField="CONSLDIVISION" HeaderText="CONSLDIVISION" SortExpression="CONSLDIVISION" />
                <asp:BoundField DataField="COUNTRYCODE" HeaderText="COUNTRYCODE" SortExpression="COUNTRYCODE" />
                <asp:BoundField DataField="ITEMNOLENGTH" HeaderText="ITEMNOLENGTH" SortExpression="ITEMNOLENGTH" />
                <asp:BoundField DataField="IMAGINGENABLED" HeaderText="IMAGINGENABLED" SortExpression="IMAGINGENABLED" />
                <asp:BoundField DataField="EFORMSENABLED" HeaderText="EFORMSENABLED" SortExpression="EFORMSENABLED" />
                <asp:BoundField DataField="HEAVYHWY" HeaderText="HEAVYHWY" SortExpression="HEAVYHWY" />
                <asp:BoundField DataField="SECCHK" HeaderText="SECCHK" SortExpression="SECCHK" />
                <asp:BoundField DataField="COLLABINT" HeaderText="COLLABINT" SortExpression="COLLABINT" />
                <asp:BoundField DataField="COMPANYSDESC" HeaderText="COMPANYSDESC" SortExpression="COMPANYSDESC" />
                <asp:BoundField DataField="DIVISIONSDESC" HeaderText="DIVISIONSDESC" SortExpression="DIVISIONSDESC" />
                <asp:BoundField DataField="SHRTDESCJOBA" HeaderText="SHRTDESCJOBA" SortExpression="SHRTDESCJOBA" />
                <asp:BoundField DataField="SHRTDESCJOBB" HeaderText="SHRTDESCJOBB" SortExpression="SHRTDESCJOBB" />
                <asp:BoundField DataField="SHRTDESCSJA" HeaderText="SHRTDESCSJA" SortExpression="SHRTDESCSJA" />
                <asp:BoundField DataField="SHRTDESCSJB" HeaderText="SHRTDESCSJB" SortExpression="SHRTDESCSJB" />
                <asp:BoundField DataField="COSTTYPESDESCA" HeaderText="COSTTYPESDESCA" SortExpression="COSTTYPESDESCA" />
                <asp:BoundField DataField="COSTTYPESDESCB" HeaderText="COSTTYPESDESCB" SortExpression="COSTTYPESDESCB" />
                <asp:BoundField DataField="SHRTDSCEMPCLSA" HeaderText="SHRTDSCEMPCLSA" SortExpression="SHRTDSCEMPCLSA" />
                <asp:BoundField DataField="SHRTDSCEMPCLSB" HeaderText="SHRTDSCEMPCLSB" SortExpression="SHRTDSCEMPCLSB" />
                <asp:BoundField DataField="COMPANYLNGDESC" HeaderText="COMPANYLNGDESC" SortExpression="COMPANYLNGDESC" />
                <asp:BoundField DataField="DIVLNGDSC" HeaderText="DIVLNGDSC" SortExpression="DIVLNGDSC" />
                <asp:BoundField DataField="JOBLNGDESC" HeaderText="JOBLNGDESC" SortExpression="JOBLNGDESC" />
                <asp:BoundField DataField="LONDDESCSJ" HeaderText="LONDDESCSJ" SortExpression="LONDDESCSJ" />
                <asp:BoundField DataField="CSTTYPELGNDSC" HeaderText="CSTTYPELGNDSC" SortExpression="CSTTYPELGNDSC" />
                <asp:BoundField DataField="EMPCLSLNGDSC" HeaderText="EMPCLSLNGDSC" SortExpression="EMPCLSLNGDSC" />
                <asp:BoundField DataField="RESPCODEDESC1" HeaderText="RESPCODEDESC1" SortExpression="RESPCODEDESC1" />
                <asp:BoundField DataField="RESPCODEDESC2" HeaderText="RESPCODEDESC2" SortExpression="RESPCODEDESC2" />
                <asp:BoundField DataField="RESPCODEDESC3" HeaderText="RESPCODEDESC3" SortExpression="RESPCODEDESC3" />
                <asp:BoundField DataField="RESPCODEDESC4" HeaderText="RESPCODEDESC4" SortExpression="RESPCODEDESC4" />
                <asp:BoundField DataField="RESPCODEDESC5" HeaderText="RESPCODEDESC5" SortExpression="RESPCODEDESC5" />
                <asp:BoundField DataField="RESPCODEDESC6" HeaderText="RESPCODEDESC6" SortExpression="RESPCODEDESC6" />
                <asp:BoundField DataField="USERID" HeaderText="USERID" SortExpression="USERID" />
                <asp:BoundField DataField="UPDPROGRAM" HeaderText="UPDPROGRAM" SortExpression="UPDPROGRAM" />
                <asp:BoundField DataField="LASTTBLUPD" HeaderText="LASTTBLUPD" SortExpression="LASTTBLUPD" />
                <asp:BoundField DataField="OUTPUTLOC" HeaderText="OUTPUTLOC" SortExpression="OUTPUTLOC" />
                <asp:BoundField DataField="NOLONGINBUS" HeaderText="NOLONGINBUS" SortExpression="NOLONGINBUS" />
                <asp:BoundField DataField="RESPCODEDESC7" HeaderText="RESPCODEDESC7" SortExpression="RESPCODEDESC7" />
                <asp:BoundField DataField="RESPCODEDESC8" HeaderText="RESPCODEDESC8" SortExpression="RESPCODEDESC8" />
                <asp:BoundField DataField="RESPCODEDESC9" HeaderText="RESPCODEDESC9" SortExpression="RESPCODEDESC9" />
                <asp:BoundField DataField="RESPCODEDESC10" HeaderText="RESPCODEDESC10" SortExpression="RESPCODEDESC10" />
                <asp:BoundField DataField="RESPCODEDESC11" HeaderText="RESPCODEDESC11" SortExpression="RESPCODEDESC11" />
                <asp:BoundField DataField="RESPCODEDESC12" HeaderText="RESPCODEDESC12" SortExpression="RESPCODEDESC12" />
                <asp:BoundField DataField="ADDEDBY" HeaderText="ADDEDBY" SortExpression="ADDEDBY" />
                <asp:BoundField DataField="ADDDATE" HeaderText="ADDDATE" SortExpression="ADDDATE" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT SYTCNCID, STATUSCODE, COMPANYNO, DIVISIONNO, COMPANYNAME, ADDRESS1, ADDRESS2, CITY, STATECODE, ZIPCODE, AREACODE, PHONENO, FAXAREACODE, FAXPHONENO, OTHAREACODE, OTHPHONENO, SITEDESC, SUBSITE, CONSLCOMPANY, CONSLDIVISION, COUNTRYCODE, ITEMNOLENGTH, IMAGINGENABLED, EFORMSENABLED, HEAVYHWY, SECCHK, COLLABINT, COMPANYSDESC, DIVISIONSDESC, SHRTDESCJOBA, SHRTDESCJOBB, SHRTDESCSJA, SHRTDESCSJB, COSTTYPESDESCA, COSTTYPESDESCB, SHRTDSCEMPCLSA, SHRTDSCEMPCLSB, COMPANYLNGDESC, DIVLNGDSC, JOBLNGDESC, LONDDESCSJ, CSTTYPELGNDSC, EMPCLSLNGDSC, RESPCODEDESC1, RESPCODEDESC2, RESPCODEDESC3, RESPCODEDESC4, RESPCODEDESC5, RESPCODEDESC6, USERID, UPDPROGRAM, LASTTBLUPD, OUTPUTLOC, NOLONGINBUS, RESPCODEDESC7, RESPCODEDESC8, RESPCODEDESC9, RESPCODEDESC10, RESPCODEDESC11, RESPCODEDESC12, ADDEDBY, ADDDATE FROM S104E7FP.CMSFIL.SYTCNC WHERE (COMPANYNO = ?)">
            <SelectParameters>
                <asp:QueryStringParameter Name="?" QueryStringField="TextBox1" />
            </SelectParameters>
        </asp:SqlDataSource>
    </form>
</body>
</html>
