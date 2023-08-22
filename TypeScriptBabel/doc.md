# TypeScript & Babel

## 서론

### [Babel 이란?](https://babeljs.io/docs/)

Babel은 JavaScript 컴파일러이다.

아니, 컴파일러라고? 

자바스크립트는 컴파일 언어가 아닌데??

맞다. 하지만, Babel은 최신 문법이 구형 버전에서 동작할 수 있도록 컴파일해준다.

JS -> JS(원하는 버전)


### [TypeScript란?](https://www.typescriptlang.org)
TypeScript는 JavaScript를 기반으로 한 강력한 타입의 프로그래밍 언어로, 어떤 규모에서도 더 나은 도구를 제공한다.

TypeScript는 JavaScript의 완전한 super set 상위 집합이며, TypeScript 코드는 JavaScript로 변환된다.

이때, 원하는 버전의 자바 스크립트 버전으로 컴파일 할 수 있다.

TS -> JS(원하는 버전)

### 둘의 조합?

Babel의 가장 큰 목적은 원하는 버전에서도 동작하게 JavaScript 를 컴파일 해준다. 

하지만, TypeScript를 쓴다면 컴파일할때 원하는 버전으로 동작하게 할 수 있다.

그렇다면, 둘이 같이 사용할 필요가 없지 않은가?

사실 나도 모르게 [Jest르 사용할때](https://code-l.tistory.com/17) Babel을 사용했었다.

하지만, TypeScript와 Babel은 완벽한 한쌍이다.

그 이유를 알아보자.

---

## 1. Babel을 사용하고 있지 않다면 반드시 그래야 한다.

### 아무 문제 없이 최신 Javascript 문법을 사용하라

자바스크립트 코드가 오래된 브라우저에서 실행되어야 하나요? 문제 없다. 

Babel이 코드를 변환하여 모든 것이 원활하게 동작하도록 만든다. 그러니 걱정하지 마시고 최신 기능을 마음대로 사용하자!

TypeScript 컴파일러에도 비슷한 기능이 있다. 

target을 ES5 또는 ES6과 같이 설정하여 활성화할 수 있다. 

그러나 Babel 설정은 [babel-preset-env](https://babeljs.io/docs/babel-preset-env/)로 개선된다. 

특정 JavaScript 기능을 ES로 명시하는것 대신 필요한 환경(node, 브라우저)을 설정할 수 있다!

```json
"targets": {
	"browsers": ["last 2 versions", "safari >= 7"],
	"node": "6.10"
}
```

### Babel은 설정 옵션이 용이하다
JSX가 필요한가? Flow가 필요한가? TypeScript가 필요한가? 플러그인을 설치하고 Babel이 처리할 수 있습니다. 

공식 플러그인의 많은 선택지와 대부분이 미래의 JavaScript 구문을 다루는 제3자 플러그인도 있습니다. 

lodash 임포트를 개선하거나 console.log를 강화하거나 console.log를 제거하는 데 사용할 수 있는 많은 제3자 플러그인도 있습니다.

멋진-babel 목록에서 더 많은 내용을 찾아보자.

---

## 2. 단일 컴파일러로 관리하는것은 쉽다

놀라운 타입 체크 기능을 제공하는 TypeScript 자체 컴파일러가 필요하다.

### 우울했던 Babel의 과거 Babel 7 이전
두 개의 별개 컴파일러(TypeScript 및 Babel)를 연결하는 것은 쉬운 일이 아닙니다. 

컴파일 흐름은 다음과 같아진다: TS > TS 컴파일러 > JS > Babel > JS(다시).

이 문제를 해결하기 위해 종종 웹팩을 사용합니다. 

웹팩 설정을 조정하여 *.ts 파일을 TypeScript에 공급한 다음 결과물을 Babel에 공급합니다. 그런데 어떤 TypeScript 로더를 사용해야 할까요?

이 부분이 대부분의 사람들이 번아웃되고 TypeScript를 "너무 어려워" 포기해 버립니다.

### 밝고 환한 미래 Babel 7 이후
하나의 JavaScript 컴파일러가 있는 것이 좋을까? 코드에 ES2015 기능, JSX, TypeScript 또는 미친 맞춤 기능이 있는 경우에도 컴파일러가 무엇을 해야 할 지 알고 있다.

바로 이것 Babel이다.

Babel을 단일 컴파일러로 작동하도록 허용함으로써 두 개의 컴파일러를 관리하고 구성하거나 복잡한 웹팩 마법으로 병합할 필요가 없습니다.

이것은 JavaScript 생태계 전체를 단순화시킨다. linters, test runners, build systems 및  서로 다른 컴파일러를 지원해야 하는 대신, 그냥 Babel을 지원하면 됩니다.

그런 다음 Babel을 구성하여 특정 요구사항을 처리하면 됩니다. [ts-node](https://github.com/TypeStrong/ts-node), [ts-jest](https://github.com/kulshekhar/ts-jest), [ts-karma](https://github.com/monounity/karma-typescript), create-react-app-typescript 등을 버리고 Babel 지원을 사용해보자.

Babel 지원은 어디에나 있으며, [Babel 설정 페이지](https://babeljs.io/setup)를 확인해 보자.

---

## 3. 빛의 속도 컴파일

Babel은 TypeScript 코드를 어떻게 처리할까? 제거한다.

그렇다, 모든 TypeScript를 "일반" JavaScript로 변환한 다음 그대로 진행합니다.

이것은 비록 이상하게 들리지만, 이 접근법에는 두 가지 강점이 있습니다.

첫 번째 강점: ⚡️⚡️매우 빠릅니다.⚡️⚡️

대부분의 TypeScript 개발자는 개발 / 워치 모드 중에 느린 컴파일 시간을 경험한다.

코드를 작성하고 파일을 저장하면... 여기에 와서... 그리고... 마침내 변경 사항을 볼 수 있습니다. 

어떤 오타를 만들었다면, 그것을 수정하고 저장하고... 어떤 것도 아니네요. 귀찮고 흥미를 잃을 만큼 충분히 느리다.


TypeScript 컴파일러를 비난하기는 어렵다. 많은 일을 하고 있습니다. 

타입 정의 파일 (`*.d.ts`)을 검색하고 `node_modules` 내부에서도 검색하여 코드가 올바르게 사용되었는지 확인한다.

이것은 많은 사람들이 TypeScript 타입 체크를 별도의 프로세스로 분리하는 이유입니다. 

그러나 Babel + TypeScript 조합은 Babel의 우수한 캐싱과 단일 파일 방출 아키텍처 덕분에 더 빠른 컴파일을 제공합니다.


그래서 Babel이 TypeScript 코드를 제거한다면, TypeScript를 사용하는 이유는 무엇일까? 이것이 두 번째 강점으로 이어집니다.

---

## 4. 코드 검사를 준비할때만 타입 오류를 확인한다

코드를 함께 테스트하고, 아이디어가 유효한지 확인하기 위해 빠르게 해결책을 작성합니다. 파일을 저장하고 TypeScript가 이런 메시지를 보여줍니다:

> "아니요! 나는 이 코드를 컴파일하지 않겠어요! 당신의 코드는 42개의 다른 파일에서 망가졌습니다!"

네, 망가졌습니다. 아마 몇 가지 유닛 테스트도 망가졌을 겁니다. 하지만 이 시점에서는 단순히 실험 중입니다.
항상 모든 코드가 항상 타입 안전한지 확인하는 것은 화날 정도로 괴로운 일입니다.

이것이 컴파일 중에 Babel이 TypeScript 코드를 제거하는 것의 두 번째 강점입니다.
코드를 작성하고 저장하면 타입 안전성을 확인하지 않고 (매우 빠르게) 컴파일합니다.
코드를 검사할 준비가 될 때까지 솔루션을 실험적으로 유지하세요. 

그래서 어떻게 타입 오류를 확인하나요? TypeScript 컴파일러를 호출하는 npm run check-types 스크립트를 추가하세요.
npm test 명령을 먼저 타입을 확인한 다음 유닛 테스트를 계속 실행하도록 변경합니다.

## 이제 TypeScript와 Babel 을 함께 이용해보자!!
다음 포스트에 이어집니다...




## 출처
> [@babel/preset-typescript](https://babeljs.io/docs/babel-preset-typescript)

> [Using Babel with TypeScript](https://www.typescriptlang.org/ko/docs/handbook/babel-with-typescript.html)

> [TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)