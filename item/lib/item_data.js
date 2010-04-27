// Code stolen from http://gist.github.com/379397
// get Zotero, ZoteroPane
var Zotero = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;

var ZoteroPane = Components.classes["@mozilla.org/appshell/window-mediator;1"]
    .getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser").ZoteroPane;
var json = Components.classes["@mozilla.org/dom/json;1"].createInstance(Components.interfaces.nsIJSON);

var selected_items = ZoteroPane.getSelectedItems();
for (var item in selected_items) {
    var qc = Zotero.QuickCopy;
    var cite = qc.getContentFromItems(new Array(selected_items[item]),
        Zotero.Prefs.get("export.quickCopy.setting"));
        //  this_item.citation = escape(cite.html);
    document.writeln("<h2>" + cite.html + "</h2>");
    document.writeln("<ul>");
    // proced if selected item is neither a collection nor a note
    if ( ! selected_items[item].isCollection() & ! selected_items[item].isNote()) {
        if (selected_items[item].isAttachment()) {
            // find out about attachment
        }
        if (selected_items[item].isRegularItem()) {
            var attachments = selected_items[item].getAttachments(false);
            for (a in attachments) {
                var a_item = Zotero.Items.get(attachments[a]);
                if (a_item.attachmentMIMEType == 'application/pdf' || a_item.attachmentMIMEType == 'text/html') {
                    var file = Zotero.Attachments.getStorageDirectory(attachments[a]);
                    var path = new String(a_item.attachmentPath);
                    document.writeln("<li>" + a_item.attachmentText  + "</li>");
                }
            }
        }
        document.writeln("</ul>");
    }
}


