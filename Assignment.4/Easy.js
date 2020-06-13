//question-1
console.log('\nOutput Of Easy Question-1:')
function charCount(letter, str1) 
{
 var letterCount = 0;
 for (var position = 0; position < str1.length; position++) 
 {
    if (str1.charAt(position) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
console.log(charCount('a', 'edabit'));
console.log(charCount('c', 'Chamber of secrets'));
console.log(charCount('b', 'big fat bubble'));

//question-2
console.log('\nOutput Of Easy Question-2:')

function addup(number)
{
     var sum = 0;
     for (var i=0; i <= number; i++) {
      sum = sum + i;
  }
  return 'addup ('+number+') => '+sum;
}
console.log(addup(4));
console.log(addup(13));
console.log(addup(600));

//question-3
console.log('\nOutput Of Easy Question-3:')

let replaceVowel = function(str)
{
  let a = str.replace(/a/g, '1');
  let e = a.replace(/e/g, '2');
  let i = e.replace(/i/g, '3');
  let o = i.replace(/o/g, '4');
  let u = o.replace(/u/g, '5');
 return str+'->'+u;
}
let result1 = replaceVowel('karachi');
console.log(result1);
let result2 = replaceVowel('chembur');
console.log(result2);
let result3 = replaceVowel('khandbari');
console.log(result3);
