let x = 5;
let n = 4;
let a = 1;
let res = x;
for(let i = 1;i<=n;i++){
  a*=2*i;
  res +=((-1)**i)*(x**(2*i))/a;
  console.log(res);
}
console.log((1-res).toFixed(2));
