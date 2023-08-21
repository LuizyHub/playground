type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

type SomeConstructor = {
    new (s: string): Object;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

const s: string = firstElement(["a", "b", "c"]);
console.log(s[3]);
const n: number = firstElement([1, 2, 3]);
const u: never = firstElement([]);