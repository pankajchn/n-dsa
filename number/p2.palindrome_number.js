function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let xCopy = x;
  let rev = 0;
  while (xCopy > 0) {
    rev = rev * 10 + (xCopy % 10);
    xCopy = Math.floor(xCopy / 10);
  }
  return x === rev;
}

const res = isPalindrome(121);
console.log(res);
