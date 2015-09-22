var Bookmark = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    url: '',
    tag: '',
  },
});

var BookmarkList = Backbone.Collection.extend({
  model: Bookmark,
  url: 'http://tiny-lr.herokuapp.com/collections/bt-bookmarks',
});

var bookmark = new Bookmark();
var bookmarkList = new BookmarkList();
Backbone.history.start();

