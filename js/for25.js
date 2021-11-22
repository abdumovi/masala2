let x = 5;
let n = 4;
let res = x;
for(let i = 1;i<=n;i++){
  res +=((-1)**(i-1))*(x**i)/i;
  console.log(res);
}
console.log((x-res).toFixed(2));