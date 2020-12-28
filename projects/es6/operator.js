// 1. String concatenation
console.log('my' + 'cat')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1  + 2}`) 
// 줄바꿈을 하거나 \n 출바꿈

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3);// exponentiation

// 3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; 
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false; // true; 라면 ?
const value2 = 4 < 2;

// || (or), finds the first truthy value 처음으로 true가 나오면 멈춘다!!!
console.log(`or: ${value1 || value2 || check()}`); // 심플한 친구들을 앞쪽에 배치, 함수를 마지막에 배치하는것이 좋다
// && (and), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something
if(nullableObject != null){
    nullableObject.something;
}

function check() {
    for(let i = 0; i < 10; i++){
        // wasting time
        console.log('ss')
    }
    return true;
}
// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5'
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive); // 타입 까지 확인
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // f
console.log(ellie1 === ellie2);
console.log(ellie2 === ellie3);

// equality - puzzler 
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false);
console.log('' === false);
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8.Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'ellie'){
    console.log('Welcome, Ellie');
}else if(name === 'coder'){
    console.log('YOu are amazing coder');
}else{
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition > value1 : value2; true -> value1, false -> value2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){  
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox': // 묶어서 표현해도 상관없다
        console.log('love you!'); 
        break;
    // case 'Firefox':
    //     console.log('love you!'); // !!!파이어폭스 출력문 반복?? 
    //     break;
    default:
        console.log('same all!');
        break;
}
 
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. 
do { // 블럭을 먼저 실행 하고 싶을때
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step) // 컨디션 이 안맞을때까지 실행
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i -2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops 
for(let i = 0 ; i < 10; i++){
    for(let j =0; j < 10; j++){
        console.log(`i: ${i}, j${j}`);
    }
}

// break, continue
// q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

// q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}