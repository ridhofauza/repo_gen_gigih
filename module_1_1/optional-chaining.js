const students = [{name : "Alice"}];
console.log(students[0].name);
console.log(students[1]?.name); // hasil undefined karena data tidak ada (perlu menggunakan optional chaining agar tidak error)