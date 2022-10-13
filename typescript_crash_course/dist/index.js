"use strict";
let id = 5;
let myName = "Georgi";
let isGangsta = true;
let x = 5;
x = "Seven";
let ids = [1, 2, 4, 5];
let fruit = ["Apples", "Oranges", "Banana"];
let randoms = ["Az", 56, [3, 4, 1]];
let person = [1, "one", true];
let employee;
employee = [
    [1, "John"],
    [1, "Jill"],
    [1, "Jimmy"],
];
let productId;
productId = 23;
productId = "23";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 20] = "Up";
    Direction[Direction["Down"] = 21] = "Down";
    Direction[Direction["Left"] = 22] = "Left";
    Direction[Direction["Right"] = 23] = "Right";
})(Direction || (Direction = {}));
var HeadPart;
(function (HeadPart) {
    HeadPart["Nose"] = "Nose";
    HeadPart["Mouth"] = "Mouth";
    HeadPart["Hair"] = "Hair";
    HeadPart["Ears"] = "Ears";
})(HeadPart || (HeadPart = {}));
const user = {
    id: 1,
    name: "John"
};
const windowsUser = {
    id: 42,
    name: "James"
};
let customerId = 1;
let personId = customerId;
let personaId = customerId;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(43, 26));
let bwm = {
    model: "bmw",
    year: 2012,
};
const point1 = 1;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
class Professor {
    constructor(id, name, subject) {
        this.id = id,
            this.name = name,
            this.subject = subject;
    }
    teach() {
        return `Use the force ${this.name}`;
    }
}
const professorX = new Professor(2, "Xavier", "Mutants");
console.log(professorX.teach());
class YoloRubiks {
    constructor(id, sides, color) {
        this.id = id,
            this.sides = sides,
            this.color = color;
    }
    spin() {
        console.log(`first`);
    }
}
class ZoloRubiks extends YoloRubiks {
    constructor(id, sides, color, position) {
        super(id, sides, color);
        this.position = position;
    }
}
const zolo = new ZoloRubiks(3, "4", ["red", "green"], "relative");
console.log(zolo.spin());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Gill", "Jimmy", "Howard"]);
