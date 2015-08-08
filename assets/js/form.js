var FormDataModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: ''
  }
});

var FormDataColl = Backbone.Collection.extend({
  model: FormDataModel,
  url: 'http://tiny-lr.herokuapp.com/collections/bt-form'
});
