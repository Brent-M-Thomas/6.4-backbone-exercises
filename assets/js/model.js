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


