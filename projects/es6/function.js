// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb -> 함수의 이름 중요 
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS = 함수는 오브젝트의 일부이다
function printHello() {
    console.log('hello');
}
printHello()

function log(message){ // 타입스크립트 홈페이지 -> Playground
    console.log(message)
}

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function change(obj){
    obj.name = 'coder'
}

const ellie = { name: 'ellie' }; // reference
changeName(ellie); 
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ // parameters
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // 지역 변수
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message); // 지역 변수 확인 가능
        let childMessage = 'hello'; // 함수 printMessage에서 확인 불가능!
    }
    // console.log(childMessage); error
}
printMessage(); // 밖에서는 안이 보이지 않고, 안에서만 밖을 볼수있다.

// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
if(user.point <= 10){
    return;
    // long upgrade logic...
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated lick any other variable
// can be assigned as a value to variable -> 변수에 할당 
// can be passed as an argument to other functions. -> 파라미터로 전달
// can be returned by another function -> 리턴 가능

// 1. Function expression  ?? 
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ // 이름이 없는 함수 anonymous function 
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// printYes, printNo 정답이 맞거나 아닐떄 불러오는 함수
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger`s stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); // recursions
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo); 

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log(`simplePrint!`);
}

const simplePrint = () => console.log(`simplePrint!`);
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 바로 실행 가능
(function hello(){
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder