let id: number = 5;
let myName: string = "Georgi";
let isGangsta = true;
let x: any = 5;
x = "Seven";

let ids: number[] = [1, 2, 4, 5]
let fruit: string[] = ["Apples", "Oranges", "Banana"] 

let randoms: any[] = ["Az", 56, [3, 4, 1]]

// Tuple - We can specify the exact types withing an array
let person: [number, string, boolean] = [1, "one", true]

// Tupple array
let employee: [number, string][]

employee = [
    [1, "John"],
    [1, "Jill"],
    [1, "Jimmy"],
]

// Unions
let productId: string | number

productId = 23;
productId = "23";

// Enum
enum Direction {
    Up = 20, 
    Down,
    Left,
    Right
}

enum HeadPart {
    Nose = "Nose",
    Mouth = "Mouth",
    Hair = "Hair",
    Ears = "Ears"
}

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
}

// better way

type User = {
    id: number,
    name: String
}

const windowsUser: User = {
    id: 42,
    name: "James"
}


// Type Assertion
// Explicitly telling the compiler to treat an entity to a differnt type
let customerId: any = 1;
let personId = <number>customerId;
let personaId = customerId as number;

// Functions
// In functions we have to specify the types for the arguments
// we can also give the return value
function addNum(x: number, y: number): number {
    return x + y;
}
//  return can also be a void
console.log(addNum(43, 26))

// Interfaces

interface Car {
    model: string;
    year: number;
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

// Classes
class Professor {
    private id: number
    protected name: string
    subject: string
    
    constructor(id: number, name: string, subject: string) {
        this.id = id,
        this.name = name,
        this.subject = subject
    }

    teach() {
        return `Use the force ${this.name}`
    }
}

const professorX: Professor = new Professor(2, "Xavier", "Mutants")

console.log(professorX.teach())


// Implementing an interface with a class

interface RubicsCube {
    readonly id: number;
    sides: string
    color: string[]
    spin(): string,  // method returns a string
}

class YoloRubiks {
    id: number;
    sides: string
    color: string[]

    constructor(id: number, sides: string ,color: string[]) {
        this.id = id, 
        this.sides = sides,
        this.color = color
    }

    spin() {
        console.log(`first`)
    }
}

// Subclass
class ZoloRubiks extends YoloRubiks {
    position: string

    constructor(id: number, sides: string, color: string[], position: string) {
        super(id, sides, color)
        this.position = position
    }
}

const zolo = new ZoloRubiks(3, "4", ["red", "green"], "relative");

console.log(zolo.spin())

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Gill", "Jimmy", "Howard"])

