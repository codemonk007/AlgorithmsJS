//print the sum of fibonacci series with given n 

let item = 10;
let temp=[];
sum=0
function Fibonacci(n) {
  if(n==1){
     return 1;
  }
  else{
    return Fibonacci(n-1)+Fibonacci(n-2) 
  }
  
}

console.log(Fibonacci(5));
