//assignment no 1 

/*function feetToMile(feet){

    var mile= feet/5280;
    return mile;
}
var ans=feetToMile(200);
console.log(ans);

*/
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







//assignment 4

//finding short length of friend name

function tinyFriend(persons) {
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


