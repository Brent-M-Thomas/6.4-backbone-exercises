var BlogPost = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    email: '',
    comment: '',
  },
  urlRoot:'http://tiny-lr.herokuapp.com/collections/bt-comments',
});

var BlogList = Backbone.Collection.extend({
  model: BlogPost,
  url:'http://tiny-lr.herokuapp.com/collections/bt-comments',
});
