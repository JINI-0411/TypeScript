// typeliteral

const d1: number = 1;
/// 숫자 1~5까지만 하고 싶을 때
// const d2: 1 | 2 | 3 | 4 | 5 = 3;

/// d2를 타입으로 지정하고 싶을 때
type angryDepth = 1 | 2 | 3 | 4 | 5;
const d22: angryDepth = 3;

type jobType = "전사" | "마법사" | "궁수" | "도적";

const d2: { id: string; level: number; job: jobType } = {
  id: "지존법사",
  level: 155,
  job: "도적",
};

type Hamburger =
  | "불고기버거"
  | "새우버거"
  | "치즈버거사주세요"
  | "빅맥"
  | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘솔로우" | "해쉬브라운";
type Drinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로스프라이트";

type SetMenu = {
  main: string;
  side: string;
  drink: string;
};

const myMacdonald: SetMenu = {
  main: "빅맥",
  side: "감자튀김",
  drink: "제로스프라이트",
};

//// type subway = 빵, 메인, 치즈, 야채, 소스1, 소스2

type bread = "화이트" | "허니오트" | "하티" | "파마산오레가노" | "플랫브레드";
type main = "새우" | "폴드포크" | "코리안바비큐" | "로티세리" | "참치";
type cheese = "아메리칸" | "모짜" | "슈레드";
type vegitable =
  | "양상추"
  | "토마토"
  | "오이"
  | "피망"
  | "양파"
  | "피클"
  | "할라피뇨"
  | "올리브";
type source =
  | "랜치"
  | "마요"
  | "스윗어니"
  | "허니머슥"
  | "스윗칠리"
  | "바비큐"
  | "핫칠리"
  | "사우스웻";

type subway = {
  bread: bread;
  main: main;
  cheese: cheese;
  vegitable: vegitable[];
  source: source[];
};

const shrimp: subway = {
  bread: "플랫브레드",
  cheese: "모짜",
  main: "새우",
  vegitable: ["양상추", "오이", "토마토"],
  source: ["랜치", "스윗어니"],
};


