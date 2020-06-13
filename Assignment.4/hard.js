//question-1

console.log('\nOutput Of Hard Question-1:');

function realType(value){
    if(value == null){
    return '"null"';
    }
    switch(typeof value){
    case(typeof 0): 
        return '"Number"';
    case(typeof ''):        
        return '"String"';
    case(typeof true):      
        return '"Boolean"';
    case(typeof []):        
        return '"Array"';
    default:                
        return 'use correct value type!!';
    }
}
console.log(realType (1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));

//question-2

console.log('\nOutput Of Hard Question-2:');

function numInStr(arrOfStr){
    let strHaveNum = arrOfStr.filter( function (element){
        if(element.includes('0') || element.includes('1')|| element.includes('2')|| element.includes('3') || element.includes('4')|| element.includes('5')||element.includes('6') || element.includes('7')|| element.includes('8')|| element.includes('9')){
            return true;
        }
       
    });
    return  "string having numbers are :"+strHaveNum;
}

console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log(numInStr (['abc', 'abc10']));
console.log(numInStr (['abc', 'ab10c', 'a10bc', 'bcd']));
console.log(numInStr (['this is a test', 'test1']));

