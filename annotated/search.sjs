<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Zotero Browser</title>
		<link rel="stylesheet" type="text/css" media="all" href="../static/css/elastic.css" />

		<link rel="stylesheet" type="text/css" media="all" href="../static/css/local.css" />
		<script src="../static/js/jquery.js" type="text/javascript" language="javascript" charset="utf-8"></script>
		<script src="../static/css/elastic.js" type="text/javascript" language="javascript" charset="utf-8"></script>
        <script src="../static/js/jquery-1.4.2.min.js" type="text/javascript"></script>
        <script src="../static/js/jquery.jqote2.min.js" type="text/javascript"></script>
    </head>
    <body>

<h1>Annotated Bibliography</h1>

<ul id="annotated">

</ul>

<script type="text/html" id="template">
    <![CDATA[
<li><%= unescape(this.citation) %> <a href="zotero://select/item/<%= this.id %>"> <img src="../static/images/zotero-z-16px.png" alt="link to zotero item"></a></li> 
<ul id="info"> 
<% if ( this.abstract ) { %>
  <li><h3>Abstract</h3><%= unescape(this.abstract) %> </li>
<% } %>
<% if ( this.notes ) { %>
  <% for ( key in this.notes) { %>
            <li> <h4>Notes</h4> <%= unescape(this.notes[key].note); %>
              <% if (this.notes[key].related) {  %>
    <ul>
              <h4>Related Items</h4>
    <% for (r in this.related) { %>
                                   <li><%= unescape(this.related[r].related) ; %> <a href="zotero://select/item/<%= this.related[r].id %>"> <img src="../static/images/zotero-z-16px.png" alt="link to zotero item"></a> </li>
<% } %>
</ul>
  </li>
              <% } %>
            </li>
            
            <% ; } %>
<% } %>
<% if ( this.related.length > 0 ) { %>
    <li>
    <h4>Related Items</h4>
    <ul>
    <% for (r in this.related) { %>
                                   <li><%= unescape(this.related[r].related) ; %> <a href="zotero://select/item/<%= this.related[r].id %>"> <img src="../static/images/zotero-z-16px.png" alt="link to zotero item"></a> </li>
<% } %>
</ul>
  </li>
<% } %>
</ul>

    ]]>
</script>

<script type="text/javascript">
     var citation_data = <?sjs pow_include('lib/get_results.js'); ?> ; 
    // let's do some jQote magic
    $('#annotated').jqoteapp('#template', citation_data);
</script>

    </body>
</html>
