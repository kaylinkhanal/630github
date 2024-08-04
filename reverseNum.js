const reversNum = (num, reversed = 0) => {
  if (num <= 0) return reversed;
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
  return reversNum(num, reversed);
};
//console.log(reversNum(987));
export default reversNum;
