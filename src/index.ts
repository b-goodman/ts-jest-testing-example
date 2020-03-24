const compose = <T>(...functions:  Array<(...args: T[]) => any>) => (args: T) => {
    return functions.reduceRight((arg, fn) => fn(arg), args)
}

const curry = <T>(f: (...n: T[]) => any ) => {
    return (a: T) => {
      return (b: T) => {
        return f(a, b);
      };
    };
  }

export {compose, curry}