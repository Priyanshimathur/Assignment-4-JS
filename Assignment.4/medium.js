//question-1
console.log('\nOutput Of Medium Question-1:');

function reverseString(str,letter) {
    let words = str.toLowerCase().split(' ');
    for(let i = 0; i<words.length; i++){
        if(words[i][0] == letter){
            words[i] = words[i].split('').reverse('').join('');
        }
    }
    return words.join(' ');
}
console.log(reverseString('word searches are super fun','s'));
console.log(reverseString('first man to walk on the moon', 'm'));
console.log(reverseString('peter piper picked pickled peppers', 'p'));

//question-2
console.log('\nOutput Of Medium Question-2:');

function taskJackpot(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return array+' -> False';
        }
    }
    return array+' -> True';
}
var arr = ["@","@","@","@"];
console.log(taskJackpot(arr));
var arr = ["abc","abc","abc","abc"];
console.log(taskJackpot(arr));
var arr = ["SS","SS","SS","SS"];
console.log(taskJackpot(arr));
var arr = ["&","&&","&&&","&&&&"];
console.log(taskJackpot(arr));
var arr = ["SS","SS","SS","Ss"];
console.log(taskJackpot(arr));

//question-3
console.log('\nOutput Of Medium Question-3:');

function removeDups(array)
{
    var word='';
    for(var i=0; i<array.length; i++){
        if(word.indexOf(array[i])==-1){
            word += array[i];
        }
    }
    return array +" After removed duplicates : "+word;
}
var arr = ["1 ","0 ","1 ","0 "];
console.log(removeDups(arr));
var arr = ["The ","big ","cat"];
console.log(removeDups(arr));
var arr = ["John ","Taylor ","John"];
console.log(removeDups(arr));