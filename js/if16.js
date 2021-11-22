let n = 45;


if(n > 9 && n < 99){
  let res1 = n % 10;
  let res2 = (n - res1) / 10;
  console.log(res1 + res2 + " raqamlar yig'indisi");
}
else if(n > 99 && n < 999){
  let res1 = n % 10;
  let res2 = ((n - res1) % 100);
  let res3 = res2 / 10;
  let res4 = (n  - (res1 + res2)) / 100;
  console.log(res3 + res4 + res1 + " raqamlar yig'indisi");
}
else if(n > 999 && n < 9999){
  let res1 = n % 10; //birlik
  let res2 = ((n - res1) % 100);
  let res3 = res2 / 10; //o'nlik
  let res4 = ((n  - (res1 + res2)) % 1000) / 100; //yuzlik
  let res5 = ((n  - (res1 + res2)) % 1000);
  let res6 = ((n  - (res1 + res2)) - res5) / 1000; //minlik
  console.log(res6 + res4 + res3 + res1 + " raqamlar yig'indisi");
}