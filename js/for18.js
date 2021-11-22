let a = 5;
let n = 4;
let b= 0;

for(let i=1; i <= n; i++){
  console.log(Math.pow(a, i)*Math.pow(-1, i));
  b+=a;
}
console.log( b);