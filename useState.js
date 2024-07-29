function useState(initialValue) {
  //debugger;
  let value = initialValue ? initialValue : null;

  //function render(){}()

  function setValue(input) {
    //debugger;
    value = input ? input : value;
    return value;
  }

  function getValue() {
    //debugger;
    return value;
  }
  //debugger;
  // return [getValue(), setValue]
  // Chat gpt solution
  return [getValue, setValue];
}
const [num, setNum] = useState(4);
console.log(num());
//debugger;
setNum(num() + 1);
console.log(num());
