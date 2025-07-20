class Student {
  static students = [];
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.tardies = 0;
    this.scores = [];
  }

  // CLASS methods
  static enrollStudent(student) {
    this.students.push(student);
  }

  static getEnrolledStudents() {
    return this.students;
  }

  // INSTANCE methods
  getFullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((curr, acc) => curr + acc, 0);
    return sum / this.scores.length;
  }
}

let firstStudent = new Student('kat', 'peralta', 1);
let secondStudent = new Student('colt', 'priye', 3);

console.log(firstStudent);
console.log(firstStudent.getFullName());
console.log(firstStudent.markLate());
console.log(firstStudent.addScore(10));
console.log(firstStudent.addScore(8));
console.log(`Your scores average is: ${firstStudent.calculateAverage()}`);

console.log(secondStudent);
console.log(secondStudent.getFullName());
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());

Student.enrollStudent(firstStudent);
Student.enrollStudent(firstStudent);
console.log(Student.getEnrolledStudents());
