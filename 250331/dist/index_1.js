"use strict";
// let str = "Hello World";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(str);
class Employee {
    // Field
    name;
    position;
    age; // optional property
    // Constructor
    constructor(name, position, age) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // Method
    work() {
        console.log(`Hello! ${this.name} 입니다!`);
    }
}
// const employee1 = new Employee();
// console.log(employee1);
// employee1.work();
// const employee2 = new Employee("Henry", 20, "Striker");
// console.log(employee2);
// employee2.work();
const employee3 = new Employee("Rooney", "Striker", 30);
employee3.name = "Son";
console.log(employee3);
employee3.work();
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed}속도로 이동가능 !`);
    }
}
