const students = [{ name: "Alice" }];

try {
   // console.log(students[0].name);
   if(students[1]?.name === undefined) {
      throw new Error('There was an error processing your request.');
   }
   console.log(students[1]?.name);
   // console.log(students[1].name);
} catch (error) {
   console.log('Student not found');
}