var z = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;

var render_collection = function(coll) {
    if (!coll) { 
        coll = null; 
    }
    var collections = z.getCollections(coll);
    document.writeln('<ul>');
    for (c in collections) {
        document.writeln('<li>' + '<input type="checkbox" name="collection|' +encodeURI(collections[c].name) + '" value="' + collections[c].id + '"><a href="search.sjs?collection|' + encodeURI(collections[c].name) + '=' + collections[c].id + '">' + collections[c].name  + '</a></input></li>');
        if (collections[c].hasChildCollections) {
	   var childCol = render_collection(collections[c].id);
        }
    }   
    document.writeln("</ul>");
}
render_collection();
