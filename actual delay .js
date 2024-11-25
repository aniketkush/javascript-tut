const startTime = Date.now();
setTimeout (() => {
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(`Expected delay : 2000ms`);
  console.log (`Actual dealy : ${timeTaken}ms`);
} , 2000);