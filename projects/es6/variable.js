// 자바스크립트는 유연한 언어
// flexible === dangerous
'use strict' ; 

// 2. variable (변수)
// let (added in ES6)
let globalName = 'global name' // 전역 변수
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 변수 선언은 위에서 해라
// has no block scope 블럭을 무시함 최악

// 3. Constant
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Mutable 변경이 가능한 변수 (let), ImMutable (const)

// 4. Variable types 
// primitive, single item: number, string, boolean, null, undefined, symbol, object,
// box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);

// number - speicla numeric values: infinity, -infinity
const infinity = 1 / 0
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890123456789012345678901234567890 
// over (-2**53) ~ 2*53) 이렇게 큰 범위의수 bigInt = 12345~ 뒤에 n을 붙이면 인식가능
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER

// string 
const char = 'c'
const brendan = 'brendan'
const greeting = 'hello' + brendan
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `value: ${greeting}`; // template literals (string)

// boolean 
// false: 0, null. undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1 // false

// null
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x = undefined; // 아무런 값이 없어도 됨
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers or objects
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
console.log(gSymbol1 === gSymbol2) //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life object, data structure
const ellie = {name:'ellie', age: 20}
ellie.age = 21; // 변경 가능 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 숫자
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 문자
text = '8' / '2'; 
console.log(`value: ${text}, type: ${typeof text}`); // 숫자
console.log(text.charAt(0)) // 여기서 출력한다면
// 숫자와 문자의 런타임 에러 !! --> 타입스트립트가 나온다??