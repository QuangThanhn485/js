function checkDay(month ="", day) {
  switch (month.toLowerCase) {
    case "January".toLowerCase:
        if(day > 30 ) return false; else
      return true;
    case "February".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
      return true;
    case "March".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day)) ) return false; else
      return true;
    case "April".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
      return true;
    case "May".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
      return true;
    case "June".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
      return true;
    case "July".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
        return true;
    case "August".toLowerCase:
        if(day >30 || day <= 0  || !(isNaN(day))) return false; else
      return true;
    case "September".toLowerCase:
        if(day >30 || day < 0  || !(isNaN(day))) return false; else
      return true;
    case "October".toLowerCase:
        if(day >30 || day < 0  || !(isNaN(day))) return false; else
      return true;
    case "November".toLowerCase:
        if(day >30 || day < 0  || !(isNaN(day))) return false; else
      return true;
    case "December".toLowerCase:
        if(day >30 ) return false; else
      return true;
    default:
      return false;
    }
}
function createArr(str = "") {
  return str.split(" ");
}
function splitArr(str) {
  let month = createArr(str)[0];
  let day = createArr(str)[1];
  return checkDay(month, parseInt(day));
}
console.log(splitArr("January 30"))
