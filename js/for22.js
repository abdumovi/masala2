let n = 5;
let a = 0;
let b = 1;
let x = 5;

for(let i=1; i<=n; i++){
  b*=i;
  a+=Math.pow(x,i)/b;
}
console.log(1+x+a);