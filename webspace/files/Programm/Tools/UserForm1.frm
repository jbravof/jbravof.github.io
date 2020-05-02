VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} UserForm1 
   Caption         =   "UserForm1"
   ClientHeight    =   7968
   ClientLeft      =   36
   ClientTop       =   360
   ClientWidth     =   3768
   OleObjectBlob   =   "UserForm1.frx":0000
   ShowModal       =   0   'False
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "UserForm1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

'Option Explicit
Private Declare Function GetSystemMetrics32 Lib "User32" Alias "GetSystemMetrics" (ByVal nIndex As Long) As Long

#If VBA7 Then
    Private Declare PtrSafe Function FindWindow Lib "User32" _
    Alias "FindWindowA" ( _
    ByVal lpClassName As String, _
    ByVal lpWindowName As String) As Long

    Private Declare PtrSafe Function GetWindowLong Lib "User32" _
    Alias "GetWindowLongA" ( _
    ByVal hwnd As Long, _
    ByVal nIndex As Long) As Long

    Private Declare PtrSafe Function SetWindowLong Lib "User32" _
    Alias "SetWindowLongA" (ByVal hwnd As Long, _
    ByVal nIndex As Long, _
    ByVal dwNewLong As Long) As Long

    Private Declare PtrSafe Function DrawMenuBar Lib "User32" ( _
    ByVal hwnd As Long) As Long
#Else
    Private Declare Function FindWindow Lib "User32" _
    Alias "FindWindowA" ( _
    ByVal lpClassName As String, _
    ByVal lpWindowName As String) As Long

    Private Declare Function GetWindowLong Lib "User32" _
    Alias "GetWindowLongA" ( _
    ByVal hwnd As Long, _
    ByVal nIndex As Long) As Long

    Private Declare Function SetWindowLong Lib "User32" _
    Alias "SetWindowLongA" (ByVal hwnd As Long, _
    ByVal nIndex As Long, _
    ByVal dwNewLong As Long) As Long

    Private Declare Function DrawMenuBar Lib "User32" ( _
    ByVal hwnd As Long) As Long
#End If

Sub RemoveTitleBar(frm As Object)
    Dim lStyle          As Long
    Dim hMenu           As Long
    Dim mhWndForm       As Long

    If Val(Application.Version) < 9 Then
        mhWndForm = FindWindow("ThunderXFrame", frm.Caption) 'for Office 97 version
    Else
        mhWndForm = FindWindow("ThunderDFrame", frm.Caption) 'for office 2000 or above
    End If
    lStyle = GetWindowLong(mhWndForm, -16)
    lStyle = lStyle And Not &HC00000
    SetWindowLong mhWndForm, -16, lStyle
    DrawMenuBar mhWndForm
End Sub

Private Sub CommandButton1_Click()
Application.Visible = True
Unload Me
End Sub

Private Sub CommandButton2_Click()
 Me.TreeView1.Nodes.Clear
'MsgBox (Range("a1").CurrentRegion.Rows.Count)

For Each c In Range("a1").CurrentRegion.Columns(1).Cells

Cells(c.Row + 1, c.Column).Select

If Selection.Value = c.Value Then

GoTo tres

Else
Me.TreeView1.Nodes.Add Key:=c.Value, text:=c.Value, Image:=0
End If
tres:
Next c

For i = 2 To Range("a1").CurrentRegion.Columns.Count

For Each c In Range("a1").CurrentRegion.Columns(i).Cells

'Cells(c.Row + 1, c.Column).Select
c.Select
If Selection.Value = "" Then

'GoTo tres

Else
 valor001 = Cells(ActiveCell.Row, ActiveCell.Column - 1)
 
 valor002 = c.Value ' Cells(ActiveCell.Row, 2)
 Me.TreeView1.Nodes.Add Relative:=valor001, relationship:=tvwChild, Key:=valor002, text:=valor002, Image:=0

End If
tres3:
Next c

Next i
End Sub

Private Sub CommandButton3_Click()
Application.Visible = Not Application.Visible
'Application.Width = screen.Width - Me.Width
'MsgBox (GetSystemMetrics32(0))
On Error Resume Next
Application.Height = GetSystemMetrics32(1)
 Application.Height = Application.Height - 30
 Application.Width = GetSystemMetrics32(0)
 Application.Width = Application.Width - UserForm1.Width
 Application.Left = UserForm1.Width
 Application.Top = 0
End Sub

Private Sub CommandButton4_Click()
 Workbooks("PERSONAL.XLSB").CustomViews("extra01").Show
End Sub

Private Sub ListBox1_Click()

On Error Resume Next
Application.Visible = True
Windows(Me.ListBox1.Value).Activate
End Sub

Private Sub ListBox1_DblClick(ByVal Cancel As MSForms.ReturnBoolean)
ListBox1.Clear
For Each w In Application.Windows

If w.Visible = True Then Me.ListBox1.AddItem (w.Caption)

Next
End Sub

Private Sub MultiPage1_Change()

End Sub

Private Sub TreeView1_Click()
    UserForm1.Label1 = TreeView1.SelectedItem
End Sub

Private Sub UserForm_Activate()
Application.Visible = False



End Sub

Private Sub UserForm_Click()
   '
End Sub
Private Sub UserForm_Initialize()
Me.Toolbar1.ImageList = Me.ImageList1
With Me.Toolbar1

.Buttons(1).Image = 1
.Buttons(2).Image = 2
.Buttons(3).Image = 3


End With
For Each w In Application.Workbooks

Me.ListBox1.AddItem (w.Name)

Next
    Call RemoveTitleBar(Me)

    With Me
        .StartUpPosition = 0
        '.Top = UserForm1.Top + (UserForm1.Height - UserForm1.InsideHeight) + UserForm1.Label1.Height + UserForm1.Label1.Top
       ' .Left = UserForm1.Left + (UserForm1.Width - UserForm1.InsideWidth) + UserForm1.Label1.Left
        .Height = Application.Height
    End With

    TreeView1.Nodes.Add Key:="Item1", text:="Parent 1"
    TreeView1.Nodes.Add Key:="Item2", text:="Parent 2"
    TreeView1.Nodes.Add Key:="Item3", text:="Parent 3"

    TreeView1.Nodes.Add "Item1", tvwChild, "one", "Item 1, Child node 1"
    TreeView1.Nodes.Add "Item1", tvwChild, "two", "Item 1, Child node 2"

    TreeView1.Nodes.Add "Item2", tvwChild, "three", "Item 2, Child node 1"
    TreeView1.Nodes.Add "Item2", tvwChild, "four", "Item 2, Child node 2"

    TreeView1.Nodes.Add "Item3", tvwChild, "five", "Item 3, Child node 1"
    TreeView1.Nodes.Add "Item3", tvwChild, "six", "Item 3, Child node 2"
End Sub

Private Sub UserForm_QueryClose(Cancel As Integer, CloseMode As Integer)
Application.Visible = True
End Sub
