function sortt(arr = []) {
  return arr.sort((a,b) => (a-b));
}
function reverse(arr) {
  return sortt(arr).reverse();
}
function sortArray(arr = [], str = "") {
  switch (str.toLowerCase()) {
    case "asc":
      return sortt(arr);
    case "des":
      return reverse(arr)
    case "none":
      return arr;
    default :
     return false;
  }
}
console.log(sortArray([7, 8, 11, 66], "asc"));
console.log(sortArray([7, 8, 11, 66], "des"));
console.log(sortArray([7, 8, 11, 66], "none"));