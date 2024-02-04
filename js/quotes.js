const quotes = [
  {
    quotes: "우리는 자기 결정을 위한 운명의 순간을 종종 뒤돌아보고서야 깨닫는다",
    author: "파스칼 메르시어",
  },
  {
    quotes: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
    author: "볼드윈",
  },
  {
    quotes: "최고에 도달하려면 최저에서 시작하라",
    author: "P.시루스",
  },
  {
    quotes: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 그대로 될것이다",
    author: "헨리 포드",
  },
  {
    quotes: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quotes: "1퍼센트의 가능성 그것이 나의 길이다",
    author: "나폴레옹",
  },
  {
    quotes: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스 다윈",
  },
  {
    quotes: "행복은 습관이다, 그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quotes: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다",
    author: "괴테",
  },
  {
    quotes: "계단을 밟아야 계단 위에 올라설 수 있다",
    author: "터키 속담",
  },
];
const randomNumber = Math.floor(Math.random() * quotes.length);
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = quotes[randomNumber].quotes;
author.innerText = quotes[randomNumber].author;
