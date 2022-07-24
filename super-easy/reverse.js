function rv(str="")
{
    let splitStr ;
    splitStr = str.split("");
    let vrArr = splitStr.reverse();
    return vrArr.join("");
}
console.log(rv("hello"))