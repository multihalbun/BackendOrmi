// 1부터 100까지 더하기
let s = 0;
for (let i = 1; i <= 100; i++) {
    s += i;
}

s = 0;
let i = 1;
while (i < 101) {
    s += i;
    i++;
}

// 1부터 100까지 짝수만 더하기
s = 0;
for (let i = 0; i < 101; i+=2) {
    s += i;
}

s = 0;
i = 0;
while (i < 101) {
    if (i % 2 === 0) {
        s += i;
    };
    i++;
}

// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만 다 더해주세요.

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];
s = 0;
for (const i of data) {
    if (i < 5) {
        s += i;
    }
}

data.reduce((a, c) => c < 5 ? a + c : a, 0);

// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.

data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1'];
s = 0;
for (const i of data) {
    if (typeof(i) == 'number') {
        s += i;
    }
}

// 타입체크
function typeCheck(value){
    return Object.prototype.toString.call(value);
}

// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
    return Array.from(my_string).filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('');
}

// 용돈은 매년 2배씩 오릅니다.
// 올해 받은 용돈은 10000원입니다.
// 나이는 8살입니다.
// 30만원 이상이 되면 용돈이 더이상 오르지 않습니다.
// for와 coninue 문법을 써서 8살부터 35살까지 받은 용돈의 총합을 구하세요.
let money = 10000;
let sum = 0;
for (let i = 8; i <= 35; i++) {
    sum += money;
    if (money >= 300000)
        continue;
    money *= 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120850

// isNaN을 사용하면 숫자는 false가 나옵니다.
// 문자는 true가 나옵니다.

function solution(my_string) {
    my_string
        .split("")
        .filter(v => !isNaN(v))
        .map(v => v * 1)
        .sort((a, b) => a - b);
}