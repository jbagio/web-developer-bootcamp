console.log('PRINT ALL NUMBERS BETWEEN -10 AND 19');
let num = -10;

while (num <= 19) {
  console.log(num);
  num += 1;
}

console.log('PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40');
num = 10;
while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num += 1;
}

console.log('PRINT ALL ODD NUMBERS BETWEEN 300 AND 333');
num = 300;
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num += 1;
}
