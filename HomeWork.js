//Прохождение всего лабиринта одной функцией.
//***********************************************
var step="Begin:", returnAnser=true; //переменные для отслеживания направления и возвращаемого значения при использовании east();
function chit(){
     if (isFree('west')&&(step[step.length-1]!='R')){//проверка свободно ли направление длвижения и не происходит ли реверсивное движение.
        while(isFree('west')){
        west();
        step=step+'L';//Дописывает в переменную в какую сторону было совершено движение.
        };
    }
    else if (isFree('east')&&(step[step.length-1]!='L')){
        while(isFree('east')&&returnAnser!="end"){//Крутить цикл пока east() не вернет "end"
        returnAnser=east();
        step=step+'R';
        };
    }
    else if (isFree('south')&&(step[step.length-1]!='T')){
        while(isFree('south')){
        south();
        step=step+'B';
        };
    }
    else if (isFree('north')&&(step[step.length-1]!='B')){
        while(isFree('north')){
        north()
        step=step+'T';
        };
    }
    else{
        north();
        step=step+"trable-T";//В случае тупика сделать шаг в верх и отметить направление шага в истории как trable-T
    }
}
while (returnAnser!="end"){//Крутим функцию в цикле пока east() не вернет "end"
    chit();
};
//***********************************************

//Обычное прохождение лаберинта.

// 1 level
while (isFree('north')&&north()); // Метод движения до упора в стену.
// 2 level
while (isFree('east')&&east());
// 3-4 level
while (isFree('east')&&east()||isFree('south')&&south());
// 5 level
while (isFree('west')&&west()||isFree('south')&&south());
while (isFree('west')&&west()||isFree('north')&&north());
while (isFree('west')&&west()||isFree('south')&&south());    
while (isFree('east')&&east());
// 6 level
while (isFree('east')&&east()||isFree('south')&&south());
while (isFree('east')&&east()||isFree('north')&&north());
while (isFree('east')&&east()||isFree('south')&&south());
north();
while (isFree('west')&&west()||isFree('south')&&south());  
while (isFree('east')&&east());
// 7 level
var e;
while (isFree('south')&&south());
while (isFree('east')&&east());  
while (isFree('north')&&north());
while (isFree('east')&&east());
while (isFree('east')&&east()||isFree('south')&&south());
while (isFree('west')&&west());
while (isFree('south')&&south());
while (isFree('west')&&west());
while (e!="end"){
    while (isFree('south')&&south());
    while (isFree('east')&&e!="end"){
        e=east();
    }
}