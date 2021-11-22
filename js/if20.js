let n = 56987;

if(n > 9999 && n < 99999){
  let res1 = n % 10; //birlik
  let res2 = ((n - res1) % 100);
  let res3 = res2 / 10; //o'nlik
  let res4 = ((n  - (res1 + res2)) % 1000) / 100; //yuzlik
  let res5 = ((n  - (res1 + res2)) % 1000);
  let res6 = (((n  - (res1 + res2)) - res5) % 10000); //minlik
  let res7 = (((n  - (res1 + res2)) - res5) % 10000) / 1000;
  let res8 = (((n  - (res1 + res2)) - res5) - res6) / 10000; // onminlik
  if(res1 > res3 && res1 > res4 && res1 > res7 && res1 > res8){
    console.log(res1 ,5);
  }
  else if(res3 > res1 && res3 > res4 && res3 > res7 && res3 > res8){
    console.log(res3 ,4);
  }
  else if(res4 > res1 && res4 > res3 && res4 > res7 && res4 > res8){
    console.log(res4 ,3);
  }
  else if(res7 > res1 && res7 > res3 && res7 > res4 && res7 > res8){
    console.log(res7 ,2);
  }
  else if(res8 > res1 && res8 > res3 && res8 > res4 && res8 > res7){
    console.log(res8 ,1);
  }
}else{
  console.log('son noto\'g\'ri kiritilgan' );
}
