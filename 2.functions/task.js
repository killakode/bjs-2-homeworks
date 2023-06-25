function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  if (arr.length == 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let even = 0;
  let odd = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      even += arr[i];
    }
    if(arr[i] % 2 != 0){
      odd += arr[i];
    }
  }
  return even - odd;
}

function averageEvenElementsWorker(...arr) {
  let sumEven = 0;
  let countEven = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
        sumEven += arr[i];
        countEven++;
    }
  }
  return sumEven / countEven;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let exp = func(...arrOfArr[i]);
      if (exp > maxWorkerResult) {
          maxWorkerResult = exp;
      }
  }
  return maxWorkerResult;
}
