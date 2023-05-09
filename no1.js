let y = 3;
let x = 0;

for (let i = 0; i < y-1; i++) {
  x = x + 2 * i;
}
console.log(x);
if (x % 2 === 0) {
  console.log("ayam");
} else {
  console.log("telur");
}