'use strict';

// ==============================================================
// Summary: most important
// ==============================================================

[] + null + 1 ;// 'null1'

[0] == 0 ;// true, Number([0]) == 0

[] == ![]; // true

null == "\n0\n" // false

!![]       ;// -> true
[] == true ;// -> false

[''] == ''     ;// -> true
[0] == 0       ;// -> true
[0] == ''      ;// -> false // [0].toPrimitive = '0'
[''] == 0      ;// -> true

[null] == ''          ;// true
[null] == 0           ;// true

Number()          ;// -> 0
Number(undefined) ;// -> NaN


parseInt({ toString: () => 2, valueOf: () => 1 }) ;// -> 2
Number({ toString: () => 2, valueOf: () => 1 })   ;// -> 1


[] + {}   ;// -> '[object Object]'
{} + []   ;// -> 0
({} + []) ; // -> [object Object]" 


( { [{}]: {} } ) ;// -> { '[object Object]': {} }

`${{Object}}` // -> [object Object]

// let f = () => {}
// f() // -> undefined

!+[]+[]+![] ;// 'truefalse'

{}+[]+{}+[1] // ❗'0objectObject1'


// ==============================================================
// ==============================================================


// Задание от ментора
// ==============================================================
2 + '2' // 22, потому что если хоть один из операндов строка - то происходит конкатенация
'2' + 2 // 22, потому что если хоть один из операндов строка - то происходит конкатенация
1 + 2 + '3' // 33, сразу происходит сложение двух чисел, а потом конкатенация со строкой
'3' + 2 + 1 // 321, конкатенация, а затем снова конкатенация
true + false // 1, логические значения приводятся к числу для любых арифметических операций, получаем 0+1
null == '' ;// false, особое правило язка - null и undefined равны только между собой и не равны ничему больше
[] + null + 1 ;// ❗ {1, [].valueOf + 0 + 1} - неправильно. [].toPrimitive попробует преобразовать в первую очередь в строку и выведет "",
// а дальше просто конкатенация 
[0] == 0 ;// ❗ {false, [0]-> ""} - неправильно. true, Number([0]) == 0
// ==============================================================



[] == []; // false, because of different references

[] == ![]; // true
// Specs: https://262.ecma-international.org/5.1/#sec-11.9.3
// Specs condition 7 -> If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)
Number(![]) // 0
// because [] is a truthy value, negating makes it false. Number(false) is 0
// Specs condition 8 -> If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.
// ToPrimitve(x) is like x.toString().   [].toString() // ”” - the empty string
// Almost done we now face with the comparison: “” == 0
// Specs condition 5 -> If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
Number(''); // 0
[] == Number(![]);
[] == Number(false);
[] == 0;
// toPrimitive([]) == 0;
// "" == 0;
// Number("") == 0;
// 0 == 0;
// ==============================================================

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // {true} - неверно, null равен только undefined
null === +"\n0\n" // false, разные типы данных, дальше не смотрим

// ==============================================================

!!'false' ==  !!'true'  // -> true
!!'false' === !!'true' // -> true

'foo' + + 'bar'  ;// -> 'fooNaN'

[] ;// является «истинноватым», но не true
!![]       ;// -> true

[] == true ;// -> false
[] == 1 ;// <- Вроде по спекам дальше так выходит
'' == 1
0 == 1 

[1, 2, 3] + [4, 5, 6]  ;// -> '1,2,34,5,6'


// ==============================================================
// Эквивалентность массивов
// ==============================================================

[] == ''       ;// -> true
[] == 0        ;// -> true
[''] == ''     ;// -> true
[0] == 0       ;// -> true
[0] == ''      ;// -> false // [0].toPrimitive = '0'
[''] == 0      ;// -> true

[null] == ''          ;// true
[null] == 0           ;// true
[undefined] == ''     ;// true
[undefined] == 0      ;// true

[[]] == 0      ;// true
[[]] == ''     ;// true

[[[[[[]]]]]] == ''     ;// true
[[[[[[]]]]]] == 0      ;// true

[[[[[[ null ]]]]]] == 0      ;// true
[[[[[[ null ]]]]]] == ''     ;// true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true


// ==============================================================

Number()          ;// -> 0
Number(undefined) ;// -> NaN


parseInt({ toString: () => 2, valueOf: () => 1 }) ;// -> 2
Number({ toString: () => 2, valueOf: () => 1 })   ;// -> 1



[] + []   ;// -> ''

{} + []   ;// -> 0
// ^ In short, {} + [] is an empty code block followed by an array coerced to a number.
// All that said, if you evaluate {} + [] inside an expression, it will return what you expect:
({} + []) ; // -> [object Object]" 
// Another interesting thing is that you cannot begin a statement with an object literal because 
// the interpreter will try to parse it as a statement. Doing this
// { "object": "literal" };
// will throw a syntax error.

[] + {}   ;// -> '[object Object]'
{} + {}   ;// -> '[object Object][object Object]'


( { [{}]: {} } ) ;// -> { '[object Object]': {} }


`${{Object}}` // -> [object Object]


// let x, { x: y = 1 } = { x }; y; // -> y == 1


// let f = () => 10
// f() // -> 10

// let f = () => {}
// f() // -> undefined
// Вы можете ожидать получить {} вместо undefined. 
// Причина в том, что фигурные скобки являются частью синтаксиса стрелочных функций, 
// так что f будет возвращено неопределённым.

// =========================================================

!+[]+[]+![] ;// ?

// ❗My guess: 
// !+true + ...
// !1 ❗
// false + "" ...
// "false" + "false"
// "falsefalse"
// Неправильно 
// На самом деле
// !+[]
// !+''
// !0
// !false
//...
// 'truefalse'

// =========================================================

true + false  // 1
12 / "6" // 2
"number" + 15 + 3 // number153
15 + 3 + "number" // 18number
[1] > null // true
"foo" + + "bar" // fooNaN

'true' == true // true❗
false == 'false' //  false

'true' == true
// ==> NaN == 1
// ==> false
false == 'false'   
// ==> 0 == NaN
// ==> false



null == '' // false
!!"false" == !!"true" ;// true
['x'] == 'x' ;// true
[] + null + 1 // null1
0 || "0" && {} ;// {}
[1,2,3] == [1,2,3] ;// false
{}+[]+{}+[1] // '0[objectObject]1' ❗
!+[]+[]+![] // 'truefalse'
new Date(0) - 0 // 0
new Date(0) + 0 // 'Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)0'


String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // ошибка TypeError

// это выражение возвращает число 123, а не true
// 'hello' и 123 неявно преобразуются к логическому типу при работе оператора && для вычисления значения выражения
let x = 'hello' && 123;   // x === 123



Number('123')   // явное преобразование
+'123'          // неявное преобразование
123 != '456'    // неявное преобразование
4 > '5'         // неявное преобразование
5/null          // неявное преобразование
true | 0        // неявное преобразование

// Вот как в числа преобразуются примитивные значения:
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123


// Значения типа Symbol не могут быть преобразованы в число ни явно, ни неявно. 
// Более того, при попытке такого преобразования выдаётся ошибка TypeError. 
// Можно было бы ожидать, что подобное вызовет преобразование значения типа Symbol в NaN, 
// как это происходит с undefined, но этого не происходит. 

// Number(Symbol('my symbol'))    // Ошибка TypeError
// +Symbol('123')                 // Ошибка TypeError

null == 0               // false, null не преобразуется в 0
null == null            // true
undefined == undefined  // true
null == undefined       // true


// =========================================================

// Вот псевдо-реализация метода [[ToPrimitive]]:
function ToPrimitive(input, preferredType){
  
    switch (preferredType){
      case Number:
        return toNumber(input);
        break;
      case String:
        return toString(input);
        break
      default:
        return toNumber(input);  
    }
    
    function isPrimitive(value){
      return value !== Object(value);
    }
  
    function toString(){
      if (isPrimitive(input.toString())) return input.toString();
      if (isPrimitive(input.valueOf())) return input.valueOf();
      throw new TypeError();
    }
  
    function toNumber(){
      if (isPrimitive(input.valueOf())) return input.valueOf();
      if (isPrimitive(input.toString())) return input.toString();
      throw new TypeError();
    }
  }

//   В целом, работа алгоритма выглядит следующим образом:

// Если входное значение является примитивом — не делать ничего и вернуть его.
// Вызвать input.toString(), если результат является значением примитивного типа — вернуть его.
// Вызвать input.valueOf(), если результат является значением примитивного типа — вернуть его.
// Если ни input.toString(), ни input.valueOf() не дают примитивное значение — выдать ошибку TypeError.


// Большинство встроенных типов не имеют метода valueOf, или имеют valueOf, 
// который возвращает сам объект, для которого он вызван (this), 
// поэтому такое значение игнорируется, так как примитивом оно не является. 
// Именно поэтому преобразование в число и в строку может работать одинаково — и то и другое сводится к вызову toString().


// Различные операторы могут вызывать либо преобразование в число, 
// либо преобразование в строку с помощью параметра preferredType. 
// Но есть два исключения: оператор нестрогого равенства == и оператор + с двумя операндами 
// вызывают конверсию по умолчанию (preferredType не указывается или устанавливается в значение default). 
// В этом случае большинство встроенных типов рассматривают, как стандартный вариант поведения, конверсию в число, 
// за исключением типа Date, который выполняет преобразование объекта в строку.
// ❓❓??????????? ❓ ^ Почему же тогда пустой массив всегда преобразовывается с пустую строку ❓??????????????????????????????




// Вот пример поведения Date при преобразовании типов:

let d = new Date();

// получение строкового представления
let str = d.toString();  // 'Wed Jan 17 2018 16:15:42'

// получение числового представления, то есть - числа миллисекунд с начала эпохи Unix
let num = d.valueOf();   // 1516198542525

// сравнение со строковым представлением
// получаем true так как d конвертируется в ту же строку
console.log(d == str);   // true

// сравнение с числовым представлением
// получаем false, так как d не преобразуется в число с помощью valueOf()
console.log(d == num);   // false

// Результат 'Wed Jan 17 2018 16:15:42Wed Jan 17 2018 16:15:42'
// '+', так же, как и '==', вызывает режим преобразования по умолчанию
console.log(d + d);

// Результат 0, так как оператор '-' явно вызывает преобразование в число, а не преобразование по умолчанию
console.log(d - d);



// =========================================================

var obj = {
    prop: 101,
    toString(){
      return 'Prop: ' + this.prop;
    },
    valueOf() {
      return this.prop;
    }
  };
  
  console.log(String(obj));  // 'Prop: 101'
  console.log(obj + '')      // '101' ❓❓❓
  console.log(+obj);         //  101
  console.log(obj > 100);    //  true

//   ❗Обратите внимание на то, что obj + ‘’ возвращает ‘101’ в виде строки. 
//   Оператор + вызывает стандартный режим преобразования. 
//   ❗Как уже было сказано, Object рассматривает приведение к числу как преобразование по умолчанию, 
//   поэтому использует сначала метод valueOf() а не toString().



class Disk {
    constructor(capacity){
      this.capacity = capacity;
    }
  
    [Symbol.toPrimitive](hint){
      switch (hint) {
        case 'string':
          return 'Capacity: ' + this.capacity + ' bytes';
  
        case 'number':
          // преобразование в KiB
          return this.capacity / 1024;
  
        default:
          // считаем преобразование в число стандартным
          return this.capacity / 1024;
      }
    }
  }
  
  // 1MiB диск
  let disk = new Disk(1024 * 1024);
  
  console.log(String(disk))  // Capacity: 1048576 bytes
  console.log(disk + '')     // '1024'
  console.log(+disk);        // 1024
  console.log(disk > 1000);  // true





// =========================================================



