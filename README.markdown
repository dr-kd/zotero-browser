Zotero Browser
==============

This is a web based browser for the Zotero bibliographic software
(http://zotero.org). 

The idea is basically to provide an easy to hack environment for
producing custom reports and other useful things for people who want
to use Zotero's excellent data models for building other useful
tools.  While this is possible by creating a new Firefox extension to
interact with Zotero directly, in a lot of situations this is just far too
much trouble.  

Installation
============

Fortunately the "Plain old Webserver" Firefox extension gives us full
access to Firefox's internals including the Zotero API.  You will need
to install this into the same Firefox profile as your Zotero
library. It's available from here:
https://addons.mozilla.org/en-US/firefox/addon/3002.

Once POW is up and running, you can just put the files in this
distribution in a subdirectory in POW's htdocs directory, visit
relevant page (e.g. http://localhost:6670/zotero-browse/) and you're
good to go.

Roadmap
=======

At the moment, all the included script does is to list the collections in your
library.  This will be followed by a easy to read report based on the
jqote2 client side javascript template library
(http://plugins.jquery.com/project/jqote2) after which we can start
doing more interesting stuff (tagclouds of the fulltext from each
collection might be interesting for example).

Source and contributions
========================

This is open source software, and your contribution is encouraged.
You can fork the git repository at
http://github.com/singingfish/zotero-browser

Bear in mind that the Zotero API documentation is also rather sparse,
and working out how to work with Zotero requires significant
javascript skills and quite a bit of source diving at this stage, so
if you work on this, please consider also contributing to the API
documentation at http://www.zotero.org/support/dev/api_user_docs .


Warning
=======

Keep backups of your Zotero library - messing around with the Zotero
API could cause you to inadvertently modify or destroy your collection!

Author
======

Kieren Diment <diment@gmail.com>

Licence
=======

This software can be distributed under the same terms as Zotero.
