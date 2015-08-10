var AppView = Backbone.View.extend({
  template: AppTemplates.form,

  el: '#target',

  initialize: function() {
    this.listenTo(this.collection, 'add change sync', this.render);
    this.render();
  },

  events: {
    'submit form': 'newForm'
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  newForm: function() {
    var firstName = this.$('.first-name').val();
    var lastName = this.$('.last-name').val();
    var address = this.$('.address').val();
    var phoneNumber = this.$('.phone-number').val();

    this.model.save({firstName: firstName, lastName: lastName, address: address, phoneNumber: phoneNumber});

    this.$('.first-name').val('');
    this.$('.last-name').val('');
    this.$('.address').val('');
    this.$('.phone-number').val('');

    this.model = new FormDataModel();

  }

});
