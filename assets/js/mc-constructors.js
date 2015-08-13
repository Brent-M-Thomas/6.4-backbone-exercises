var BlogPost = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: '',
  },
  urlRoot:'http://tiny-lr.herokuapp.com/collections/blog',
});

var BlogList = Backbone.Collection.extend({
  model: BlogPost,
  url:'http://tiny-lr.herokuapp.com/collections/blog',
});
