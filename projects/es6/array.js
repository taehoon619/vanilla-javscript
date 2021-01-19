'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['key']) // obj는 'key','name'... 스트링 사용하면 키에 상응하는 값을 받아옴

console.log(fruits.length - 1) // 마지막 인덱스

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach 배열안에 들어있는 값들마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruits, index) =>  console.log(fruits, index))


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push()
// pop: remove an item from the end
fruits.pop()

// unshift: add an item to the benigging
fruits.unshift('bob', 'dave')
console.log(fruits)
// shift: remove an item from the benigging
fruits.shift()
fruits.shift()  
console.log(fruits)
// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('sang', 'wook', 'min', 'hoon', 'kim');
console.log(fruits);
fruits.splice(1); // sang 만 남기고 다 삭제
fruits.splice(1, 1); // wook 만 삭제
fruits.splice(1, 1, 'song', 'jang') // wook 날리고 song, jang 투입

// combine two arrays
const fruits2 = ['kevin', 'jack']
const newFruits = fruits.concat(fruits2);
console.log(newFruits)

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits)
console.log(fruits.indexOf('kevin'))

// includes
// 배열에 해당하는 값이 없다면 -1 
console.log(fruits.includes('kevin'));

// lastIndexOf => 마지막 인덱스
console.push('michel')
console.log(fruits.indexOf("")) // 가장 첫번쨰 값을 만나면 인덱스 출력 
console.log(fruits.lastIndexOf('')); // 마지막에 만나는 값을 엔덱스 출력


