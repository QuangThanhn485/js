function converMonth(month = "") {
  switch (month.toLowerCase) {
    case "January".toLowerCase:
      return 1;
    case "February".toLowerCase:
      return 2;
    case "March".toLowerCase:
      return 3;
    case "April".toLowerCase:
      return 4;
    case "May".toLowerCase:
      return 5;
    case "June".toLowerCase:
      return 6;
    case "July".toLowerCase:
      return 7;
    case "August".toLowerCase:
      return 8;
    case "September".toLowerCase:
      return 9;
    case "October".toLowerCase:
      return 10;
    case "November".toLowerCase:
      return 11;
    case "December".toLowerCase:
      return 12;
    default:
      return false;
  }
}
function createArr(str = "") {
  return str.split(" ");
}

function calculate(str, str1) {
  const somedate1 = new Date();
  const somedate2 = new Date();
  let time1 ;
  let time2 ;
  let distance ;
  time1 = somedate1.setFullYear(
    createArr(str)[2],
    converMonth(createArr(str)[0]),
    createArr(str)[1],
  );
  time2 = somedate2.setFullYear(
    createArr(str1)[2],
    converMonth(createArr(str1)[0]),
    createArr(str1)[1],
  );
   return distance = (time2 -time1)/86400000;
}
console.log(calculate("June 14 2021", "June 20 2021")+" day")
