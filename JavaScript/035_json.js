// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);


const json1 = '[1, 2, 3]';
const obj1 = JSON.parse(json1);
console.log(obj1);

const json2 = { "result": true, "count": 42 }
const s = JSON.stringify(json2)
s

// JSON을 이용한 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);