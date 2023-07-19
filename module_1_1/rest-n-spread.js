const students = [
   { name: "Alice", age: 20 },
   { name: "Bob", age: 21 },
   { name: "Jane", age: 20 },
];

const name = "John";
const age = 20;
const newStudent = { name, age };

const newStudents = [...students, newStudent];
console.log(newStudents);

function rank(topStudent, ...restStudents) {
   console.log("top student: ", topStudent);
   console.log("rest student: ", restStudents);
}

rank(newStudent, students[0], students[1]);