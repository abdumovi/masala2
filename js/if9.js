let n = 28;

if(n < 0 ){
  console.log("Freezing");
}
else if(n > 1 && n <= 10){
  console.log("Very Cold");
}
else if(n >= 11 && n <= 20){
  console.log("Cold");
}
else if(n >= 21 && n <= 30){
  console.log("Normal");
}
else if(n >= 31 && n <= 40){
  console.log("Hot");
}
else if(n > 40){
  console.log("Very Hot");
}