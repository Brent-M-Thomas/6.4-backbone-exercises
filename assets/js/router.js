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

    // var _this = this;
    // var showDetail = function() {
      // Maybe not loaded yet
      var model = this.collection.get(id);

      console.log(model);

    // };

    show();
    this.listenTo(this.collection, 'sync', showDetail);
  },
});
