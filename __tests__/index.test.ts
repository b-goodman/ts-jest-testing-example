import {compose, curry} from "../src/index";


test("Composes function with 1 parameter", () => {
    const f = (n: number) => n + 1;
    const g = (n: number) => n - 1;
    const h = compose<number>(f,g,g)
    expect(h(1)).toEqual(0)
});

test("Curries function", () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);
    expect( curriedAdd(1)(1) ).toEqual(2);
});


test("Composes function with 2 parameters", () => {
    const f = curry((n: number, j: number) => n + j);
    const g = curry((n: number, j: number) => n - j);
    const h = compose<number>(f(1),g(2),g(3));
    expect(h(1)).toEqual(1)
});

