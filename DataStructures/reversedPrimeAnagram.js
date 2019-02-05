var UtilityDS = require('../Utility/UtilityDS');
var Utility = require('../Utility/Utility')
var readline = require('readline-sync');
var arr = [];
 stack = new UtilityDS.Stack;
for (let i = 1000; i >= 0; i--) {
    if (Utility.isPrime(i))
        arr.push(i)
}
/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i + 1; j < arr.length; j++) 
    {
        if (Utility.isAnagram(arr[i], arr[j])) 
        {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.display()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");