// object
// one of the JavaScript`s  data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object. 
// object = {key: value};

// 1 Literals and properties
const obj = {}; // 'object literal' syntax
const obj = new Object(); // 'object constructor; syntax

const name = 'ellie'; // string
const age = 4;
print(name. age);
function print(name, age){
    console.log(person.name);
    console.log(person.age);
    // 어려운 방법
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// wiht JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJab);

delete ellie.hasJob;
console.log(ellie.hasJab);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // . dot 코딩하는 그순간 키에 해당하는 값
console.log(ellie['name']); // 런타임에서 결정될때 ?? 실시간 computed properties
ellie['hasJob'] = true;
console.log(ellie.hasJab);

function printValue(obj, key){
    // console.log(obj.key) 안됨
    console.log(obj[key]);
}
printValue(ellie, ' name');
printValue(ellie, ' age');

// 3. Property value shorthand ,오브젝트를 일일히 만들게 되면 반복해야하는 문제점
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4.Constructor function
function Person(name, age){ // 함수를 통해서 문제점을 없앨수 있음 // Class 가 없을때 사용했음
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // 키가 없는지 확인가능
console.log('random' in ellie)
console.log(ellie.random);

// 6. for.. in vs for..of
// for(key in obj)
for(key in ellie){ // 모든 키들을 확인 가능함 or 처리하고 싶을때
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5]; 
for(value of array){
    console.log(value) // array 있는 모든 값들이 벨류로 할당
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}
const user2 = user;
user2.name = 'coder;'
console.log(user);

// old way
const user3 = {}
for(key in user){ // user안에 있는 키들을 
    user3[key] = user[key];
}
console.log(user3)

const user4 = {}
Object.assign(user4, user) // 복사 user4에 user
// const user4 = Object.assign({}, user);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({fruit1, fruit2})

console.log(mixed.color);