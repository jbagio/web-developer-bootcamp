Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

var arr = [2, 3, 4, 5];

arr.myForEach(function (num) {
  console.log(num);
});
