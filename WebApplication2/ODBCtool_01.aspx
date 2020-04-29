<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ODBCtool_01.aspx.vb" Inherits="WebApplication2.ODBCtool_01" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        #div_list01{

            height:250px;
            overflow:auto;
            padding:10px;
        }
                #div_list02{

            height:200px;
            overflow:auto;
            padding:10px;
        }
        .clitem01{
            border-radius:10px;

        }
        .clcalendar{
                        float:left;
                                    height:100%;
            width:50%;
            border-radius:10px;
        }
        .cllistb01{
            float:left;
            padding:10px;
            margin:5px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        
                       <div id="div_list01">

        <asp:Calendar ID="Calendar1" runat="server" CssClass="clcalendar"></asp:Calendar>

        <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource3" DataTextField="SYSAPMNAME" DataValueField="SYSAPMNAME" CssClass="cllistb01" Rows="10" SelectionMode="Multiple" Font-Size="X-Large" Width="228px"></asp:ListBox>
     </div>    
        <hr />
        <asp:Button ID="Button1" runat="server" Text="Button" /><asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
      
        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT DISTINCT SYSAPMNAME FROM S104E7FP.CMSFIL.SEC_USERLOGGING"></asp:SqlDataSource>
    <hr />
               <div id="div_list02">

    
                   <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource2" Width="100%">
            <Columns>
                <asp:BoundField DataField="USERID" HeaderText="USERID" SortExpression="USERID" />
                <asp:BoundField DataField="UPDDATETIME" HeaderText="UPDDATETIME" SortExpression="UPDDATETIME" />
                <asp:BoundField DataField="CRTDATETIME" HeaderText="CRTDATETIME" SortExpression="CRTDATETIME" />
                <asp:BoundField DataField="ENTRYDATETIME" HeaderText="ENTRYDATETIME" SortExpression="ENTRYDATETIME" />
                <asp:BoundField DataField="EXITDATETIME" HeaderText="EXITDATETIME" SortExpression="EXITDATETIME" />
            </Columns>
            </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT USERID, UPDDATETIME, CRTDATETIME, ENTRYDATETIME, EXITDATETIME, SYSAPMNAME FROM S104E7FP.CMSFIL.SEC_USERLOGGING WHERE (UPDDATETIME IS NULL) AND (ENTRYDATETIME &gt;= ?) AND (SYSAPMNAME = ?)">
            <SelectParameters>
                <asp:ControlParameter ControlID="TextBox1" DefaultValue="" Name="date" PropertyName="Text" />
                <asp:ControlParameter ControlID="ListBox1" Name="?" PropertyName="SelectedValue" />
            </SelectParameters>
                   </asp:SqlDataSource>
   </div>
                   </form>
</body>
</html>
