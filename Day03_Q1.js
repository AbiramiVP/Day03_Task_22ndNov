//How to compare two JSON have the same properties without order?
let obj1 = {"name": "person1", "age":"5"};
let obj2 = { "age":"5", "name": "person1"};
if((obj1[0]===obj2[0] || obj1[0]===obj2[1]) && (obj1[1]===obj2[0] || obj1[1]===obj2[1]) ){
    console.log("Same Properties");
}
else{
    console.log("not Same Properties");
}