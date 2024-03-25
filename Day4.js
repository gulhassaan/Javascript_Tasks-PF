/**Task 13 */
console.log("Task 13");
try {
  let a = 10;
  // let b=10:   // syntex error

  if (a === b) {
    console.log("Both are equal");
  }
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("SyntaxError");
  } else if (error instanceof ReferenceError) {
    console.log("ReferenceError");
  }
}

console.log("Recursion");

/** Task 01*/
console.log("Task 01");
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(13));

/**Task 02 */
console.log("Task 02");

function GCD(number1, number2) {
  if (number2 == 0) {
    return number1;
  }

  return GCD(number2, number1 % number2);
}

console.log(GCD(24, 30));

/**Task 03 */
console.log("Task 03");

function range(x, y, result = []) {
  if (x + 1 === y) {
    return result;
  }

  return range(x + 1, y, result.concat(x + 1)); //result.concat(x + 1) doesn't modify the result array itself instead, it creates a new array that consists of the elements of result followed by x + 1.
}
const integersInRange = range(2, 10);
console.log("Integers in range (" + 2 + ", " + 10 + "):", integersInRange);

/**Task 04 */
console.log("Task 04");

function sumintegars(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  return arr.pop() + sumintegars(arr);
}
console.log(sumintegars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**Task 05 */
console.log("Task 05");

function computeExponent(b, e) {
  if (e == 0) {
    return 1;
  }
  return b * computeExponent(b, e - 1);
}
console.log(computeExponent(2, 3));

/**Task 06 */
console.log("Task 06");

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

/**Task 07 */
console.log("Task 07");

function findEven(n) {
  if (n == 0) {
    return true;
  }
  if (n == 1) {
    return false;
  }
  return findEven(n - 2);
}
console.log(findEven(3));

/**Object Oriented Programming*/

console.log("Object Oriented Programming");
console.log("Task 01");
class person {
  constructor(name, age, country) {
    (this.name = name), (this.age = age), (this.country = country);
  }
  detail() {
    console.log("Name is : ", this.name);
    console.log("Age is : ", this.age);
    console.log("Country is : ", this.country);
  }
}

const Bilal = new person("Bilal", "24", "Germany");
const Imran = new person("Imran", "25", "UK");
Bilal.detail();
Imran.detail();

/**Task 02 */
console.log("Task 02");

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculate_Area() {
    return this.width * this.height;
  }
  calculate_Perimeter() {
    return 2 * (this.width + this.height);
  }
}

const obj = new Rectangle(3, 4);

console.log("Area of Triangle is : ", obj.calculate_Area());
console.log("Perimeter of Triangle is : ", obj.calculate_Perimeter());

/**Task 03 */
console.log("Task 03");

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Details() {
    console.log("This is Car Make : ", this.make);
    console.log("This is Car Model : ", this.model);
    console.log("This is Car year : ", this.year);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, number_of_doors) {
    super(make, model, year);
    this.number_of_doors = number_of_doors;
  }
  Details() {
    super.Details();
    console.log("This car has  ", this.number_of_doors, " Doors");
  }
}

const veh_obj = new Vehicle("Mercedes", "C class", "2008");
veh_obj.Details();

const car_obj = new Car("Audi", "A5", "2019", "4");
car_obj.Details();

/**Task 04 */
console.log("Task 04");

class BankAccount {
  constructor(acc_num, balance) {
    this.acc_num = acc_num;
    this.balance = balance;
  }
  Deposit(amount) {
    this.balance += amount;
    console.log("You deposited: ", amount);
  }
  Withdraw(amount) {
    this.balance -= amount;
    console.log("You withdrew: ", amount);
  }
  TotalBalance() {
    console.log("Your Total balance is: ", this.balance);
    return this.balance;
  }
}

const acc = new BankAccount("PK-010101", 1000);
acc.Deposit(500);
console.log("Your current balance is: ", acc.TotalBalance());
acc.Withdraw(500);
console.log("Your current balance is: ", acc.TotalBalance());

/**Task 05 */
console.log("Task 05");

class Shape {
  constructor() {
    console.log("Constructor created successfully");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  cal_Area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  cal_Area() {
    return this.width * this.height;
  }
}

const circle_area = new Circle(10);
console.log("Circle Area is : ", circle_area.cal_Area());

const triangle_area = new Triangle(10, 5);
console.log("Triangle are is : ", triangle_area.cal_Area());

/**Task 06 */
console.log("Task 06");

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  annual_salary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  annual_salary() {
    super.annual_salary();
    const bonus = 0.3;
    return this.salary * bonus * 12;
  }
}

const sal_emp = new Employee("Hassaan", "100000");
console.log("Annual Salary of emplyeee is : ", sal_emp.annual_salary());

const sal_manager = new Manager("Sir Rizwan", "500000");
console.log(
  "Annual Salary of manager with bonus is : ",
  sal_manager.annual_salary()
);

/**Task 07 */
console.log("Task 07");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  Display_Book_Details() {
    console.log("Book Title is : ", this.title);
    console.log("Book Author is : ", this.author);
    console.log("Book Published in Year  : ", this.year);
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  Display_Book_Details() {
    super.Display_Book_Details();
    console.log("Book Price is  : ", this.price);
  }
}

const Ebook_obj = new Ebook("programming", "Malik", 1999, 1500);
Ebook_obj.Display_Book_Details();

/**Task 08 */
console.log("Task 08");

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  Animal_sound() {
    console.log("This is Animals : ", this.sound);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  Animal_sound() {
    super.Animal_sound();
    console.log("This is color of Dog : ", this.color);
  }
}

const Dog_obj = new Dog("Bully", "WaoooWaooooWaooo", "Red");
Dog_obj.Animal_sound();

/**Task 09 */
console.log("Task 09");

class Bank {
    constructor(bank_name, branches = []) { 
      this.bank_name = bank_name;
      this.branches = branches;
    }
  
    addBranch(branch) {
      this.branches.push(branch);
    }
  
    removeBranch(branch) {
      const index = this.branches.indexOf(branch);
      if (index !== -1) {
        this.branches.splice(index, 1);
      }
    }
  
    displayBranch()
    {
      console.log("Branches of : ", this.bank_name, " are ", this.branches);
    }
  }
  
  const bank_obj = new Bank("MEEZAN");
  console.log("Add brances ");
  bank_obj.addBranch("Main Branch");
  bank_obj.addBranch("DHA Branch");
  bank_obj.addBranch("Bahria Branch");
  console.log("These are all Meezan Branches ");
  bank_obj.displayBranch(); 
  console.log("After removing one branch");
  bank_obj.removeBranch("Bahria Branch");
  console.log("These are all Meezan Branches ");
  bank_obj.displayBranch(); 
  