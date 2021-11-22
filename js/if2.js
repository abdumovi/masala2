let a = 50;
let b = 89;
let c = 1;

if(a > b && a < c || a > c && a < b){
  console.log("o'tacha son" + a);
}
else if(b > a && b < c || b < a && b > c){
  console.log("o'tacha son" + b);
}
else if(c > a && c < b || c < a && c > b){
  console.log("o'tacha son" + c);
}