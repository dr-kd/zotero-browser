<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Zotero ssj/jqote template demo</title>
		<link rel="stylesheet" type="text/css" media="all" href="static/css/elastic.css" />
		<link rel="stylesheet" type="text/css" media="all" href="static/css/local.css" />
		<script src="static/js/jquery.js" type="text/javascript" language="javascript" charset="utf-8"></script>
		<script src="static/css/elastic.js" type="text/javascript" language="javascript" charset="utf-8"></script>
        <script src="static/js/jquery-1.4.2.min.js" type="text/javascript"></script>
        <script src="static/js/jquery.jqote2.min.js" type="text/javascript"></script>
    </head>
    <body>

<?sjs
var z = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;

var render_collection = function(coll) {
    if (!coll) { 
        coll = null; 
    }
    var collections = z.getCollections(coll);
    document.writeln("<ul>");
    for (c in collections) {
        document.writeln("<li>" + collections[c].name + "</li>");
        if (collections[c].hasChildCollections) {
	   var childCol = render_collection(collections[c]._id);
        }
    }   
    document.writeln("</ul>");
}
render_collection();
?>
</ul>
</body>
</html>