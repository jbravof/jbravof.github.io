Public Class ODBCtool_01
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Calendar1.SelectedDate = Today
    End Sub



    Protected Sub Calendar1_SelectionChanged(sender As Object, e As EventArgs) Handles Calendar1.SelectionChanged
        TextBox1.Text = Calendar1.SelectedDate.Year & "-" & Calendar1.SelectedDate.Month & "-" & Calendar1.SelectedDate.Day
    End Sub
End Class