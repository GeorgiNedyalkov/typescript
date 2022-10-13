# TypeScript Crash Course

## Install TypeScript

```
npm i typescript
```

## Bascis

When we add a type to a variable. If we try to assign a new type then we get an error.

- Inferred types

### Basic primitive Types:

- number
- string
- boolean
- null
- undefined
- bigInt

We also have a type called _any_ which can be any type.

```typescript
let id: number = 5
let myName: string = "Georgi"
let isGangsta = true
let x: any = 5
x = "Seven"

let ids: number[] = [1, 2, 4, 5]
let fruit: string[] = ["Apples", "Oranges", "Banana"]

let randoms: any[] = ["Az", 56, [3, 4, 1]]
```

### Tuple

In an array can specify which types there can be in it with a tupple. They also have to be in the exact same order.

```typescript
let person: [number, string, boolean] = [1, "one", true]

// Tupple array
let employee: [number, string][]

employee = [
  [1, "John"],
  [1, "Jill"],
  [1, "Jimmy"],
]
```

### Unions

Unions allow us to use the pipe character to let a variable have more than one types.

```typescript
let productId: string | number

productId = 23
productId = "23"
```

### Enum

```typescript
enum Direction {
  Up = 20,
  Down,
  Left,
  Right,
}

enum HeadPart {
  Nose = "Nose",
  Mouth = "Mouth",
  Hair = "Hair",
  Ears = "Ears",
}
```

## TypeScript Compiler

TypeScript code gets compiled to a JavaScript file before it runs. Thins is done with the `tsc` command followed by the name of the file.

```
tsc <filename>
```

The code still compiles to a JS file and executes but we get an error in the compile time and an linter error in our development environment.

By default TS compiles to ES3 but we can specify which version is used in the tsconfig file.

We can also watch a file.

```
tsc --watch <filename>
```

## TypeScript Configuration

To setup a configuration file we can do

```
tsc --init
```

We can also compile with just `tsc` and it compiles all TS files with.

We can configure where our JS code compiles to with outDir and rootDir properties in tsconfig. We create a src directory for root and dist directory where we output our js file.

We can also remove comments. So that our comments are not compiled to the JS file.

## Directory Structure

- Src
- Dist
