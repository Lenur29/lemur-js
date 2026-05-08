export type Question = {
  id: string;
  text: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export type Attempt = {
  pickedIndex: number;
  isCorrect: boolean;
};

export const QUESTIONS: Record<string, Question[]> = {
  closures: [
    {
      id: 'cl1',
      text: 'What does this code log?',
      code: 'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = makeCounter();\nc(); c(); console.log(c());',
      options: ['1', '2', '3', 'undefined'],
      correctIndex: 2,
      explanation:
        'The closure captures `count` by reference. Each call increments it, so the third call logs 3.',
    },
    {
      id: 'cl2',
      text: 'What gets logged?',
      code: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}',
      options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
      correctIndex: 1,
      explanation:
        '`var` is function-scoped — there is one shared `i`. By the time the timeouts run, the loop has finished and `i` is 3.',
    },
    {
      id: 'cl3',
      text: 'Replace `var` with which keyword to fix the previous example?',
      options: ['const', 'let', 'static', 'this'],
      correctIndex: 1,
      explanation:
        '`let` creates a new binding for each loop iteration, so each closure captures its own `i`.',
    },
    {
      id: 'cl4',
      text: 'Which best describes a closure?',
      options: [
        'A function bundled with references to its surrounding state',
        'A class with private members',
        'A function that returns a Promise',
        'A function with no parameters',
      ],
      correctIndex: 0,
      explanation:
        'A closure is the combination of a function and the lexical environment within which it was declared.',
    },
    {
      id: 'cl5',
      text: 'What does this print?',
      code: 'function outer() {\n  let x = 10;\n  return function inner() {\n    x++;\n    return x;\n  };\n}\nconst f = outer();\nconsole.log(f(), f());',
      options: ['11 11', '11 12', '10 11', '10 10'],
      correctIndex: 1,
      explanation:
        'The closure preserves `x` between calls. First call returns 11, second returns 12.',
    },
    {
      id: 'cl6',
      text: 'What is logged?',
      code: 'let funcs = [];\nfor (let i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\nconsole.log(funcs.map(f => f()));',
      options: [
        '[0, 1, 2]',
        '[3, 3, 3]',
        '[0, 0, 0]',
        '[undefined, undefined, undefined]',
      ],
      correctIndex: 0,
      explanation:
        '`let` creates a fresh binding each iteration. Each function closes over its own `i`.',
    },
    {
      id: 'cl7',
      text: 'Which creates a private variable using a closure?',
      options: [
        'const x = 5;',
        'window.x = 5;',
        'const counter = (() => { let n = 0; return () => ++n; })();',
        'class A { #x = 5 }',
      ],
      correctIndex: 2,
      explanation:
        'An IIFE returning a function creates a closure over `n` that nothing outside can access.',
    },
  ],
  promises: [
    {
      id: 'pr1',
      text: 'What is the output order?',
      code: 'console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);',
      options: ['1 2 3 4', '1 4 3 2', '1 4 2 3', '1 3 4 2'],
      correctIndex: 1,
      explanation:
        'Sync code first (1, 4). Then microtasks (Promise → 3). Then macrotasks (setTimeout → 2).',
    },
    {
      id: 'pr2',
      text: 'What does this resolve to?',
      code: 'Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x + 1))\n  .then(console.log);',
      options: ['1', '2', '3', '4'],
      correctIndex: 2,
      explanation:
        '1 + 1 = 2, then 2 + 1 = 3 (the inner `Promise.resolve` unwraps automatically).',
    },
    {
      id: 'pr3',
      text: 'What is logged?',
      code: 'async function f() { return 42; }\nf().then(console.log);',
      options: ['Promise<42>', '42', 'undefined', '[object Promise]'],
      correctIndex: 1,
      explanation:
        'An async function returns a Promise. `then` unwraps the resolved value.',
    },
    {
      id: 'pr4',
      text: 'Which is fastest for fetching N independent URLs?',
      options: [
        'for (let url of urls) await fetch(url);',
        'await Promise.all(urls.map(u => fetch(u)));',
        'urls.forEach(async u => await fetch(u));',
        'They are all equivalent',
      ],
      correctIndex: 1,
      explanation:
        '`Promise.all` runs them in parallel. The for-await runs sequentially. forEach with async ignores the returned promises.',
    },
  ],
  'this-binding': [
    {
      id: 'th1',
      text: 'What does this log?',
      code: 'const obj = {\n  name: "foo",\n  arrow: () => this.name,\n  regular() { return this.name; }\n};\nconsole.log(obj.arrow(), obj.regular());',
      options: [
        'foo foo',
        'undefined foo',
        'foo undefined',
        'undefined undefined',
      ],
      correctIndex: 1,
      explanation:
        'Arrow functions inherit `this` lexically (likely the module/global scope). Regular methods get `this` from the call site (`obj`).',
    },
    {
      id: 'th2',
      text: 'In strict mode, what is `this` inside a regular function called as `fn()`?',
      options: ['globalThis', 'undefined', 'null', 'the function itself'],
      correctIndex: 1,
      explanation:
        'In strict mode the default `this` is `undefined`. In sloppy mode it would be `globalThis`.',
    },
  ],
  'event-loop': [
    {
      id: 'el1',
      text: 'What is the order of logs?',
      code: 'console.log("a");\nqueueMicrotask(() => console.log("b"));\nsetTimeout(() => console.log("c"), 0);\nconsole.log("d");',
      options: ['a b c d', 'a d b c', 'a d c b', 'a b d c'],
      correctIndex: 1,
      explanation:
        'Sync first (a, d). The microtask queue drains before macrotasks (b before c).',
    },
    {
      id: 'el2',
      text: 'Which is a microtask?',
      options: [
        'setTimeout callback',
        'Promise.then callback',
        'requestAnimationFrame callback',
        'I/O callback',
      ],
      correctIndex: 1,
      explanation:
        'Promise reactions and queueMicrotask schedule microtasks. setTimeout/setInterval/I/O are macrotasks.',
    },
  ],
  prototypes: [
    {
      id: 'pt1',
      text: 'What does this log?',
      code: 'function Animal() {}\nAnimal.prototype.eat = function() { return "eating"; };\nconst a = new Animal();\nconsole.log(a.eat());',
      options: ['eating', 'undefined', 'TypeError', '"function"'],
      correctIndex: 0,
      explanation:
        'Methods on the prototype are accessible via the prototype chain on instances.',
    },
    {
      id: 'pt2',
      text: 'How do you make B inherit from A using ES5 patterns?',
      options: [
        'B.prototype = A.prototype',
        'B.prototype = new A()',
        'B.prototype = Object.create(A.prototype)',
        'B = A',
      ],
      correctIndex: 2,
      explanation:
        '`Object.create(A.prototype)` is the standard pattern. The `new A()` approach calls the constructor unnecessarily.',
    },
  ],
  'type-coercion': [
    {
      id: 'tc1',
      text: 'What does this log?',
      code: 'console.log([] == false, [] === false);',
      options: ['true true', 'true false', 'false false', 'false true'],
      correctIndex: 1,
      explanation:
        '`[]` coerces to "" then 0 with `== false` (also 0). Strict equality with different types is always false.',
    },
    {
      id: 'tc2',
      text: 'Which is NOT falsy?',
      options: ['""', '0', '"0"', 'NaN'],
      correctIndex: 2,
      explanation: 'The string `"0"` is non-empty, so it is truthy.',
    },
  ],
};
