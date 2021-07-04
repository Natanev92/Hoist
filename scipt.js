console.log(hello); 
var hello = 'hello there!';
// var hello;
// console.log(hello);logs undefined 
// hello = 'hello there'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test(); logs undefined
// var needle = 'magnet'
// console.log(needle); logs 'magnet'


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// function print(); undefined, not called
// brendan = 'super cool'
// console.log(brendan); logs 'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food
// food = 'chocken'
// console.log(food); logs 'chicken'
// eat(); funsction is called
// console.log(food); logs 'half-chicken'
// var food = 'gone'; returns undefined



mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var food;
// mean(); trys to con on function before it's defined


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre); logs undefined
// var genre;
// genre = 'disco';
// genre = 'rock';
// conso.log(gebre); logs 'rock'
// genre = 'r&b';
// console.log(genre) logs 'r&b' 
// console.log(genre) logs 'disco'


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = 'san jose';
// console.log(dojo); logs 'san jose'
// learn(); funsction is called
// dojo = 'seattle';
// console.log(dojo); logs 'seattle'
// var dojo;
// dojo = 'burbank'
// console.log(); logs 'burbank'
// console.log(dojo); 'san jose'


