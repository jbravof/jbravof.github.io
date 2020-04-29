<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="IDIquery.aspx.vb" Inherits="WebApplication2.IDIquery" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        .paneles{
            border-radius:10px;
            border:solid;
            height:300px;
            padding:5px;
        }
                .paneles2{
                    width:20%;
            border-radius:10px;
            border:solid;
            height:95%;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server" action="forma2.aspx" method="get">
        <div class="container">

            <div>

                <asp:Panel ID="Panel1" runat="server" CssClass="paneles">
                    <asp:Panel ID="Panel2" runat="server" CssClass="paneles2">
                        <asp:TextBox ID="TextBox1" runat="server" TextMode="Number"></asp:TextBox>
                        <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
                        <input id="Text1" type="text" placeholder="username" />
                        <input id="Password1" type="password" placeholder="password" />

                        <asp:ListBox ID="ListBox1" runat="server"></asp:ListBox>
                    </asp:Panel>
 <input id="Submit1" type="submit" value="submit" />
                </asp:Panel>
            </div>
        </div>
       
    </form>
</body>
</html>
