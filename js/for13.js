let n = 2;
let s = 1.1;
let son = s;
for(let i = 0; i < n + n; i++){
  for(let j = 0; j < 1; j++){
    s -= (son + 0.1);
    son =(son + 0.1);
  }
  for(let k = 0; k < 1; k++){
    s += (son + 0.1);
    son = (son + 0.1);
  }
}
console.log(s);
