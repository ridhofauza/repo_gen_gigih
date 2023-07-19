const wait = time => new Promise((resolve) => 
setTimeout(resolve, time));

// wait(3000).then(() => console.log('World'));

// console.log("Hello!");

wait(3).then(() => console.log(3));
wait(4).then(() => console.log(4));
wait(2).then(() => console.log(2));
wait(0).then(() => console.log(1));