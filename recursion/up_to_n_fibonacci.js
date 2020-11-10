//print all fibaonacci series up to n
//print the sum of fibonacci series with given n 
//check if the value is with in fibonacci

let item = 10;
let temp=[];
function fibonacci(n) {
  if(n==1){
      return [0,1]
  }
  else{
     var s =fibonacci(n-1);
     s.push(s[s.length-1]+s[s.length-2])
     return s;
  }
}
console.log(fibonacci(10));