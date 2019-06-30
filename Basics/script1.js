

var person = {
    firstName: "Shahzaib",
    lastName: "Minhas",
    family: ["Mama", "Papa", 'Sister', "Ali"]
}

var names = ['ali', 'ahmad', 3332, 'waleed'];
person.age = 23;
person.family.push('wifi');
console.log(person[0]);

for(var i=0; i<names.length; i++){
    if(typeof names[i] !== 'string') 
    continue;
    console.log(names[i]);
}


for(var i=0; i<names.length; i++){
    if(typeof names[i] !== 'string') 
    break;
    console.log(names[i]);
}