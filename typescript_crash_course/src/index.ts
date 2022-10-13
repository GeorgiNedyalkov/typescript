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

