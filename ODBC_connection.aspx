<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ODBC_connection.aspx.vb" Inherits="WebApplication2.ODBC_connection" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>

        #div_tools{

            border-radius:10px;
            border:solid 1px blue;
            padding:10px;
            margin-bottom:20px;
        }

        .texto01{

            margin-left:10px;
                        border-radius:10px;
                        padding:5px;
        }
        #div_screen{

            height:300px;
            overflow-Y:auto;
               width:55%;
                        margin-left:25%;
        }

        th{

            background-color:none;
        }
        #div_head {
            align-content: center;
            width: 50%;
            margin-left: 30%;
            height:30px;
            margin-bottom:10px;
            
            border-radius:10px;
            border:solid 1px blue;
            padding-top:5px;
        }
        #div_head div{

            float:left;
            text-align:center
        }
        .cl01 {
            width: 8%;
        }

        .cl02 {
            width: 84%;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div id="div_tools">

                <asp:Label ID="Label1" runat="server" Text="Username:" CssClass="texto01"></asp:Label>  <asp:TextBox ID="TextBox1" runat="server" CssClass="texto01"></asp:TextBox>
                <asp:Label ID="Label2" runat="server" Text="Password:" CssClass="texto01"></asp:Label>   <asp:TextBox ID="TextBox2" runat="server" TextMode="Password" CausesValidation="False" CssClass="texto01">JBRAVOF2</asp:TextBox>

                <asp:Button ID="Button1" runat="server" Text="Run!" CssClass="texto01" />
            </div>
            <div id="div_head">
                <div class="cl01">Co</div>
                                <div class="cl01">Div</div>
                <div class="cl02">Co/Div Name</div>

            </div>
            <div id="div_screen">
            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="COMPANYNUMBER" AllowSorting="True" CellPadding="2" CellSpacing="2" HorizontalAlign="Center" ShowFooter="True" Width="100%" ShowHeader="False" GridLines="None">
                <Columns>
                    <asp:CommandField ButtonType="Button" ShowSelectButton="True" />
                    <asp:BoundField DataField="COMPANYNUMBER" HeaderText="Co" ReadOnly="True" SortExpression="COMPANYNUMBER" >
                    <ItemStyle HorizontalAlign="Center" />
                    </asp:BoundField>
                    <asp:BoundField DataField="DIVISIONNUMBER" HeaderText="Div" SortExpression="DIVISIONNUMBER" >
                    <ItemStyle HorizontalAlign="Center" />
                    </asp:BoundField>
                    <asp:BoundField DataField="COMPANYNAME" HeaderText="Co/Div Name" SortExpression="COMPANYNAME" />
                </Columns>
                <SelectedRowStyle BackColor="#CCFFFF" BorderStyle="Outset" BorderWidth="1px" />
            </asp:GridView>
            </div>
            <asp:SqlDataSource ID="ecmsODBClive" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="System.Data.Odbc" SelectCommand="SELECT SECCDP.COMPANYNUMBER, SECCDP.DIVISIONNUMBER, SYTCNC.COMPANYNAME FROM S104E7FP.CMSFIL.SECCDP SECCDP, S104E7FP.CMSFIL.SECUSP SECUSP, S104E7FP.CMSFIL.SYTCNC SYTCNC WHERE SECCDP.SECUSPID = SECUSP.SECUSPID AND SECCDP.SYTCNCID = SYTCNC.SYTCNCID AND (SECUSP.USERID = ?)">
                <SelectParameters>
                    <asp:ControlParameter ControlID="TextBox1" DefaultValue="DWILSON" Name="userid" PropertyName="Text" />
                </SelectParameters>
            </asp:SqlDataSource>
            <hr />

        </div>
    </form>
</body>
</html>
