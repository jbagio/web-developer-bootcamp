function average (arr) {
  const sum = arr.reduce((total, value) => total + value);
  return Math.round(sum / arr.length);
}

console.log(average([90, 98, 89, 100, 100, 86, 94]));
console.log(average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]));
