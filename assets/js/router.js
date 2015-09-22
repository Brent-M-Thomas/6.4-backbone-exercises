var Router = Backbone.Router.extend({

  initialize: function() {
    this.collection = new BlogList();
  },

  routes: {
    ':id': 'read',
    ':id/edit': 'edit',
  },

  read: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var view = new BlogView({model: _this.collection.get(id)});
      debugger;

      $('#read').html(view.render().el);
    });
  },

  edit: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var model = _this.collection.get(id);
      var edit = new EditView({model: model});

      $('#create').html(edit.render().el);
    });
  },
});
