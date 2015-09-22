var FormView = Backbone.View.extend({
  template: AppTemplates.linkform,

  el: '#target',

  initialize: function() {
    this.ListenTo(this.collection, 'add', this.render);
    debugger;
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

var BookmarkView = Backbone.View.extend({


});
