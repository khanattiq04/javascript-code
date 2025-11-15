let num = "33"
//console.log(typeof num);
let convertNum = Number(num)
//console.log(typeof convertnum);

let othernum = "33abc"
//console.log(typeof othernum);
let converAnotherNum = Number(othernum)// it converts othernum
//console.log(typeof converAnotherNum);
//console.log(converAnotherNum); //it shows NaN, becuase 33abc is not a number


let score="Attiq"

//console.log(typeof score); // it show string because "Attiq" is string
//console.log(typeof (score));

//let valueInNumber=Number(score) // it convert "Attiq" into number
//console.log(typeof valueInNumber)
//console.log(typeof score)
//console.log(valueInNumber); // this shows NaN(not a number) because score("Attiq")
                            // is not a number but compiler convert it in a number in line 6
                            // after that when we check it and it shows NaN

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"Attiq" => true
