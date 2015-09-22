var FormView = Backbone.View.extend({
  template: AppTemplates.linkform,

  el: '#target',

  initialize: function() {
    this.listenTo(this.collection, 'add change sync', this.render);
    this.render();
  },

  events: {
    'click .add-link': 'addLink',
    'submit form': 'saveLink',
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  addLink: function() {
    this.$el.find('.new-link').slideDown();

  },

  saveLink: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('input#title').val();
    var url = this.$el.find('input#url').val();
    var tag = this.$el.find('input#tag').val();
    this.collection.create({title: title, url: url, tag: tag});
  },
});

var BookmarkListView = Backbone.View.extend({
  template: AppTemplates.listview,

  el: '#links',

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  render: function() {
    var _this = this;

    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.toJSON());
      _this.$el.html(html);
    });

    return this;
  },
});
