function countChar(String, char) {
  let result = cleanString(String, char).length;
  console.log(String +" ký tự "+char+" xuất hiện "+ result +" lần ")
}
function cleanString(str = "", kt) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => {
      if (char === kt) {
        return true;
      }
      return false;
    })
    .sort()
    .join("");
}
countChar('naninai','n')
