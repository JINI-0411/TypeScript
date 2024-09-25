//변수
const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션 (a2는 스트링만 들어올수있다고 박아놓은 것)
const a2: string = "1";
const a3: boolean = !!"";

// 배열
const a4: number[] = [1, 2, 3, 4, 5];

// 오브젝트
const a5: {
  name: string;
  isAlve: boolean;
  price: number;
}[] = [
  { name: "박진주", isAlve: true, price: 2000 },
  { name: "민트", isAlve: true, price: 2500 },
];

// age, isMan, nation []

const a6: {
  age: number;
  isMan: boolean;
  nation: string;
}[] = [
  { age: 10, isMan: false, nation: "korea" },
  { age: 20, isMan: true, nation: "japanese" },
];
