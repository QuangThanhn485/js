// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // chuyển hết thành ký tự thường
  // split
  // filter chỉ lấy ký tự a tới z
  // sắp xếp mảng
  // ghép mảng thành 1 string
  // so sánh 2 chuỗi với nhau
  let char1 = cleanString(stringA);
  let char2 = cleanString(stringB);
  if(char1 === char2)
  {
    return true;
  }
  else
  return false
  //return "One line only !!!";
}
console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));

function ignore(chars) {
  return chars.length === 1 && chars.match(/[a-z]/i);
}
function cleanString(str ='') {
  return str.toLowerCase().split('').filter(char => {
    if (ignore(char)) {
      return true;
    }
    return false;
  }).sort().join('')
}
module.exports = anagrams;