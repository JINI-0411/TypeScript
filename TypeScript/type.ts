/// 숫자도 문자도 사용하고 싶을 때, 합집합 // |(union) : or
const b: string | number = "1";

// 배열이면서 name[문자],age[문자 or 숫자]
const b1: { name: string; age: string | number }[] = [
  { name: "뾰롱", age: "10" },
  { name: "삐롱", age: 10 },
];

// &(intersection [and])
// const b2:string & number => never 타입 // 그딴거 없어서 never라고 뜸 /// 그래서 아래처럼 사용함
const b2: { name: string } & { age: number } = { age: 21, name: "잼잼" };

// 모든타입 가능
const b3: any = "123";
const b33: any = { name: "뭐든ok" };

const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;
//제곱돌려주는 함수
const b5: (x: number) => number = (x) => x ** 2;
