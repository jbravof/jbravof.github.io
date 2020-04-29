Public Class ODBC
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        On Error GoTo error_01
        ecmsODBClive.ConnectionString = "Dsn=CMSFIL;uid=" + TextBox1.Text + ";pwd=" + TextBox2.Text
        ' ecmsODBClive.
        ecmsODBClive.SelectCommand = "SELECT SECCDP.COMPANYNUMBER, SECCDP.DIVISIONNUMBER, SYTCNC.COMPANYNAME
           From S104E7FP.CMSFIL.SECCDP SECCDP, S104E7FP.CMSFIL.SECUSP SECUSP, S104E7FP.CMSFIL.SYTCNC SYTCNC
          WHERE SECCDP.SECUSPID = SECUSP.SECUSPID AND SYTCNC.SYTCNCID = SECCDP.SYTCNCID AND ((SECUSP.USERID='" + TextBox1.Text + "'))"
        GridView1.DataSourceID = "ecmsODBClive"

        GridView1.DataBind()
        '
        GoTo end_01
error_01:

        MsgBox("There was an error")
end_01:
    End Sub
End Class