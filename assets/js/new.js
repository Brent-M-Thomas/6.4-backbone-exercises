var blogList = new BlogList();
var blog = new Blog({collection: blogList});
var createView = new CreateView({collection: blogList});
var listView = new BlogListView({collection: blogList});
var router = new Router();

// var blogView = new BlogView({model: blog});
