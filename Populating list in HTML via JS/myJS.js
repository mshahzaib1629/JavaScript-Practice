
// here creating an array of objects
var person = [
    {
        name: 'shahzaib',
        id: 100,
        mail: 'mshahzaib1629@gmail.com'
    },
    {
        name: 'ali',
        id: 101,
        mail: 'ali@gmail.com'
    },
    {
        name: 'bilal',
        id: 102,
        mail: 'bilail@gmail.com'
    }
]

var listItem = '';

for(var i=0; i<person.length; i++){
    listItem += '<li>' + person[i].name + '</li>'; 
}
console.log(person);
document.getElementById('myList').innerHTML = listItem;