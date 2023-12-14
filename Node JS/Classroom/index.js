function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
      return [];
  }
  
  let result = rangeOfNumbers(startNum + 1, endNum);
  result.unshift(startNum);

  return result;
}

// Example usage
console.log(rangeOfNumbers(1, 5));