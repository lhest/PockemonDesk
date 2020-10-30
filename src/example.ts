type StringConc = string;

const concat = (a: StringConc, b: StringConc): StringConc => a + b;

console.log(concat('Hello ', 'World'));