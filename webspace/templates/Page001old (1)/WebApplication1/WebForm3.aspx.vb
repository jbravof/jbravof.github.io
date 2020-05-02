Public Class WebForm3
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub GridView2_SelectedIndexChanged(sender As Object, e As EventArgs) Handles GridView2.SelectedIndexChanged
        '   MsgBox(e.ToString)
    End Sub

    Private Sub GridView2_SelectedIndexChanging(sender As Object, e As GridViewSelectEventArgs) Handles GridView2.SelectedIndexChanging
        ' MsgBox(e.NewSelectedIndex.ToString)
        'MsgBox(Me.GridView2.Rows(e.NewSelectedIndex.ToString).Cells(2).Text)


        Me.SqlDataSource1.SelectCommand = "SELECT COSTTYPE, JCDISTRIBTUION,TPSYR, SUM(GLAMT) AS Expr1 FROM CMSFILDEV.JCTPST GROUP BY COMPANYNUMBER, DIVISIONNUMBER, COSTTYPE, JCDISTRIBTUION,TPSYR HAVING (DIVISIONNUMBER = 3) AND (COMPANYNUMBER = 8) AND (TPSYR = 2016) AND(COSTTYPE='" & Me.GridView2.Rows(e.NewSelectedIndex.ToString).Cells(1).Text & "')"
        Me.GridView3.DataBind()
        On Error Resume Next
        MsgBox(Me.SqlDataSource1.UpdateParameters.Item(0).ToString)
    End Sub

    Protected Sub GridView3_SelectedIndexChanged(sender As Object, e As EventArgs) Handles GridView3.SelectedIndexChanged

    End Sub

    Private Sub GridView3_SelectedIndexChanging(sender As Object, e As GridViewSelectEventArgs) Handles GridView3.SelectedIndexChanging
        MsgBox(Me.SqlDataSource1.SelectParameters.Item(0).Name)
    End Sub
End Class