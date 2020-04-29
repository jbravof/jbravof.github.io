<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ODBCtool02.aspx.vb" Inherits="WebApplication2.ODBCtool02" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        .clgrid01{
            width:auto;
            float:right;
            height:auto;
            overflow:auto;
            margin-right:40%;
        }
        .cllist01{
            width:15%;
            float:left;
            height:90vh;
            position:absolute;
        }
        .container{
            height:90vh;
            overflow:auto;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
            <asp:ListView ID="ListView1" runat="server" DataSourceID="SqlDataSource1" GroupItemCount="6">
                <AlternatingItemTemplate>
                    <td runat="server" style="background-color:#FFF8DC;">USERID:
                        <asp:Label ID="USERIDLabel" runat="server" Text='<%# Eval("USERID") %>' />
                        <br />COMPANYNUMBER:
                        <asp:Label ID="COMPANYNUMBERLabel" runat="server" Text='<%# Eval("COMPANYNUMBER") %>' />
                        <br />DIVISIONNUMBER:
                        <asp:Label ID="DIVISIONNUMBERLabel" runat="server" Text='<%# Eval("DIVISIONNUMBER") %>' />
                        <br /></td>
                </AlternatingItemTemplate>
                <EditItemTemplate>
                    <td runat="server" style="background-color:#008A8C;color: #FFFFFF;">USERID:
                        <asp:TextBox ID="USERIDTextBox" runat="server" Text='<%# Bind("USERID") %>' />
                        <br />COMPANYNUMBER:
                        <asp:TextBox ID="COMPANYNUMBERTextBox" runat="server" Text='<%# Bind("COMPANYNUMBER") %>' />
                        <br />DIVISIONNUMBER:
                        <asp:TextBox ID="DIVISIONNUMBERTextBox" runat="server" Text='<%# Bind("DIVISIONNUMBER") %>' />
                        <br />
                        <asp:Button ID="UpdateButton" runat="server" CommandName="Update" Text="Update" />
                        <br />
                        <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
                        <br /></td>
                </EditItemTemplate>
                <EmptyDataTemplate>
                    <table runat="server" style="background-color: #FFFFFF;border-collapse: collapse;border-color: #999999;border-style:none;border-width:1px;">
                        <tr>
                            <td>No data was returned.</td>
                        </tr>
                    </table>
                </EmptyDataTemplate>
                <EmptyItemTemplate>
<td runat="server" />
                </EmptyItemTemplate>
                <GroupTemplate>
                    <tr id="itemPlaceholderContainer" runat="server">
                        <td id="itemPlaceholder" runat="server"></td>
                    </tr>
                </GroupTemplate>
                <InsertItemTemplate>
                    <td runat="server" style="">USERID:
                        <asp:TextBox ID="USERIDTextBox" runat="server" Text='<%# Bind("USERID") %>' />
                        <br />COMPANYNUMBER:
                        <asp:TextBox ID="COMPANYNUMBERTextBox" runat="server" Text='<%# Bind("COMPANYNUMBER") %>' />
                        <br />DIVISIONNUMBER:
                        <asp:TextBox ID="DIVISIONNUMBERTextBox" runat="server" Text='<%# Bind("DIVISIONNUMBER") %>' />
                        <br />
                        <asp:Button ID="InsertButton" runat="server" CommandName="Insert" Text="Insert" />
                        <br />
                        <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Clear" />
                        <br /></td>
                </InsertItemTemplate>
                <ItemTemplate>
                    <td runat="server" style="background-color:#DCDCDC;color: #000000;">USERID:
                        <asp:Label ID="USERIDLabel" runat="server" Text='<%# Eval("USERID") %>' />
                        <br />COMPANYNUMBER:
                        <asp:Label ID="COMPANYNUMBERLabel" runat="server" Text='<%# Eval("COMPANYNUMBER") %>' />
                        <br />DIVISIONNUMBER:
                        <asp:Label ID="DIVISIONNUMBERLabel" runat="server" Text='<%# Eval("DIVISIONNUMBER") %>' />
                        <br /></td>
                </ItemTemplate>
                <LayoutTemplate>
                    <table runat="server">
                        <tr runat="server">
                            <td runat="server">
                                <table id="groupPlaceholderContainer" runat="server" border="1" style="background-color: #FFFFFF;border-collapse: collapse;border-color: #999999;border-style:none;border-width:1px;font-family: Verdana, Arial, Helvetica, sans-serif;">
                                    <tr id="groupPlaceholder" runat="server">
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr runat="server">
                            <td runat="server" style="text-align: center;background-color: #CCCCCC;font-family: Verdana, Arial, Helvetica, sans-serif;color: #000000;">
                                <asp:DataPager ID="DataPager1" runat="server" PageSize="12">
                                    <Fields>
                                        <asp:NextPreviousPagerField ButtonType="Button" ShowFirstPageButton="True" ShowLastPageButton="True" />
                                    </Fields>
                                </asp:DataPager>
                            </td>
                        </tr>
                    </table>
                </LayoutTemplate>
                <SelectedItemTemplate>
                    <td runat="server" style="background-color:#008A8C;font-weight: bold;color: #FFFFFF;">USERID:
                        <asp:Label ID="USERIDLabel" runat="server" Text='<%# Eval("USERID") %>' />
                        <br />COMPANYNUMBER:
                        <asp:Label ID="COMPANYNUMBERLabel" runat="server" Text='<%# Eval("COMPANYNUMBER") %>' />
                        <br />DIVISIONNUMBER:
                        <asp:Label ID="DIVISIONNUMBERLabel" runat="server" Text='<%# Eval("DIVISIONNUMBER") %>' />
                        <br /></td>
                </SelectedItemTemplate>
            </asp:ListView>


            <asp:ListBox ID="ListBox2" runat="server" DataSourceID="SqlDataSource1" DataTextField="COMPANYNUMBER" DataValueField="COMPANYNUMBER" Rows="10" Width="15%"></asp:ListBox>

        <div class="container">
            <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource2" DataTextField="USERID" DataValueField="USERID" Rows="20" CssClass="cllist01"></asp:ListBox>
            <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="False" CssClass="clgrid01" AllowPaging="True" AllowSorting="True">
                <Columns>
                    <asp:CommandField ButtonType="Button" ShowSelectButton="True">
                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:CommandField>
                    <asp:BoundField DataField="USERID" HeaderText="User" SortExpression="USERID" >
                    <ControlStyle Width="100px" />
                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="100px" />
                    </asp:BoundField>
                    <asp:BoundField DataField="COMPANYNUMBER" HeaderText="Co" SortExpression="COMPANYNUMBER" >
                    <ControlStyle Width="100px" />
                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="100px" />
                    </asp:BoundField>
                    <asp:BoundField DataField="DIVISIONNUMBER" HeaderText="Div" SortExpression="DIVISIONNUMBER" >
                    <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="100px" />
                    </asp:BoundField>
                </Columns>
                <SelectedRowStyle BackColor="#FF6666" BorderStyle="Groove" />
            </asp:GridView>
            
        </div>
            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT DISTINCT USERID FROM S104E7FP.CMSFIL.SECUSP"></asp:SqlDataSource>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT DISTINCT S104E7FP.CMSFIL.SECUSP.USERID, S104E7FP.CMSFIL.SECCDP.COMPANYNUMBER, S104E7FP.CMSFIL.SECCDP.DIVISIONNUMBER FROM S104E7FP.CMSFIL.SECUSP, S104E7FP.CMSFIL.SECCDP WHERE S104E7FP.CMSFIL.SECUSP.SECUSPID = S104E7FP.CMSFIL.SECCDP.SECUSPID AND (S104E7FP.CMSFIL.SECUSP.USERID = ?)">
                <SelectParameters>
                    <asp:ControlParameter ControlID="ListBox1" DefaultValue="" Name="?" PropertyName="SelectedValue" />
                </SelectParameters>
            </asp:SqlDataSource>

    </form>
</body>
</html>
