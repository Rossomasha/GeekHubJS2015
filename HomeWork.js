//Прохождение всего лабиринта одной функцией.
//***********************************************
var step="Begin:", returnAnser=true; //переменные для отслеживания направления и возвращаемого значения при использовании east();
function chit(){
     if (isFree('west')&&(step[step.length-1]!='R')){//проверка свободно ли направление длвижения и не происходит ли реверсивное движение.
        while(isFree('west')){
        west();
        step=step+'L';//Дописывает в переменную в какую сторону было совершено движение.
        map();
        };
    }
    else if (isFree('east')&&(step[step.length-1]!='L')){
        while(isFree('east')&&returnAnser!="end"){//Крутить цикл пока east() не вернет "end"
        returnAnser=east();
        step=step+'R';
        map();
        };
    }
    else if (isFree('south')&&(step[step.length-1]!='T')){
        while(isFree('south')){
        south();
        step=step+'B';
        map();
        };
    }
    else if (isFree('north')&&(step[step.length-1]!='B')){
        while(isFree('north')){
        north()
        step=step+'T';
        map();
        };
    }
    else{
        north();
        step=step+"trable-T";//В случае тупика сделать шаг в верх и отметить направление шага в истории как trable-T
    }
}

while (returnAnser!="end"){//Крутить цикл пока east() не вернет "end"
    chit();
};
//***********************************************

//Обычное прохождение лаберинта.

// Обёртка функций для движения чтобы иметь возможность задавать им количество шагов.

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
    if (isFree('east')){
        while (isFree('east')&&right());
        rightBot();
    }
    else if (isFree('south')){
        while (isFree('south')&&bot());
        rightBot();
    } 
}
function leftBot(){
    if (isFree('west')){
        while (isFree('west')&&left());
        leftBot();
    }
    else if (isFree('south')){
        while (isFree('south')&&bot());
        leftBot();
    } 
}
function leftUp(){
    if (isFree('west')){
        while (isFree('west')&&left());
        leftUp();
    }
    else if (isFree('north')){
        while (isFree('north')&&up());
        leftUp();
    } 
}
function rightUp(){
    if (isFree('east')){
        while (isFree('east')&&right());
        rightUp();
    }
    else if (isFree('north')){
        while (isFree('north')&&up());
        rightUp();
    } 
}

// 1 level

while (isFree('north')&&up()); // Метод движения до упора в стену.
console.log("Уровень 1 пройден");

// 2 level

while (isFree('east')&&right());
console.log("Уровень 2 пройден");

// 3-4 level

rightBot();
console.log("Уровень 3 и 4 пройден");

// 5 level

leftBot();
leftUp();
leftBot();
while (isFree('east')&&right());
console.log("Уровень 5 пройден");

// 6 level

rightBot();
rightUp();
rightBot();
up();
leftBot();
while (isFree('east')&&right());
console.log("Уровень 6 пройден");

// 7 level

bot(11); //Метод движения с заданием количества шагов.
right(4);
while (isFree('north')&&up());
while (isFree('east')&&right());
rightBot();
left();
while (isFree('south')&&bot());
while (right()!="end"){
    while (isFree('east')&&right());
    while (isFree('south')&&bot());
};
console.log("Уровень 7 пройден");
