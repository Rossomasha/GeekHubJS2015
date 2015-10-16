// Обёртка функций для движения чтобы иметь возможность задавать им количество шагов.

var a=0;
function up(a){
    for(var i=1; i<a ;i++){
    north();}
    return north();
}
function right(a){
    for(var i=1; i<a ;i++){
    east();}
    return east();
}
function bot(a){
    for(var i=1; i<a ;i++){
    south();}
    return south();
}
function left(a){
    for(var i=1; i<a ;i++){
    west();}
    return west();
}

//Функции для движения по Г-образной направляющей.

function rightBot(){
if (right()){
    while (right() === true);
    rightBot();
}
else if (bot()){
    while (bot() === true);
    rightBot();
} 
else {
    console.log("Г-образный спуск закончен");
}
}
function leftBot(){
if (left()){
    while (left() === true);
    leftBot();
}
else if (bot()){
    while (bot() === true);
    leftBot();
} 
else {
    console.log("Г-образный спуск закончен");
}
}
function leftUp(){
if (left()){
    while (left() === true);
    leftUp();
}
else if (up()){
    while (up() === true);
    leftUp();
} 
else {
    console.log("Г-образный спуск закончен");
}
}
function rightUp(){
if (right()){
    while (right() === true);
    rightUp();
}
else if (up()){
    while (up() === true);
    rightUp();
} 
else {
    console.log("Г-образный спуск закончен");
}
}

// 1 level

while (up() === true); // Метод движения до упора в стену.
console.log("Уровень 1 пройден");

// 2 level

while (right() === true);
console.log("Уровень 2 пройден");

// 3 level

do{bot();
  }while (right() === true); // Передвижение на ОДНУ клетку по Г-образной траектории до упора в препятствие.
console.log("Уровень 3 пройден");

// 4 level

rightBot();


// 5 level

while (left() === true);
while (bot() === true);
while (left() === true);
while (up() === true);
while (left() === true);
while (bot() === true);
while (right() === true);
console.log("Уровень 5 пройден");

// 6 level

while (bot() === true);
while (right() === true);
while (up() === true);
while (right() === true);
while (up() === true);
while (right() === true);
while (bot() === true);
up();
while (left() === true);
while (bot() === true);
while (right() === true);
console.log("Уровень 6 пройден");

// 7 level

bot(11); //Метод движения с заданием количества шагов.
right(4);
while (up() === true);
while (right() === true);
rightBot();
left();
while (bot() === true);
while (right() === true);
while (bot() === true);
right();
