var z = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;
var tags = z.Tags.getAll();
document.writeln('<ul>');
for (t in tags) {
    document.writeln('<li><input type="checkbox" name="tags|' + tags[t].name + '" value="' + tags[t].id + '">&nbsp;' + 
'<a href="search.sjs?tags|' + encodeURI(tags[t].name) + '=' + tags[t].id + '">' 
+ tags[t].name + '</a></input></li>');
}
document.writeln('</ul>');