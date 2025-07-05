Playing around with [generator functions][generatorMdn].

The code in [playground.ts](./playground.ts) is meant to be executed in the
[Node.js REPL][nodeREPL]. To do this, open a terminal window, run the `node`
command, then `let { MyComponent } = await import('./playground.ts')`. To create
an instance of the generator, run `let gen = MyComponent()`, then run
`gen.next()` to get values from the generator.

[Prettier][prettier], [ESLint][eslint], and [TypeScript][typescript] have been
set up for convenience and to check for obvious code problems.

[generatorMdn]:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
[nodeREPL]: https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[typescript]: https://www.typescriptlang.org/
