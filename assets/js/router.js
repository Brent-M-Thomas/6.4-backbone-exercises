var DataRouter = Backbone.Router.extend({

  initialize: function() {
    this.collection = new BlogList();
    this.listView = new ListView({
      collection: this.collection,
    });
    this.collection.fetch();

    $('#list-target').html(this.listView.el);
  },

  routes: {
    ':id': 'show',
  },

  show: function(id) {
    var _this = this;
    var tempPost = function() {
      var post = _this.collection.get(id);
      _this.postView = new PostView({ model: post});
      $('#post-target').html(_this.postView.render().el);
    };

    tempPost();
    this.listenTo(this.collection, 'sync', tempPost);
  },

});
