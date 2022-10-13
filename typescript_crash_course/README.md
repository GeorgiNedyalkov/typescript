# TypeScript Crash Course

## Install TypeScript

```
npm i typescript
```

## Bascis

When we add a type to a variable. If we try to assign a new type then we get an error.

- Inferred types

### _Basic primitive Types_:

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

### _Tuple_

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

### _Unions_

Unions allow us to use the pipe character to let a variable have more than one types.

```typescript
let productId: string | number

productId = 23
productId = "23"
```

### _Enum_

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

### _Objects_

We can define objects using `type` to specify the objects structure and types

```typescript
const user: {
  id: number
  name: string
} = {
  id: 1,
  name: "John",
}

// better way

type User = {
  id: number
  name: String
}

const windowsUser: User = {
  id: 42,
  name: "James",
}
```

We can assert a given type with type assertions

```typescript
let customerId: any = 1
let personId = <number>customerId
let personaId = customerId as number
```

### _Functions_

With functions we can define the types of the arguments as well as the return type

```typescript
function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(43, 26))
```

### _Interfaces_

Interfaces help us define objects.
Unlike `type` interfaces cannot use primitive or unions.
We can also specify properties that are readonly.

```typescript
interface Car {
  model: string
  year: number
  color?: string
}

let bwm: Car = {
  model: "bmw",
  year: 2012,
}

type Point = number | string

const point1: Point = 1

// with interface we can't use primitives or unions
// we can also have optional properties and readonly properties
// we can specify readonly properties

interface MathFunc {
  (X: number, y: number): number
}

const sub: MathFunc = (x: number, y: number): number => x - y
const div: MathFunc = (x: number, y: number): number => x / y
```

### _Classes_

With classes we can have access modifiers: public (default), private and protected.
Private can only be used in the class instance.

```typescript
class Professor {
  private id: number
  protected name: string
  subject: string

  constructor(id: number, name: string, subject: string) {
    ;(this.id = id), (this.name = name), (this.subject = subject)
  }

  teach() {
    return `Use the force ${this.name}`
  }
}

const professorX: Professor = new Professor(2, "Xavier", "Mutants")

console.log(professorX.teach())
```

### Using interface with classes

```typescript
// Implementing an interface with a class

interface RubicsCube {
  readonly id: number
  sides: string
  color: string[]
  spin(): string // method returns a string
}

class YoloRubiks {
  id: number
  sides: string
  color: string[]

  constructor(id: number, sides: string, color: string[]) {
    ;(this.id = id), (this.sides = sides), (this.color = color)
  }

  spin() {
    console.log(`first`)
  }
}
```

### _Subclasses_

```typescript
class ZoloRubiks extends YoloRubiks {
  position: string

  constructor(id: number, sides: string, color: string[], position: string) {
    super(id, sides, color)
    this.position = position
  }
}

const zolo = new ZoloRubiks(3, "4", ["red", "green"], "relative")

console.log(zolo.spin())
```

### Generics

```typescript
// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Gill", "Jimmy", "Howard"])
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

## TypeScript with React

We can include typescript with create-react-app
