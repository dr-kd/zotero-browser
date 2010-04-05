var z = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;
var report = new Array;

var tagre = /tags\|(.*)$/;
var collectionre = /collection\|(.*)$/;
var tagSearch = new Object;
var collectionSearch = new Object;

for (x in pow_server.GET) {
    if (y = x.match(tagre) ) {
	tagSearch[y[1]] = pow_server.GET[x];
    }
    else if (y = x.match(collectionre) ) {
	collectionSearch[y[1]] = pow_server.GET[x];
    }
}

// at this point the query string has been transformed into two
// arrays: tagSearch[tagname]=tagID and
// collectionSearch[collectionname]=collectionID
var json = Components.classes["@mozilla.org/dom/json;1"].createInstance(Components.interfaces.nsIJSON);

var search = new z.Search();
var items;
search.addCondition('joinMode', 'any');


for (c in collectionSearch) {
    search.addCondition('collectionID', 'is', collectionSearch[c].id);
}

for (t in tagSearch) {
    search.addCondition('tag', 'is', t);
}
	
	
var results = search.search()
var items = z.Items.get(results);

var report = new Array;

for (var i in items) {
    item = items[i];
    var this_item = new Object
    var qc = z.QuickCopy;
    var cite = qc.getContentFromItems(new Array(item),
        z.Prefs.get("export.quickCopy.setting"));
    this_item.citation = cite;
    var abstract = item.getField('abstractNote');
    this_item.abstract = abstract;
    this_item.notes = new Array;
    var notes = item.getNotes();
    if (notes) {
	for (var j=0;j<notes.length;j++) {
	    var thisnote = new Object;
            thisnote.note = z.Items.get(notes[j]);
            var related = thisnote.note._getRelatedItems(false);
	    if (related) {
		var rel_note = qc.getContentFromItems(related,
                    z.Prefs.get("export.quickCopy.setting"));
		thisnote.rel_note;
            }
	}
	this_item.notes.push(thisnote);
    }
    var related_cite=item._getRelatedItems(false);
    var rel_cite = qc.getContentFromItems(related_cite,
        z.Prefs.get("export.quickCopy.setting"));
    this_item.related = rel_cite;
    report.push(this_item);
}
document.writeln(json.encode(report));
