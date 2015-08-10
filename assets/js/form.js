var FormDataModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  },
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/bt-form',

});

var FormDataColl = Backbone.Collection.extend({
  model: FormDataModel,
});
