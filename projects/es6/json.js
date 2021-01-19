// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) 스트링으로 변환
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(), // json변환 되지않음
    symbol: Symbol('id'), // 변환되지 않음
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name'? 'ellie' : value;
});
console.log(json)

// 2. JSON to Object
// parse(json)

console.clear()
json = JSON.stringify(rabbit);

const obj = JSON.parse(json)
console.log(obj);
rabbit.jump(); 
// obj.jump();

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
})

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate())
// console.log(obj.birthDate) 안나옴 스트링이기 떄문에