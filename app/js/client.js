var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var ModelMath = require('./models/modelMath');
var ViewMath = require('./views/viewMath');


var modelMath = new ModelMath;
var viewMath = new ViewMath({model: modelMath});

$('#mmm').append(viewMath.el);
