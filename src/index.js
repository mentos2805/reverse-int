module.exports = function reverse (n) {
  if(n < 0) {
      n = -n;
  }
  let str = String(n);
  let res = str.split('').reverse().join('');
    return res;
}
