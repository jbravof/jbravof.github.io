Public Class WebForm1
    Inherits System.Web.UI.Page



 

    Protected Sub DataList1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles DataList1.SelectedIndexChanged
        TextBox1.Text = e.ToString
    End Sub
End Class