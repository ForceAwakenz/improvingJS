[] + null + 1 ;// 'null1'

[0] == 0 ;// true

[] == ![]; // true, []==!'', []==!false, []==true, true==true

null == "\n0\n" // false

!![]       ;// true
[] == true ;// false

[''] == ''     ;// true
[0] == 0       ;// true
[0] == ''      ;// false, [0] -> '0', '0'!=='' 
[''] == 0      ;// true

[null] == ''          ;// true
[null] == 0           ;// true

Number()          ;// 0
Number(undefined) ;// NaN


parseInt({ toString: () => 2, valueOf: () => 1 }) ;// 2
Number({ toString: () => 2, valueOf: () => 1 })   ;// 1


[] + {}   ;// '[object Object]'
{} + []   ;// 0
({} + []) ; //  '[object Object]'


( { [{}]: {} } ) ;// {'[object Object]': {} }

`${{Object}}` // [object Object]

// let f = () => {}
// f() // undefined

!+[]+[]+![] ;// 'truefalse'

{}+[]+{}+[1] // 0[object Object]1