function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}
function getVowels(str = "") {
  const m = str.match(/[aeiou]/gi);
  return m === null ? [] : m;
}

function wordCount(word = "", str = "") {

    return getVowels(str).filter((char) => {
      if (char === word) {
        return true;
      } else return false;
    });
}
function displays(str = "") {
  for (let item  in remove_duplicates(getVowels(str))) {
    //console.log(getVowels(str));
    console.log(getVowels(str[item]) + " = " + wordCount(getVowels(str)[item], str).length);
  }
}
displays("aeefdqbdjkwd");
