Imports DocumentFormat.OpenXml.Drawing
Imports System.Drawing
Imports System.Data.SqlClient
Imports System.Data.Odbc

Public Class IDImenu
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        '   On Error GoTo error_01
        SqlDataSource1.ConnectionString = "Dsn=CMSFIL;uid=" + TextBox1.Text + ";pwd=" + TextBox2.Text

        Try

            ' ecmsODBClive.
            SqlDataSource1.SelectCommand = "SELECT SECCDP.COMPANYNUMBER, SECCDP.DIVISIONNUMBER, SYTCNC.COMPANYNAME
           From S104E7FP.CMSFIL.SECCDP SECCDP, S104E7FP.CMSFIL.SECUSP SECUSP, S104E7FP.CMSFIL.SYTCNC SYTCNC
          WHERE SECCDP.SECUSPID = SECUSP.SECUSPID AND SYTCNC.SYTCNCID = SECCDP.SYTCNCID AND ((SECUSP.USERID='" + TextBox1.Text + "'))"

            GridView1.DataSourceID = "SqlDataSource1"
            '    GoTo end_01
            GridView1.DataBind()
            Button1.Text = "OK"
            Button7.Text = SqlDataSource1.ConnectionString.ToString.Split(";")(0).Split("=")(1)
            Button3.Text = TextBox1.Text
            MultiView1.SetActiveView(View2)




        Catch ex As Exception
            Button1.Text = "NO"
        End Try

        '

        'error_01:


        '    MsgBox("There was an error")
        'end_01:
    End Sub

    Protected Sub GridView1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles GridView1.SelectedIndexChanged
        MultiView1.SetActiveView(View3)
        Button2.Text = GridView1.SelectedRow.Cells(1).Text & "/" & GridView1.SelectedRow.Cells(2).Text & " - " & GridView1.SelectedRow.Cells(3).Text
        TextBox4.Text = GridView1.SelectedRow.Cells(1).Text
        TextBox5.Text = GridView1.SelectedRow.Cells(2).Text

    End Sub



    Protected Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        MultiView1.SetActiveView(View2)

    End Sub

    Protected Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        MultiView1.SetActiveView(View1)
    End Sub

    Protected Sub Button4_Click(sender As Object, e As EventArgs) 'Handles Button4.Click
        Dim userTables As DataTable = Nothing
        Dim columns As DataTable = Nothing

        Dim db2Con As New OdbcConnection
        Dim db2da As New OdbcDataAdapter
        Dim db2cmd As New OdbcCommand

        db2Con.ConnectionString = "DSN=CMSFIL;uid=jbravof2;pwd=jbravof2;"

        Dim strSQL = "select COUNT (*) from INFORMATION_SCHEMA.tables" ' "SELECT COUNT (*) FROM OL.TOL_USER_DATA WHERE N_EMPL = '" & UCase(userID) & "' or X_EMPL_DOMAIN like '" & LCase(userID) & "'"

        db2da = New OdbcDataAdapter(strSQL, db2Con.ConnectionString)
        db2Con.Open()
        userTables = db2Con.GetSchema("Tables")
        '   columns = db2Con.GetSchema("Columns")
        db2Con.Close()
        Dim i As Integer
        'For i = 0 To userTables.Rows.Count - 1 Step i + 1
        '    '   ListBox1.Items.Add(userTables.Rows(i)(2).ToString())
        '    Button9.Width = i
        'Next

        '    TextBox3.Text = i

        '    DataTable tables = cn.GetSchema("Tables");
        'DataTable columns = cn.GetSchema("Columns");

        'foreach(DataRow row In columns.Rows)
        '{
        '    Console.WriteLine(Row["COLUMN_NAME"].ToString());
        '    Console.WriteLine(Row["TABLE_NAME"].ToString());
        '}
        'Console.Read();



        '   db2cmd = New OdbcCommand(strSQL, db2Con)
        '  Dim mainCount = CInt(db2cmd.ExecuteScalar)
        '   ListBox1.Items.Add(mainCount)
        ''   Dim var09 = SqlDataSource1. 
        'Dim constring As String = " Data Source=ODBC; Initial Catalog=CMSFIL;uid=JBRAVOF;pwd=JBRAVOF"
        'Dim NewConnection As SqlClient.SqlConnection = New SqlClient.SqlConnection(constring)
        'Dim query As String = "select * from INFORMATION_SCHEMA.tables"
        'Dim myCmd As SqlDataAdapter = New SqlDataAdapter(query, NewConnection)
        'Dim myData As New DataSet()
        'myCmd.Fill(myData)

        'For Each table As DataTable In myData.Tables
        '    For Each row As DataRow In table.Rows
        '        For Each col As DataColumn In table.Columns
        '            Response.Write(row(col).ToString())
        '            Response.Write("&lt;br&gt;")
        '        Next
        '    Next
        'Next
    End Sub

    Sub showSchema()

    End Sub

    Sub showTables()
        Dim NewConnection As SqlClient.SqlConnection = New SqlClient.SqlConnection("paste your connection string here,
   it will look something like:
   Data Source=data.source.com; Initial Catalog=DbaseName; User ID=someuser; Password=somepassword;")
        Dim query As String = "select * from INFORMATION_SCHEMA.tables"
        Dim myCmd As SqlDataAdapter = New SqlDataAdapter(query, NewConnection)
        Dim myData As New DataSet()
        myCmd.Fill(myData)

        Dim tableName As String

        For Each table As DataTable In myData.Tables
            For Each row As DataRow In table.Rows
                Response.Write("&lt;h2&gt;" & row(2).ToString() & "&lt;/h2&gt;")
                tableName = (row(2).ToString())
                'get table data
                Dim query2 As String = "select * from " & tableName
                Dim myCmd2 As SqlDataAdapter = New SqlDataAdapter(query2, NewConnection)
                Dim myData2 As New DataSet()
                myCmd2.Fill(myData2)
                For Each table2 As DataTable In myData2.Tables
                    'for each row2 as DataRow in table2.Rows
                    For Each col2 As DataColumn In table2.Columns
                        Response.Write((col2).ToString())
                        Response.Write("&lt;br&gt;")
                    Next
                    'next
                Next
            Next
        Next
    End Sub

    Protected Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        MultiView2.SetActiveView(View4)
    End Sub

    Protected Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click
        MultiView2.SetActiveView(View5)
    End Sub

    Protected Sub ListBox1_SelectedIndexChanged(sender As Object, e As EventArgs) 'Handles ListBox1.SelectedIndexChanged

    End Sub

    Private Sub ListBox1_TextChanged(sender As Object, e As EventArgs) 'Handles ListBox1.TextChanged

        '  TextBox4.Text = ListBox1.SelectedItem.Text




    End Sub

    Protected Sub Button8_Click(sender As Object, e As EventArgs) 'Handles Button8.Click

        Dim userTables As DataTable = Nothing
        Dim columns As DataTable = Nothing

        Dim db2Con As New OdbcConnection
        Dim db2da As New OdbcDataAdapter
        Dim db2cmd As New OdbcCommand

        db2Con.ConnectionString = "DSN=CMSFIL;uid=jbravof2;pwd=jbravof2;"


        Dim strSQL = "SELECT * FROM     INFORMATION_SCHEMA.columns WHERE  (TABLE_NAME = 'GLTMST')" '    "select COUNT (*) from INFORMATION_SCHEMA.tables" ' "SELECT COUNT (*) FROM OL.TOL_USER_DATA WHERE N_EMPL = '" & UCase(userID) & "' or X_EMPL_DOMAIN like '" & LCase(userID) & "'"

        db2da = New OdbcDataAdapter(strSQL, db2Con.ConnectionString)
        db2Con.Open()
        '    userTables = db2Con.GetSchema("Tables")
        columns = db2Con.GetSchema("Columns")

        Dim i As Integer
        'For i = 0 To userTables.Rows.Count - 1 Step i + 1
        '    ListBox1.Items.Add(userTables.Rows(i)(2).ToString())
        '    TextBox3.Text = i
        'Next

        For i = 0 To columns.Columns.Count - 1 Step i + 1
            ListBox2.Items.Add(columns.Rows(i)(3).ToString())


        Next
        db2Con.Close()
    End Sub

    Protected Sub Button9_Click(sender As Object, e As EventArgs) Handles Button9.Click
        '   ListBox1.SelectedIndex = DropDownList1.SelectedIndex

    End Sub

    Protected Sub DropDownList1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles DropDownList1.SelectedIndexChanged

    End Sub

    Protected Sub Button4_Click1(sender As Object, e As EventArgs) Handles Button4.Click, TextBox3.TextChanged

        Dim texto99 = ""

        For Each p In CheckBoxList1.Items

            If p.selected = True Then

                texto99 += p.ToString & ","
            Else


            End If

        Next
        texto99 = Left(texto99, Len(texto99) - 1)
        TextBox3.Text = "SELECT " & texto99 & " FROM " & DropDownList1.SelectedItem.Text

        '   TextBox3.Text += ListBox2.SelectedIndex.ToString


    End Sub

    Protected Sub Button10_Click(sender As Object, e As EventArgs) Handles Button10.Click
        SqlDataSource4.SelectCommand = TextBox3.Text
        GridView2.DataSourceID = "SqlDataSource4"
        GridView2.DataBind()
    End Sub

    Protected Sub DataList1_SelectedIndexChanged(sender As Object, e As EventArgs) ' Handles DataList1.SelectedIndexChanged
        '   TextBox3.Text = DataList1.SelectedItem.ToString
    End Sub

    Protected Sub DropDownList2_SelectedIndexChanged(sender As Object, e As EventArgs) Handles DropDownList2.SelectedIndexChanged
        TextBox6.Text = "
SELECT
S104E7FP.CMSFIL." & DropDownList2.SelectedItem.Text & ".*,
COMPANYNO AS Expr1, 
DIVISIONNO AS Expr2 
FROM 
S104E7FP.CMSFIL." & DropDownList2.SelectedItem.Text & "
WHERE (COMPANYNO = ?)
AND (DIVISIONNO = ?)
"
        SqlDataSource5.SelectCommand = TextBox6.Text

        GridView3.DataSourceID = "SqlDataSource5"

        GridView3.DataBind()
    End Sub

    Protected Sub RadioButtonList1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles RadioButtonList1.SelectedIndexChanged
        TextBox6.Text = "
SELECT *
 FROM " & RadioButtonList1.SelectedItem.Text &
        "  WHERE (COMPANYNO = ?) AND (DIVISIONNO = ?)"

        SqlDataSource5.SelectCommand = TextBox6.Text

        GridView3.DataSourceID = "SqlDataSource5"

        GridView3.DataBind()
        GridView3.Caption = "Master Table / " & RadioButtonList1.SelectedItem.Text
    End Sub

    Protected Sub Button11_Click(sender As Object, e As EventArgs) Handles Button11.Click
        Dim texto99 = ""

        For Each p In CheckBoxList2.Items

            If p.selected = True Then

                texto99 += p.ToString & ","
            Else


            End If

        Next
        texto99 = Left(texto99, Len(texto99) - 1)
        TextBox6.Text = "SELECT " & texto99 & " FROM " & RadioButtonList1.SelectedItem.Text & " WHERE (COMPANYNO = ?)  
        And (DIVISIONNO = ?)"

        '   TextBox3.Text += ListBox2.SelectedIndex.ToString
        SqlDataSource5.SelectCommand = TextBox6.Text ' "SELECT " & texto99 & " FROM " & RadioButtonList1.SelectedItem.Text ' & "WHERE (COMPANYNO = " & TextBox4.Text & ")
        'AND (DIVISIONNO = " & TextBox5.Text & ")" 'TextBox6.Text

        GridView3.DataSourceID = "SqlDataSource5"

        GridView3.DataBind()
    End Sub
End Class