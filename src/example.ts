type StringConc = string;

const concat = (a: StringConc, b: StringConc): StringConc => a + b;

console.log(concat('Hello ', 'World'));



interface MyInterface {
    howIDoIt: string;
    simeArray: [number | string];
    withData?: [MyInterface];
}

const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(callbackFn: (prevValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initValue:U): U;
}