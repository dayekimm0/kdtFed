// 변수

// 자료형

// 자동 형 변환
const one = "20";
const two = 25;
const result = one - two;
console.log(typeof result);

// 수동 형 변환 : Number // parseInt / parseFloat
const str = parseFloat("20");
console.log(typeof str);

const num99 = "17.8";
console.log(parseInt(num99));
console.log(parseFloat(num99));

const num77 = "77";
console.log(typeof num77.toString());
console.log(typeof String(num77));
