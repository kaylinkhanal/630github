const arr = [3, 5, 1, 2, 9, 12];
function helloman() {
  return "hello abhishek";
}
const greet = (uname) => {
  console.log(`hello welcome to broadway infosys ${uname}`);
};
const arrr = arr.filter((item) => {
  return item % 3 === 0;
});
console.log(arrr);

