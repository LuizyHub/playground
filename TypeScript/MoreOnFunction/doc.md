# More On Functions

## 함수 타입 표현식
합수를 설명하는 가장 간단한 방법은 _함수 타입 표현식_ 입니다. 
이 타입은 화살표 함수와 문법적으로 유사합니다.

```ts
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);
```

`(a: string) => void`라는 문법은 "문자열 타입 `a`를 하나의 매개변수로 가지고 반환값이 없는 함수"를 의미합니다.
함수 선언처럼, 매개변수의 타입이 지정되지 않으면, 암묵적으로 `any`가 됩니다.

> 매개변수 이름이 _필수_ 라는것을 명심하자. 함수 타입 `(string) => void`는 `any` 타입을 가진 string 이라는 매개변수를 가진 함수를 의미합니다.

물론 타입 별칭을 사용해서 함수의 타입에 이름을 붙일 수 있습니다.
```ts
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
    fn("Hello, World");
}
```

## 호출 시그니처
JavaScript에서, 함수들은 호출이 가능할 뿐만 아니라, 프로퍼티도 가질 수 있습니다.
하지만, 함수 타입 표현식 문법은 프로퍼티를 정의하는 것을 허락하지 않습니다.
만약 우리가 호출 가능하면서 프로퍼티를 가진 무언가를 설명하려고 하면, 객체 타입에 _호출 시그니처_를 사용하여 표현할 수 있습니다.

```ts
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}
```

이 문법은 함수 표현삭과 다릅니다. 매개변수 타입과 반환값의 타입 사이에 `=>` 가 아닌 `:`를 사용해야 합니다.

## 구성 시그니처
JavaScript 함수는 `new` 연산자를 통해서도 호출 될 수 있습니다.
TypeScript는 이런 것들이 주로 새로운 객체를 생성하는데 사용되기 때문에 `생성자` 로 간주합니다.
여러분은 호출 시그니처 앞에 `new` 키워드를 붙임으로서, `구성 시그니처`로 작성할 수 있습니다.
```ts
type SomeConstructor = {
    new (s: string): Object;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

JavaScript의 [`Date` 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#생성자)와 같은 몇몇 객체는 `new`가 있든 없든 호출될 수 있습니다.
여러분은 호출 시그니처와 구성 시그니처를 임의로 같은 타입에서 결합시킬 수 있습니다.
>Date 생성자
> 
>Date()
>함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다.
> 
>new Date()
>생성자로 호출할 경우 새로운 Date 객체를 반환합니다.

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

## 제네릭 함수
입력 값이 출력 값의 타입과 관련이 있거나, 두 입력값의 타입이 서로 관련이 있는 형태의 함수를 작성하는 것은 흔히 일어나는 일입니다.
잠시 배열의 첫 번째 원소를 반환하는 함수를 생각해 봅시다.

```ts
function firstElement(arr: any[]) {
    return arr[0];
}
```

함수는 제 역할을 하지만, 아쉽게도 반환 타입이 `any` 입니다.
함수가 배열 원소의 타입을 반환한다면 더 나을 것 같습니다.

TypeScript에서, _제네릭_ 문법이 두 값 사이의 상관관계를 표현하기 위해서 사용됩니다.


```ts
const s: string = firstElement(["a", "b", "c"]);
const n: number = firstElement([1, 2, 3]);
const u: never = firstElement([]);
```

[](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

> 출처 : [More on Functions](https://www.typescriptlang.org/ko/docs/handbook/2/functions.html)