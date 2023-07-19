try {
   let num = 5;
   num.toUpperCase();
} catch (error) {
   console.log('An error occured: ' + error.message);
   throw new Error('There was an error processing your request.');
}