let  x = 0.5;
let fx;

if(x > 0){
  fx = 2 * Math.sin(x);
}
else if(x <= 0){
  fx = x - 6;
}
console.log(fx);