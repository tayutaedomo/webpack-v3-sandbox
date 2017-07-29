
import {ClassA} from "./class_a"

export function ClassB() {
  ClassA.call(this);

  this.targets = [];
};

ClassB.prototype = Object.create(ClassA.prototype);
ClassB.prototype.constructor = ClassB;

ClassB.prototype.func2 = function() {
  console.log('ClassB.func2');
};

