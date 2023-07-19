const students = [
   { name: "Alice", age: 20 },
   { name: "Bob", age: 21 },
   { name: "Jane", age: 20 },
];

const name = "John";
const age = 20;
const newStudent = { name, age };

students.push(newStudent);
students.forEach((student) => {
   console.log(student.name);
});