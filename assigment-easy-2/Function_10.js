function capitalizeFirstLetter(str)
{
    let newArr = []
 for(let i = 0 ; i< splitChar(str).length ; i++)
 {
    newArr[i] = splitChar(str)[i].charAt(0).toUpperCase() + splitChar(str)[i].slice(1);
 }
 return newArr.join(" ")
}
function splitChar(str ="")
{
    return str.split(" ");
}
console.log(capitalizeFirstLetter("capitalize every word"))
