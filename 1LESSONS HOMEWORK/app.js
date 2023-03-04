//FUNCTIONS 1
export default function doSomething() { }

export const doSomething = () => { }

// 2

const myComponent = () => {
    return <div></div>
}

// 3

<button
    onClick={() => {
        console.log("hello world");
    }}
></button>

// 4

if (true) {

} else {

}

// 5

let age1 = 16;
let name1 = age1 > 10 && "Pedro";

// 6

let age2 = 16;
let name2 = age2 > 10 || "Pedro";

// 7

let age3 = 16;
let name3 = age3 > 10 ? "Pedro" : "Jack";

// 8

let age4 = 16;
let name4 = age4 > 10 ? "Pedro" : "Jack";

const component = () => {
    return age4 > 10 ? <div>Pedro</div> : <div>Jack</div>
}

// ONJECTS 1

const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const name = person.name
const age = person.age
const isMarried = person.isMarried

// 2

const person2 = {
    namE: "Pedro",
    agE: 20,
    isMarriEd: false,
};

const { namE, agE, isMarriEd } = person2;

// 3 

const nAme = "Pedro";

const person3 = {
    namE: nAme,
    agE: 20,
    isMarriEd: false,
};

// 4

const person4 = {
    naME: nAme,
    agE: 20,
    isMarriEd: false,
};

const person5 = { ...person4, naME: "Jack" };

// 5

const person6 = {
    naME: nAme,
    agE: 20,
    isMarriEd: false,
};

const person7 = { ...person4, naME: "Jack" };

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];

// MAP FILTER REDUSE 1

let userNames = ["Pedro", "Carol", "Jessica"];

userNames.map((userName) => {
    return userName + "1"
})

// 2

let userNames2 = ["Pedro", "Carol", "Jessica", "Pedro"];

userNames2.filter((userName2) => {
    return userName2 !== "Pedro"
})
