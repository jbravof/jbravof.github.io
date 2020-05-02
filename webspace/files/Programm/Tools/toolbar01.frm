VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} UserForm1 
   Caption         =   "UserForm1"
   ClientHeight    =   2460
   ClientLeft      =   36
   ClientTop       =   360
   ClientWidth     =   3768
   OleObjectBlob   =   "toolbar01.frx":0000
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
With ActiveWindow

.DisplayGridlines = Not .DisplayGridlines

End With
End Sub

Private Sub Toolbar1_ButtonClick(ByVal Button As MSComctlLib.Button)

End Sub

Private Sub Toolbar1_ButtonMenuClick(ByVal ButtonMenu As MSComctlLib.ButtonMenu)


Select Case ButtonMenu.Text
Case Is = "Gridlines"
'MsgBox ActiveWindow.Caption
ActiveWindow.DisplayGridlines = Not ActiveWindow.DisplayGridlines
Case Is = "Headers"
'MsgBox ButtonMenu.Text
ActiveWindow.DisplayHeadings = Not ActiveWindow.DisplayHeadings

Case Is = "Tabs"

ActiveWindow.DisplayWorkbookTabs = Not ActiveWindow.DisplayWorkbookTabs

Case Is = "Scroll"

ActiveWindow.DisplayHorizontalScrollBar = Not ActiveWindow.DisplayHorizontalScrollBar
ActiveWindow.DisplayVerticalScrollBar = ActiveWindow.DisplayHorizontalScrollBar
End Select
End Sub

Private Sub UserForm_Activate()
var009 = ActiveWindow.Caption

Me.Top = ActiveWindow.Top + 132
Me.Left = ActiveWindow.Left - 2
Me.Width = ActiveWindow.Width + 2
Me.Height = 9
End Sub

Private Sub UserForm_Click()

End Sub

Private Sub UserForm_DblClick(ByVal Cancel As MSForms.ReturnBoolean)
Me.Hide
End Sub

Private Sub UserForm_Initialize()
 Call RemoveTitleBar(Me)
 Me.Toolbar1.ImageList = Me.ImageList1
 
 Me.Toolbar1.Buttons(1).Image = 1
End Sub
