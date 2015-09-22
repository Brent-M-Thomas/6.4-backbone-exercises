var bookmarkList = new BookmarkList();
var bookmark = new Bookmark({collection: bookmarkList});
var formview = new FormView({collection: bookmarkList});

// var listView = new BookmarkListView({collection: bookmarkList});
var tagView = new TagView({collection: bookmarkList});
var router = new Router({collection: bookmarkList});
Backbone.history.start();
