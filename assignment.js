//assignment no 1 

function feetToMile(feet){

    var mile= feet/5280;
    return mile;
}
var ans=feetToMile(500);
console.log(ans);


//assignment no 2

/*function woodCalculator(chair,table,khat){

    var chairWood=chair*1;
    var tableWood=table*3;
    var khatWood=khat*5;

    var totalWood = chairWood+ tableWood +khatWood;
    return totalWood;
    if (totalWood <=0){
        console.log('0 or negative no cannot possible');
    }

}
var needWood=woodCalculator(0,0,0);
console.log(needWood);
*/

//assignment 3

//brickCalculator

/*

function brickCalculator(storied){

    var feet=1000 ;
    var stryd1;
    var stryd2;
    var stryd2;


if(storied<=10){

   var stryd1= feet  *15 * storied;
   return stryd1;
}
else if(storied >=11 && storied<=20){
    var stryd2= feet * 12 * storied;
    return  stryd1+ stryd2;
}
else if(storied >=21){
     var stryd3= feet * 10 * storied;
     return stryd1+ stryd2 + stryd3;
}

}

 var countBrick=brickCalculator(10);
 console.log(countBrick);



*/


//assignment 4

//finding short length of friend name

/*function tinyFriend(persons) {
    let shortLength = Infinity;
    let tiny = "";

    if (persons.length > 0) {
        for (let i = 0; i < persons.length; i++) {
            if (typeof persons[i] === 'string' && persons[i].length < shortLength) {
                tiny = persons[i];
                shortLength = persons[i].length;
            }
        }
    }

    return tiny;
}

var ans = tinyFriend(['Minhaz','Sanwar', 'Javed']);
console.log(ans);

*/
