// let str = "Hello World";

// console.log(str);

class Employee {
  // Field
  public name: string;
  position: string;
  age?: number; // optional property

  // Constructor
  constructor(name: string, position: string, age?: number) {
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

// const employee4: Employee = {
//   name: "",
//   position: "",

//   age: 20,
//   work: () => {},
// };

// class ExecutiveOfficer extends Employee {
//   officeNumber: number;

//   constructor(
//     name: string,
//     position: string,
//     officeNumber: number,
//     age: number
//   ) {
//     super(name, position, age);
//     this.officeNumber = officeNumber;
//   }
// }
// const employee5 = new ExecutiveOfficer("Messi", "FW", 1, 20);
// console.log(employee5);

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void; // 함수지만 반환값이 없을 때 void사용
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed}속도로 이동가능 !`);
  }
}
