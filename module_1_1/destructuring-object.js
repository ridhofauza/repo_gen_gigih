function studentsAgeReducer2(acc, { age }) {
   return acc + age;
}

function averageAge2(students) {
   const totalAge = students.reduce(studentsAgeReducer2, 0);
   return totalAge / students.length;
}

const students = [
   { name: "Alice", age: 20 },
   { name: "Bob", age: 21 },
   { name: "Jane", age: 20 },
];
console.log(averageAge2(students));

const obj = { name: "Alice", age: 20 };
const { name, age } = obj;
console.log(name, age);