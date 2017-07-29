
export function ClassA() {
  this.targets = [];
};
ClassA.prototype = {
  constructor: ClassA,

  func: function() {
    console.log('ClassA.func');
  },

  func2: function() {
    console.log('ClassA.func2');
  }
};

