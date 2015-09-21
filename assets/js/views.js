var PostView = Backbone.View.extend({
  template: AppTemplates.post,

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var data = this.model || {};
    if (this.model) {
      data = this.model.toJSON();
    }

    var html = this.template(data);

    this.$el.html(html);
    return this;
  },

});

var ListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',
  template: AppTemplates.list,

  initialize: function() {
    this.listenTo(this.collection, 'change sync', this.render);

    this.render();
    this.collection.fetch();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  },
});
