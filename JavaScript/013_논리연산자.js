// 논리 연산자 (&&, ||, !)
let x = true;
let y = false;

x && y; // false
x || y; // true
!y; // true

// 실무에서 많이 사용
!!y;
!!'hello';

!!NaN; // false
!!null; // false
!!undefined; // false

!![]; // true
// 이렇게 사용하지 마시고
Number.isNaN({});
Number.isNaN([]);
// 이것과 object의 길이를 함께 판단하시면 됩니다

// js에서는 아래와 같은 단락평가를 자주 사용합니다.
null && 'hello';
'world' && 'hello';

// 단락 평가는 거의 || 를 사용합니다
let name = '';
name = name || '이름이 입력되지 않음';

// 보통은 3항 연산자 + 단락평가로 사용합니다
let 로그인여부 = true;
로그인페이지 = 로그인여부 && 로그인페이지;

let pw = '';
pw = pw || '패스워드가 입력되지 않았습니다';