function largestNum(arr) {
    if (arr.length === 0) {
      return null; // or throw an error, or handle as needed
    }
    let max=arr[0];
    for (let i=1;i<arr.length;i++) {
      if (arr[i]>max) {
        max=arr[i];
      }
    }
    return max;
  }
  

  const num = [1, 2, 3, 4, 5];
  console.log(largestNum(num)); 
  