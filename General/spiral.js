function spiralTraverse(array) {
    // Write your code here.
    // console.log(array);   
    let rowstart=0;
    let rowEnd = array.length;
    let columnStart = 0;
    let columnEnd = array[0].length;
    let finalArray =[];
    while(rowstart<=rowEnd && columnStart <= columnEnd){
        for (let i = rowstart; i < rowEnd; i++) {
            finalArray.push(array[i])
        }
        for (let j = columnStart; j < columnEnd; j++) {
            finalArray.push(array[j])
            
        }
        for (let k = rowEnd; k >= rowstart; k--) {
            finalArray.push(array[k])
        }
        for (let l =columnEnd;l>= columnEnd ;l--) {
            finalArray.push(array[l])            
        }
        rowstart++;
        columnStart++;
        rowEnd--;
        columnEnd--;
    } 
    return finalArray;
  }
  console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]));
  