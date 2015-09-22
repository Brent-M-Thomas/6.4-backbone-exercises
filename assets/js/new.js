var bookmarkList = new BookmarkList();
var bookmark = new Bookmark({collection: bookmarkList});
var formview = new FormView({collection: bookmarkList});
var listView = new BookmarkListView({collection: bookmarkList});
Backbone.history.start();
