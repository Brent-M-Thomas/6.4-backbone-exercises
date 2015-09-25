var AppTemplates = {};

AppTemplates['app'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
AppTemplates['blog'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div>\n    <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p class=\"author\">"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"content\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n\n<a href=\"#"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "/edit\"><button class=\"edit\">Edit Post</button></a>\n\n</div>\n";
},"useData":true});
AppTemplates['create'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<form class=\"create\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" name=\"title\" class=\"title\">\n    <label for=\"content\">Content</label>\n    <input name=\"content\" class=\"content\">\n    <label for=\"author\">Author</label>\n    <input name=\"author\" class=\"author\">\n\n    <button>Submit</button>\n</form>\n";
},"useData":true});
AppTemplates['edit'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form class=\"create\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" name=\"title\" class=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <label for=\"content\">Content</label>\n    <input name=\"content\" class=\"content\" value=\""
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\">\n    <label for=\"author\">Author</label>\n    <input name=\"author\" class=\"author\" value=\""
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "\">\n\n    <button class=\"save\">Save Changes</button>\n    <button class=\"destroy\">Delete</button>\n</form>\n";
},"useData":true});
AppTemplates['listview'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "            <li>\n                <a href=\"#"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1._id : stack1), depth0))
    + "\">\n                    <p>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
    + "</p>\n                    <p>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.author : stack1), depth0))
    + "</p>\n                </a>\n            </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        <li><a href=\"/#new\"><button class=\"new-blog\">+ New Bookmark</button></a></li>\n    </ul>\n";
},"useData":true,"useBlockParams":true});
var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    content: '',
    author: '',
  },
});

var BlogList = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/bt-blogcms',
});

var CreateView = Backbone.View.extend({
  template: AppTemplates.create,

  initialize: function() {
    this.listenTo(this.collection, 'add change sync', this.render);
    this.render();
  },

  events: {
    'submit form': 'saveBlog',
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    this.$el.find('.create').slideDown();
    return this;
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
    this.listenTo(this.collection, 'add sync change', this.render);
    this.collection.fetch();
    this.render();
  },

  render: function() {
    var _this = this;
    var html = _this.template(_this.collection.toJSON());
    _this.$el.html(html);
    return this;
  },
});

var BlogView = Backbone.View.extend({
  template: AppTemplates.blog,
  el: '#read',

  initialize: function() {
    this.listenTo(this.collection, 'add sync change', this.render);
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
    this.$el.find('.create').slideDown();
    return this;

  },

  saveChanges: function(ev) {
    ev.preventDefault();

    var title = this.$el.find('.title').val();
    var content = this.$el.find('.content').val();
    var author = this.$el.find('.author').val();

    this.model.save({title: title, content: content, author: author});
  },

  destroyBlog: function(ev) {
    ev.preventDefault();
    this.model.destroy().then(function() {
      router.navigate('', {trigger: true});
    });
  },
});


var Router = Backbone.Router.extend({

  initialize: function() {

    // var blog = new Blog({collection: blogList});
    this.collection = new BlogList();
    // var blogList = new BlogList();
    var listView = new BlogListView({collection: this.collection});
  },

  routes: {

    'new': 'createView',
    ':id': 'read',
    ':id/edit': 'edit',
  },

  createView: function() {
    var createView = new CreateView({collection: this.collection});
    $('#read').html(createView.render().el);

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

var router = new Router();
Backbone.history.start();

// var blogView = new BlogView({model: blog});
//# sourceMappingURL=app.map