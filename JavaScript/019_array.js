const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5 ,6);

const arr = [[10, 20], 2, 3, 4, 5];
arr[0];
arr[0][0];
arr.length;
arr.pop();
arr.pop(1); // 들어가는 값과 상관없이 마지막 값을 꺼냅니다.
arr.push(100);

const arr4 = [1, 2, 3, 4, 5];
arr4.shift();
arr4.unshift(100);
arr4.unshift(1000, 2000, 3000);

const arr5 = [1, 2, 3, 4, 5];
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, changeitem)
arr5.splice(1, 0, 100);
arr5;

arr5.splice(1, 1, 1000);
arr5;

arr5.splice(1, 1, 10000, 20000);
arr5;

const arr6 = [1, 2, 3, 4, 5];
arr6.slice(2, 5) // arr[2:5]

// 사전식 정렬 (문자열 정렬처럼 봅니다.)
const arr7 = [1, 11, 2, 3, 7, 8, 22, 5];
arr7.sort();

// 오름차순
arr7.sort((a, b) => a - b);

// 내림차순
arr7.sort((a, b) => b - a);

// forEach는 반복만 합니다.
// 새로운 arr를 만들고 싶다면 map을 사용해주세요.
const arr8 = [1, 11, 2, 3, 7, 8, 22, 5];
arr8.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
});

const arr9 = [1, 11, 2, 3, 7, 8, 22, 5];
arr9.forEach((v, i) => {
    console.log(v); // value
    console.log(i); // index
});

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/
const arr10 = [1, 11, 2, 3, 7, 8, 22, 5];
arr10.forEach((v, i) => {
    const tag = document.getElementById(i);
    tag.innerHTML = v;
});

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr11.filter(el => el % 2 === 0);

console.log(newArr);

// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
// 배열의 요소 count
function solution(array, n) {
    return array.filter(v => v == n).length;
};

// map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용합니다.
[1, 2, 3, 4].map(x => x**2);

////

[[10, 20], [20, 30], [30, 40]].map(v => v);
[[10, 20], [20, 30], [30, 40]].map(v => v[0]);
// 성이 3글자라는 전재를 하고
// 3글자씩만 뽑아내겠습니다.
['leehojun', 'sinhojun', 'kimhojun'].map(v => v[0]);
['leehojun', 'sinhojun', 'kimhojun'].map((v, i) => [v.slice(0, 3), i]);

////

[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(x => x.age);

let data = [{
    name: 'lee hojun',
    age: 10
}, {
    name: 'kim junho',
    age: 20
}, {
    name: 'sin sunghun',
    age: 30
}];

data.map((x, i) => [i, x.name.split(' ')[1], x.age-1]);