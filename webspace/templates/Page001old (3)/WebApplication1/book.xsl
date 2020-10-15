

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>

  <xsl:template match="/">
    <html>
      <body>
        <xsl:for-each select="visitor">
          <xsl:value-of select="title"/>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>