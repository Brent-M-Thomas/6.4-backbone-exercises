var Router = Backbone.Router.extend({

  initialize: function() {

    var blogList = new BlogList();
    this.collection = new BlogList();
    var blog = new Blog({collection: blogList});
    var listView = new BlogListView({collection: blogList});
  },

  routes: {

    'new': 'createView',
    ':id': 'read',
    ':id/edit': 'edit',
  },

  createView: function() {
    var createView = new CreateView({collection: blogList});
    $('#read').html(this.createView.render().el);

  },

  read: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var view = new BlogView({model: _this.collection.get(id)});
    });
  },

  edit: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var model = _this.collection.get(id);
      var edit = new EditView({model: model});

      $('#read').html(edit.render().el);
    });
  },
});
