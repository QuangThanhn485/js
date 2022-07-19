function bigger50(arr = []) {
  let avg;
  let numArr;
  let num = -1;
  avg = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed();
  if (arr.length !== 0) {
    numArr = avg.toString(10).replace(/\D/g, "0").split().map(Number);
    return numArr;
  } else return num.toString(10).replace(/\D/g, "0").split().map(Number);
}
function smaller50(arr = []) {
  let avg;
  let numArr;
  let num = -1;
  avg = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed();
  if (arr.length !== 0) {
    numArr = avg.toString(10).replace(/\D/g, "0").split().map(Number);
    return numArr;
  } else return num.toString(10).replace(/\D/g, "0").split().map(Number);
}
function avg(arr = []) {
  console.log(arr);
  let bigger_50 = arr.filter((char) => {
    if (char > 50) return true;
  });
  let smaller_50 = arr.filter((char) => {
    if (char < 50) return true;
  });
  let reattach = [...bigger50(bigger_50), ...smaller50(smaller_50)];
  return reattach;
}
console.log(avg([63, 62, 100, 100]));
