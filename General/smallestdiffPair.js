function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let i =0;
    let j =0;
    let temp;
    let smallestDifference=0;
    let ArrayT =[];
    while (i<arrayOne.length-1 && j < arrayTwo.length-1) {
        console.log("tyt");
        temp = arrayOne[i] > arrayTwo[j] ? arrayOne[i]-arrayTwo[j]:arrayTwo[j]-arrayOne[i];
        if(smallestDifference ==0){
            smallestDifference = temp;
            ArrayT.push([arrayOne[i],arrayTwo[j]])
        }
        else{
            if(temp<smallestDifference){
                smallestDifference = temp
                ArrayT.push([arrayOne[i],arrayTwo[j]])
            }
        }        

    }
  }

  smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17])
