var AppView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    this.listenTo(this.collection, 'add change sync', this.render);
    this.render();
  },

  events: {
    'submit form': 'newForm'
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    debugger;
    return this;
  },

  newForm: function() {
    var title = this.$el.find('input').val();
    this.collection.create({title: title});
    this.$el.find('input').val('');
  }

});
