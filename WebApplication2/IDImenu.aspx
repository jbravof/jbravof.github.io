<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="IDImenu.aspx.vb" Inherits="WebApplication2.IDImenu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>QueryeCMS</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <style>
        option{
            border:solid;
            margin:5px;
                        border-radius:10px;

                        padding:5px;
                        text-align:center;
        }
        select{

            border-radius:10px;
        }
        .cl10{
            border-radius:10px;
        }
        .cl20{

            position:relative;
            top:-200px;
            width:80%;
            float:right;
        }
        .cb01 label{
            border-radius:10px;
            border:solid 1px blue;
            margin-right:5px;
            margin-left:2px;
            padding:8px;
        }
                .cb02 label{
            border-radius:10px;
            border:solid 1px blue;
            margin-right:5px;
            margin-left:2px;
            padding:8px;margin-top:10px;
        }
                .rb01 label{
            border-radius:10px;
            border:solid 1px blue;
            margin-right:5px;
            margin-left:2px;
            padding:8px;
        }
        .cb01 {
            height: 100px;
            overflow: auto;
            padding: 10px;
            border-radius: 10px;
            border: solid;
            margin-right: 10px;
            margin-left: 10px;
        }

        .tb01 {
            padding: 10px;
        }
        .tb03{
            border-radius:10px;
            padding:10px;
        }
        #GridView1 tr{
            border:none;
            margin-top:5px;

        }
    </style>
</head>
<body>
    <form class="form-horizontal" id="form1" runat="server">
        <div class="container-fluid">
           
            <asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
                <asp:View ID="View1" runat="server">
               

                   
 
                    <div style="margin-top:10%;height:50%;border:solid 1px blue;border-radius:10px;width:50%;" class="container">
  <h2>Log In Screen</h2>
                        <hr />
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">User:</label>
      <div class="col-sm-10">
        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control"></asp:TextBox>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Password:</label>
      <div class="col-sm-10">          
      <asp:TextBox ID="TextBox2" runat="server" TextMode="Password" CssClass="form-control"></asp:TextBox>
      </div>

    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
      
           <asp:Button ID="Button1" runat="server" Text="Log In" CssClass="btn btn-default" />
      </div>
    </div>
</div>

                </asp:View>
                <asp:View ID="View2" runat="server">
                    <div style="width:50%;margin-left:25%;border:solid 1px red;border-radius:10px;height:60vh;margin-top:20vh;overflow:auto;" class="container">
                   <br />
                    <asp:Panel ID="Panel1" runat="server" Height="100%">
                        <asp:GridView ID="GridView1" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" Font-Names="Calibri" GridLines="None" DataKeyNames="COMPANYNAME" HorizontalAlign="Center" Width="100%" BorderStyle="None" CellPadding="5" CellSpacing="15" Font-Size="Medium">
                            <Columns>
                                <asp:CommandField ButtonType="Button" ShowSelectButton="True" >
                                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                </asp:CommandField>
                                <asp:BoundField DataField="COMPANYNUMBER" HeaderText="Co" ReadOnly="True" SortExpression="COMPANYNUMBER">
                                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="50px" />
                                </asp:BoundField>
                                <asp:BoundField DataField="DIVISIONNUMBER" HeaderText="Div" SortExpression="DIVISIONNUMBER">
                                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="50px" />
                                </asp:BoundField>
                                <asp:BoundField DataField="COMPANYNAME" HeaderText="Co/Div Name" SortExpression="COMPANYNAME">
                                </asp:BoundField>
                            </Columns>
                            <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                            <SelectedRowStyle BackColor="#FFFFCC" />
                        </asp:GridView>
                    </asp:Panel>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT SECCDP.COMPANYNUMBER, SECCDP.DIVISIONNUMBER, SYTCNC.COMPANYNAME FROM S104E7FP.CMSFIL.SECCDP SECCDP, S104E7FP.CMSFIL.SECUSP SECUSP, S104E7FP.CMSFIL.SYTCNC SYTCNC WHERE SECCDP.SECUSPID = SECUSP.SECUSPID AND SECCDP.SYTCNCID = SYTCNC.SYTCNCID AND (SECUSP.USERID = ?)">
                        <SelectParameters>
                            <asp:ControlParameter ControlID="TextBox1" Name="?" PropertyName="Text" />
                        </SelectParameters>
                    </asp:SqlDataSource>
                    <br />
                    </div>

                </asp:View>

                <asp:View ID="View3" runat="server">
                    <br />
                    <asp:Label ID="Label2" runat="server" Text="Data Base"></asp:Label>   <asp:Button ID="Button7" runat="server" Text="Button" CssClass="cl10" />
                    <asp:Label ID="Label3" runat="server" Text="User ID: " CssClass="cl10"></asp:Label>  <asp:Button ID="Button3" runat="server" Text="Button" Width="150px" CssClass="cl10" />
                    <asp:Label ID="Label4" runat="server" Text="Co/Div :"></asp:Label>      <asp:Button ID="Button2" runat="server" Text="Button" Width="400px" CssClass="cl10" />
                    <hr />
                    <asp:Button ID="Button5" runat="server" Text="Query" CssClass="cl10" />
                    <asp:Button ID="Button6" runat="server" Text="Master" CssClass="cl10" />
                    <hr />
                    <asp:MultiView ID="MultiView2" runat="server">
                      
                        <asp:View ID="View4" runat="server">

                   <div class="container-fluid">
                    

<%--                    <asp:Button ID="Button4" runat="server" Text="Tables" /><asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                       <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                       <asp:Button ID="Button8" runat="server" Text="Fields" />--%>
                       <div style="display:flex;JUSTIFY-CONTENT: space-between;padding-right:0px;padding-left:0px">
<div style="height:100%;text-align:center">
                       <asp:Label ID="Label1" runat="server" Text="Select Table"></asp:Label><br /><br />
                       <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource3" DataTextField="TABLE_NAME" DataValueField="TABLE_NAME" Width="150px">
                       </asp:DropDownList><br /><br />
                        <asp:Button ID="Button9" runat="server" Text="Get Fields" CssClass="cl10" />

                       </div>

                        <asp:ListBox ID="ListBox2" runat="server" DataSourceID="SqlDataSource2" DataTextField="COLUMN_NAME" DataValueField="COLUMN_NAME" Rows="5" SelectionMode="Multiple" Width="15%" Height="80px" AutoPostBack="True" Visible="False"></asp:ListBox>
                           <asp:CheckBoxList ID="CheckBoxList1" runat="server" CellPadding="5" CellSpacing="10" CssClass="cb01" DataSourceID="SqlDataSource2" DataTextField="COLUMN_NAME" DataValueField="COLUMN_NAME" RepeatColumns="8" RepeatDirection="Horizontal" RepeatLayout="Flow">
                           </asp:CheckBoxList>
                           <asp:Button ID="Button4" runat="server" CssClass="cl10" Text="Refresh !" Width="9.8%" />
                           </div>
                       <hr />
                       <asp:TextBox ID="TextBox3" runat="server" Height="80px" TextMode="MultiLine" Width="100%" CssClass="tb01" Font-Names="Calibri" Font-Size="Large"></asp:TextBox>
                       <hr />
                       <asp:Button ID="Button10" runat="server" Text="Refresh" CssClass="cl10" />

                       <div style="height: 200px">
<%--                    <asp:ListBox ID="ListBox1" runat="server" Rows="10" Width="150px" AutoPostBack="True" DataSourceID="SqlDataSource3" DataTextField="TABLE_NAME" DataValueField="TABLE_NAME"></asp:ListBox>--%>
                        
                        <asp:GridView ID="GridView2" runat="server" AutoGenerateSelectButton="True" Width="100%" AllowPaging="True" AllowSorting="True" HorizontalAlign="Center" Height="100%" ShowHeaderWhenEmpty="True">
                            <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                       </asp:GridView>
                        </div>
                 
                       <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand=" select * from INFORMATION_SCHEMA.tables"></asp:SqlDataSource>

                            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.columns WHERE (TABLE_NAME = ?) AND (TABLE_SCHEMA = 'CMSFIL')">
                                <SelectParameters>
                                    <asp:ControlParameter ControlID="DropDownList1" Name="?" PropertyName="SelectedValue" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                            <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT * FROM INFORMATION_SCHEMA.tables WHERE (TABLE_SCHEMA = 'CMSFIL') ORDER BY TABLE_NAME"></asp:SqlDataSource>
                              </div>
                            </asp:View>
                        <asp:View ID="View5" runat="server">
                            <asp:Button ID="Button8" runat="server" Text="Button" Visible="False" />
                            <asp:TextBox ID="TextBox4" runat="server" Visible="False"></asp:TextBox>
                            <asp:TextBox ID="TextBox5" runat="server" Visible="False"></asp:TextBox>
                                                  <asp:DropDownList ID="DropDownList2" runat="server" Width="150px" AutoPostBack="True" Visible="False">
                                                      <asp:ListItem>GLTMST</asp:ListItem>
                                                      <asp:ListItem>SYTCNC</asp:ListItem>
                                                      <asp:ListItem>APTVEN</asp:ListItem>
                                                      <asp:ListItem>JCTMST</asp:ListItem>
                                                      <asp:ListItem>PRTMST</asp:ListItem>
                                                      <asp:ListItem>EQTMST</asp:ListItem>
                       </asp:DropDownList>
                            
                            <div>
                                <asp:RadioButtonList ID="RadioButtonList1" runat="server" AutoPostBack="True" CssClass="rb01" RenderWhenDataEmpty="True" RepeatColumns="7" RepeatDirection="Horizontal" RepeatLayout="Flow">
                                    <asp:ListItem>GLTMST</asp:ListItem>
                                    <asp:ListItem>SYTCNC</asp:ListItem>
                                    <asp:ListItem>PRTMST</asp:ListItem>
                                </asp:RadioButtonList>
                                                                                    <hr />    <asp:TextBox ID="TextBox6" runat="server" TextMode="MultiLine" Width="100%" Height="71px" CssClass="tb03"></asp:TextBox>

                            </div>
                            <hr />
                            <asp:Button ID="Button11" runat="server" Text="Refresh Fields" />
                            <div style="width:98%;overflow:auto;height:100px;" class="container-fluid">
                                <asp:CheckBoxList ID="CheckBoxList2" runat="server" DataSourceID="SqlDataSource6" DataTextField="COLUMN_NAME" DataValueField="COLUMN_NAME" RepeatColumns="10" CssClass="cb02" Height="100px" RepeatDirection="Horizontal" Width="100%" Font-Names="Calibri" Font-Size="Small"></asp:CheckBoxList>
                               </div>
                                <asp:SqlDataSource ID="SqlDataSource6" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.columns WHERE (TABLE_NAME = ?) AND (TABLE_SCHEMA = 'CMSFIL')">
                                    <SelectParameters>
                                        <asp:ControlParameter ControlID="RadioButtonList1" Name="?" PropertyName="SelectedValue" />
                                    </SelectParameters>
                                </asp:SqlDataSource>

                                <hr />
                              <div style="width:98%;overflow:auto;height:300px;" class="container-fluid">
                            <asp:GridView ID="GridView3" runat="server" ShowHeaderWhenEmpty="True" AllowSorting="True" Caption="Master Table" HorizontalAlign="Center" PageSize="7" CaptionAlign="Left"></asp:GridView>
                         </div>
                            <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:ecmsODBCliveconnection %>" ProviderName="<%$ ConnectionStrings:ecmsODBCliveconnection.ProviderName %>" SelectCommand="SELECT S104E7FP.CMSFIL.GLTMST.*, COMPANYNO AS Expr1, DIVISIONNO AS Expr2 FROM S104E7FP.CMSFIL.GLTMST WHERE (COMPANYNO = ?) AND (DIVISIONNO = ?)">
                                <SelectParameters>
                                    <asp:ControlParameter ControlID="TextBox4" Name="?" PropertyName="Text" />
                                    <asp:ControlParameter ControlID="TextBox5" Name="?" PropertyName="Text" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                        </asp:View>
                    </asp:MultiView>


 
                </asp:View>
            </asp:MultiView>
        </div>
    </form>
</body>
</html>
