// Code stolen from http://gist.github.com/379397
// get Zotero, ZoteroPane
var Zotero = chromeWindow.Zotero;
var ZoteroPane = chromeWindow.ZoteroPane;

//get first selected item
var selection = ZoteroPane.getSelectedItems();
var selected_item = selection[0];

//output(selected_item);
//output(Zotero);
//output(ZoteroPane);


// proced if selected item is neither a collection nor a note
if ( !selected_item.isCollection() & !selected_item.isNote()) {

// define item and attachment depeding on whether attachment or item is selected
// doesn't really work because it's creating an error when an attachment is selected
if (selected_item.isAttachment()) {
item=Zotero.Items.get(selected_item._sourceItem);
item_att=selected_item;

}
if (selected_item.isRegularItem()) {
item=selected_item;
att_ids=item.getAttachments(false);
//if (att_ids.length>1) exit();
item_att=Zotero.Items.get(att_ids[0]);
}

// create citation key
cite_key=createCitation(item);

// get quotations from existing notes
existing_highlights=getHighlightIDs(item);

// launch application to extract highlighings from pdf
startApplication(app_launch,item_att.getFile().path);

// open text file and save notes in array
notes=processTextfile();

// process notes
notes=processNote(notes, cite_key);

// output notes - this is just to check
output(notes);

// check whether note alreadt exists and only add if it doesn't
for (var i=0; i < notes.length; i++) {
if(notes[i].length>2) {
      
var note_id=notes[i].slice(notes[i].indexOf(id));
var note_id=note_id.slice(0,note_id.indexOf("\]"));

var create_note=1;
for (var k=0; k < existing_highlights.length; k++) {
if (existing_highlights[k]==note_id) var create_note=0;
}
