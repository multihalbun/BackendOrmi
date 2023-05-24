function f(x, y) {
    return x + y;
}

// 즉시 실행함수, 정의와 동시에 실행되는 함수
(function (x, y) {
    return x + y;
});

(x, y) => x + y;

// 1. 중괄호가 없으면 return을 생략합니다.
let f2 = (x, y) => x + y;

// 2. 중괄호가 생기면 return이 있어야 합니다.
let f3 = (x, y) => {
    let z = x + y;
    return z;
}

// 3. 파라미터가 1개이면 소괄호도 생략할 수 있습니다.
let f4 = x => x + x;

// 반지름이 입력되면 원의 넓이를 구하는 함수를 화살표 함수로 만들어주세요.
let f5 = r => r ** 2 * Math.PI;

// 다음처럼 여러 값이 입력되었을 때, 가장 큰 값, 가장 작은값, 총합을 출력하는 함수를 만들어주세요.
// 입력 : 함수이름(10, 20, 30, 40)
// 출력 : [40, 10, 100]
function f6(a, b, c, d) {
    max = Math.max(a, b, c, d);
    min = Math.min(a, b, c, d);
    sum = a + b + c + d;
    return [max, min, sum];
}

let f7 = (a, b, c, d) => {
    max = Math.max(a, b, c, d);
    min = Math.min(a, b, c, d);
    sum = a + b + c + d;
    return [max, min, sum];
}