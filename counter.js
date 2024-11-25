let counter = 30;
const countdown = setInterval (() =>{
   console.log(counter);
  counter --;
  if(counter <0){
    clearInterval(countdown);
    console.log("countdown complete");
  }
},1000 )
 
