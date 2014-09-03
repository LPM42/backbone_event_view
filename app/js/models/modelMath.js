var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    numbers: [1,2,2,3,41,213,12],
    mean: 0,
    median: 0,
    mode: 0
  },

  // Calculate mean
  mean: function() {
    var numbers = this.get('numbers');
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var meanResult = sum/numbers.length;
    this.set({mean: meanResult});
  },

  // Calculate median
  median: function() {
    var numbers = this.get('numbers');
    numbers.sort(function (a,b){
      return a - b;
    });
    var half = Math.floor(numbers.length/2);

    if (numbers.length % 2) {
      var medianResultOne = numbers[half];
      this.set({median: medianResultOne});
    }
    else {
      var medianResultTwo = (numbers[half - 1] + numbers[half])/ 2;
      this.set({median: medianResultTwo});
    }
  },

  // Calculate mode (with clause in case of 2 equal modes)
  mode: function() {
    var self = this;
    var numbers = this.get('numbers');
    var timesHappen = [];
    for (var i = 0; i < numbers.length; i++) {
      timesHappen[numbers[i]] = (timesHappen[numbers[i]] ? timesHappen[numbers[i]] : 0) + 1;
    }
    var modeResult = 0;
    var num = 0;
    timesHappen.forEach(function(value, index) {
      if (value >= num) {
        modeResult = index;
        num = value;
        self.set({mode: modeResult});
      }
    });
  }
});
