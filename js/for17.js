let n = 3;
let a = 5;
let b = 1;
let c = a;

for(let i=1;i<n;i++){
  a*=a;
  console.log(a);
  b+=a;
}
console.log("natija : "+ (b +c));