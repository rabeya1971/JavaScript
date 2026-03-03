/*
Data Types
    1. Primitive (Imutable-value can't be changed)
        1. Number - Integer, Floating Point
            let price = 123 or 45;
        2. String - Text
            let name = "Rabeya";
        3. Boolean - True or False
            let  isStudent = False;
        4. Null - Empty Value
            let amount = null;
        5. Undefined - value not assigned
            let address;
        6. Symbol - unique Identifire
            let uniqueId = Symbol("Id");
        7. BigInt - very large integer
            let bigNumber = 454545556566767565656565656767565656567567r;
    2. Non-primitive(Mutable-value can be changed)
        1. Object
        2. Array
        3. Function(Object)    
*/
//Object
let product = {
    name: "Mobile",
    price: 2000
}

//Array
let fruits = ["Mango", "Banana", "Orange", "Apple"];
fruits[2] = "Lychee";
//console.log(fruits[0]);
console.log(fruits);//output:(4) ['Mango', 'Banana', 'Lychee', 'Apple']

let text = "ProjuktiPlus";
text[0] = "M";
//console.log(text[0]);
console.log(text);//output: ProjuktiPlus(no change)

let numOne = 4;
let numTwo = 4;
console.log( numOne === numTwo);//output: true;

let userOne = {
    name: "Rabeya",
    Country: "Bangladesh"
}

let userTwo = {
    name: "Rabeya",
    Country: "Bangladesh"
}
console.log( userOne === userTwo);
