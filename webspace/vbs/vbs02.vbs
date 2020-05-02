msgbox(999888888)
Dim fso,ini
Set fso = CreateObject("Scripting.FileSystemObject")
Const vbSpace = " "
ini = fso.GetParentFolderName(WScript.ScriptFullName) ' & "\" _
	'		& ToHex(lang) & "\" & fso.GetBaseName(WScript.ScriptName) &  ".ini"
msgbox(ini)