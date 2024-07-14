function isPalindrome(word) {
  // Write your algorithm here
  //split the string into an array
  let charArray = word.split('');
  //reverse the array of characters
  let reversedArray = charArray.reverse();
  //join the array back to string after reversing
  let reversedStr = reversedArray.join('');
  //compare the reversed str with tyhe initial word
  return word === reversedStr;
}

/* 
  Add your pseudocode here
  create a func isPalindrome with a string arg
  split the string into an array to be able to reverse it
  reverse the cgharac ters of the array
  join the reversed characters of the array into a string
  compare the initial string with the new string.
  if they match, its true. if tghey don't, its false
*/

/*
  Add written explanation of your solution here
  The `isPalindrome` function checks if a given string reads the same forwards and backwards.
  - It first splits the input string into an array of characters.
  - Then, it reverses this array.
  - Next, it joins the reversed array back into a string.
  - Finally, it compares the original string with the reversed string. If they are equal, it returns `true`, indicating that the string is a palindrome. If they are not equal, it returns `false`.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log ("expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("expecting: false");
  console.log("=>", isPalindrome("mother"));
  

}

module.exports = isPalindrome;
