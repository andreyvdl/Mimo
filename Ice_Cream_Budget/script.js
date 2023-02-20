let	price = 2.50;
let	campers = 15;
let	taxRate = 0.08;
let	budget = 40.00;
let	total = price * campers * (1 + taxRate);
let	totalExceedsBudget = total > budget;
let	taxApplied = total > price * campers;

console.log(price);
console.log(campers);
console.log(taxRate);
console.log(total);
console.log("Total Exceeds Budget? " + totalExceedsBudget);
console.log("Tax Applied? " + taxApplied);