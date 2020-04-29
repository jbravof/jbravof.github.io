Public Class coaccess
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        ' TextBox1.Text = Context.Request.Cookies("username").Value.ToString
        '  TextBox2.Text = Context.Request.Cookies("password").Value.ToString


        ' Me.TextBox4.Text = "Dsn=CMSFILTST"


    End Sub



    Protected Sub ImageButton1_Click(sender As Object, e As ImageClickEventArgs) Handles ImageButton1.Click
        Me.SqlDataSource1.SelectCommand = "SELECT CMSFILTST.SECCDP.COMPANYNUMBER, CMSFILTST.SECCDP.DIVISIONNUMBER, CMSFILTST.SYTCNC.COMPANYNAME FROM CMSFILTST.SYTCNC, { oj CMSFILTST.SECCDP RIGHT OUTER JOIN CMSFILTST.SECUSP ON SECUSP.SECUSPID = SECCDP.SECUSPID } WHERE CMSFILTST.SYTCNC.SYTCNCID = CMSFILTST.SECCDP.SYTCNCID AND (CMSFILTST.SECUSP.USERID = '" & Context.Request.Cookies("username").Value.ToString & "')"
        Me.SqlDataSource1.ConnectionString = "Dsn=CMSFILTST;uid=" & Request.Cookies("username").Value.ToString & ";pwd=" & Context.Request.Cookies("password").Value.ToString
        Me.SqlDataSource1.DataBind()
        'Me.SqlDataSource1.DataBind()

        Me.GridView1.DataSourceID = "SqlDataSource1"

        GridView1.DataBind()
    End Sub

    Protected Sub GridView1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles GridView1.SelectedIndexChanged
        Response.Cookies("Co").Value = GridView1.SelectedRow.Cells(1).Text
        Response.Cookies("Div").Value = GridView1.SelectedRow.Cells(2).Text
    End Sub
End Class