
import {func} from './func';
import {ClassA} from './class_a';
import {ClassB} from './class_b';
import {Const} from './const';

func();

var classA = new ClassA();
classA.func();
classA.func2();

var classB = new ClassB();
classB.func();
classB.func2();

console.log(Const.FOO);

