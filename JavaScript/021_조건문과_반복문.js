if (condition) {
    console.log('hello');
}

if (false) {
    console.log('hello1');
} else if (false) {
    console.log('hello2');
} else if (true) {
    console.log('hello3');
} else {
    console.log('hello4');
}

if (true) console.log("중괄호를 생략했습니다.")

switch (2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
        break;
}

switch (new Date().getDay()) {
    case 1:
        console.log('월요일입니다.');
        break;
    case 2:
        console.log('화요일입니다.');
        break;
    case 3:
        console.log('수요일입니다.');
        break;
    case 4:
        console.log('목요일입니다.');
        break;
    case 5:
        console.log('금요일입니다.');
        break;
    default:
        console.log('금금요일입니다. 주말이 뭐죠?');
        break;
}

for (let i = 0; index < 10; i++) {
    console.log(i);
}

// 무한반복
for (;;) {
    
}

for (const key in [10, 20, 30]) {
    console.log(key);
}

for (const key in {'one': 1, 'two': 2}) {
    console.log(key);
}

for (const i of [10, 20, 30]) {
    console.log(i);
}

let x = 0;
while (x < 10) {
    console.log(x);
    ++x;
}