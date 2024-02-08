//1以上の変数宣言・代入
let num = Math.floor(Math.random()*30)+1;

//値の出力
console.log(num);

//if文
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0) { 
  console.log('3の倍数です');
}
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}
