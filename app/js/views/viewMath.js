//Backbone Mean Median Mode View
var Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagname: 'div',

  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },

  render: function() {
    var template = require('../templates/templateMath.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  },

  events: {
    'click #calculate' : 'getResults'
  },

  getResults: function() {
    this.model.mean();
    this.model.median();
    this.model.mode();
  }
});
