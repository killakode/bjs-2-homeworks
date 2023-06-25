"use strict"
function solveEquation(a, b, c) {
  let arr = [ ];
  let discriminant = Math.pow(b,2)-4*a*c;
  if (discriminant == 0) {
    let root = -b/(2*a);
    arr.push(root);
  } else if (discriminant > 0) {
    let root2  = (-b + Math.sqrt(discriminant) )/(2*a);
    let root3  = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root2);
    arr.push(root3);
  } else {
    arr = [ ];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}