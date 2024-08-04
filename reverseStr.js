const reverseStr = (str) => {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i -= 2) {
    tempStr += str[i];
    if (i - 1 >= 0) {
      tempStr += str[i - 1];
    } else {
      break;
    }
  }

  return tempStr;
};
//const str = "hello"
//console.log(reverseStr(str))
export default reverseStr;
