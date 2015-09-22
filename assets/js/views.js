var CreateView = Backbone.View.extend({
  template: AppTemplates.create,

  el: '#create',

  initialize: function() {
    this.listenTo(this.collection, 'add change sync', this.render);
    this.render();
  },

  events: {
    'click .new-blog': 'create',
    'submit form': 'saveBlog',
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  create: function() {
    this.$el.find('.create').slideDown();

  },

  saveBlog: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('input.title').val();
    var content = this.$el.find('input.content').val();
    var author = this.$el.find('input.author').val();
    this.collection.create({title: title, content: content, author: author});
  },
});

var BlogListView = Backbone.View.extend({
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

var BlogView = Backbone.View.extend({
  template: AppTemplates.blog,
  el: '#read',

  initialize: function() {
    this.listenTo(this.collection, 'add sync change', this.render);
    debugger;
    this.render();
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
});

var EditView = Backbone.View.extend({
  template: AppTemplates.edit,

  initialize: function() {
    this.render();
  },

  events: {
    'click .save': 'saveChanges',
    'click .destroy': 'destroyBlog',
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;

  },

  saveChanges: function(ev) {
    ev.preventDefault();

    var title = this.$el.find('.title').val();
    var content = this.$el.find('.content').val();
    var author = this.$el.find('.author').val();

    this.model.save({title: title, content: content, author: author});
  },

  destroyBlog: function() {
    ev.preventDefault();
    this.model.destroy().then(function() {
      router.navigate('', {trigger: true});
    });
  },
});

