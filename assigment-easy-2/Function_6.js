function check(str = "")
{
    let toUpperCaseArr
    let toLowerCaseArr
    toUpperCaseArr = str.split("").filter((char)=>{if(char == char.toUpperCase()) return true; else return false})
    toLowerCaseArr = str.split("").filter((char)=>{if(char == char.toLowerCase()) return true; else return false})
    return combined(toUpperCaseArr,toLowerCaseArr)
}
function combined(toUpperCase,toLowerCase)
{
    let toStr
    let newStr
    toStr = [...toUpperCase,...toLowerCase];
    newStr =  toStr.toString().replaceAll(",","")
    return newStr 
}
console.log(check("moveMENT"))