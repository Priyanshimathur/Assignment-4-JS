//question-1

console.log('\nOutput Of Very Easy Question-1:')

function time(minutes)
{
    var seconds =  minutes * 60;
    return minutes+" minutes = "+ seconds + " seconds";
}
console.log(time(5));
console.log(time(3));
console.log(time(2));


//question-2

console.log('\nOutput Of Very Easy Question-2:')

/*let a;
let b;
let division = function(a,b)
{
    return a / b;
}
let result = division(98/7)

console.log('Answer(98/7):',result)

if(result % 2 == 0){
    console.log('true');
    console.log('a evenly divides by b');
}
else{
    console.log('false')
}
*/
//OR
function dividesevenly(a,b)
{
    if(a % b == 0){
        console.log('True'); 
    }
    else{
        console.log('False');
    }
}
dividesevenly(98,7);
dividesevenly(85,4);