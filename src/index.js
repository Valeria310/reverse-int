module.exports = function reverse (n) {
  if (n < 0) {
        n *= -1;
      }
      n = String(n);
      let m = n.split("").reverse().join("");
      return +m;
}
