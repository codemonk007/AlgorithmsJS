function threeNumberSum(array, targetSum) {
  // Write your code here.
	
  console.log("hello");
  let arrayTemp = array.sort((a,b) => a-b);
  let finalArray =[];
  
  let j = arrayTemp.length-1;
  for (let k = 0; ik< arrayTemp.length; k++) {
    let i =k+1;
    while (i<=j) {
      let temp =targetSum - (arrayTemp[i]+arrayTemp[j]);
      if(arrayTemp.indexOf(temp)>-1){
        finalArray.push(arrayTemp[i],arrayTemp[j],temp); 
        i++;
        j--;
      }
  }
    
  }
  
}
threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6],0);
