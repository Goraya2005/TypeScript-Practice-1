// Given an integer x, return true if x is a palindrome , and false otherwise.


function isPalindrome(x: number): boolean {
    let a = x.toString();
return a === a.split('').reverse().join('');
    
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(12321));
console.log(isPalindrome(12345));


// Write a ts function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
}

// Example usage
const input1 = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(input1)); // Output: 'fl'

const input2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(input2)); // Output: ''





// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


const letterCombinations = (digits: string): string[] => {
    if (digits.length === 0) return [];
  
    const digitToLetters: { [key: string]: string } = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
    };
  
    const result: string[] = [];
  
    const backtrack = (index: number, currentCombination: string) => {
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const letters = digitToLetters[digits[index]];
  
      for (let i = 0; i < letters.length; i++) {
        backtrack(index + 1, currentCombination + letters[i]);
      }
    };
  
    backtrack(0, '');
  
    return result;
  };
  
  // Example usage
  const digits = '23';
  const combinations = letterCombinations(digits);
  console.log('Letter combinations:', combinations);
  
  // Example usage 2
  const digits2 = '62';
  const combinations2 = letterCombinations(digits2);
  console.log('Letter combinations:', combinations2);

