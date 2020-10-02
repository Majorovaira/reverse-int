module.exports = function reverse (n) {
  const numberAsArray = n.toString().split('');
  return parseInt(numberAsArray.reverse().join(''));
}
