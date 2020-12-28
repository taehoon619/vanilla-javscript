'use strict'
// Object-oriented programming 객체 지향 
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    //methods 
    speak(){
        console.log(`${this.name}: hello!`); // this 생성된 오브젝트
    }
}
``
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak()

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastNme;
        this.age = age;
    }

    get age(){
        return this.age;
    }

    set age(value){
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference

class Experiment {
    publicField = 2;
    #privateField = 0; // #(해쉬)기호 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return (this.width * this.height) / 2 
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red')
Triangle.draw()
console.log(triangle.getArea())

// 6. Class checking InstanceOf 오브젝트가 이 클래스를 이용해서 만들어졌는지 확인
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
console.log(triangle.toString());