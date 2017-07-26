
export function ClassA() {
  this.targets = [];
};
ClassA.prototype = {
  constructor: ClassA,

  func: function() {
    console.log('ClassA.func');
  }
};

