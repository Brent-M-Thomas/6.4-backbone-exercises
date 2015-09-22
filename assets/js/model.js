var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    content: '',
    author: '',
  },
});

var BlogList = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/bt-blogcms',
});
