Imports System.Xml
Imports System.Xml.XPath
Imports System.Xml.Xsl
Imports System.IO

Public Class WebForm2
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        'Dim document As XmlDocument     ''# Xml document root
        'Dim navigator As XPathNavigator ''# navigate document
        'Dim transformer As System.Xml.Xsl.XslCompiledTransform ' XslTransform ''# transform document
        'Dim output As StringWriter

        'document = New XmlDocument()
        ''    document.Load("firelist.xml")
        'document.Load("C:\Users\jbravof\Documents\Visual Studio 2013\Samples\VB.NET Working with 2\WebApplication1\book.xml")

        ' ''# create navigator
        'navigator = document.CreateNavigator

        ' ''# load style sheet
        'transformer = New System.Xml.Xsl.XslCompiledTransform
        ''      transformer.Load("firelist.xslt")

        'transformer.Load("C:\Users\jbravof\Documents\Visual Studio 2013\Samples\VB.NET Working with 2\WebApplication1\book.xsl")
        ' ''# transform XML data
        'output = New StringWriter()
        'transformer.Transform(navigator, Nothing, output)

        ' ''# display transformation in text box
        'Console.WriteLine(output.ToString)
        ' ''# write transformation result to disk
        'Dim stream As FileStream = New FileStream("C:\Users\jbravof\Documents\Visual Studio 2013\Samples\VB.NET Working with 2\WebApplication1\firelist.html", FileMode.Create)

        'Dim writer As StreamWriter = New StreamWriter(stream)
        'writer.Write(output.ToString)

        ' ''# close streams
        'writer.Close()
        'output.Close()
    End Sub

    Protected Sub GridView1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles GridView1.SelectedIndexChanged

    End Sub
End Class