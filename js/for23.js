let x = 5;
let n = 4;
let a = 1;
let res = x;
for(let i = 1;i<=n;i++){
  a*=i;
  console.log(res);
  res +=((-1)**(i+1))*(x**(2*i+1))/a;
}
console.log(res);