declare const compose: <T>(...functions: ((...args: T[]) => any)[]) => (args: T) => T;
declare const curry: <T>(f: (...n: T[]) => any) => (a: T) => (b: T) => any;
export { compose, curry };
