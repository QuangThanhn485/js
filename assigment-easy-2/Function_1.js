function find_duplicates(arr = []) {
  return arr.filter((item, index) => {
    if (arr.indexOf(item) !== index) {
      return true;
    } else return false;
  });
}
function remove(arr = []) {
  const lenght = arr.length;
  console.log(arr)
  const arraynew = arr;
  const duplicateNumbers = find_duplicates(arr);
  for (let i = 0; i < lenght; i++) {
    if (duplicateNumbers.includes(arr[0])) {
      arraynew.splice(0, 1);
    }
  }
  return arraynew;
}
console.log(remove([11, 34, 34, 11, 2]));
