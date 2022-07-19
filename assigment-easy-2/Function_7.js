function trimZero(str)
{
    let num  =  parseInt(str)
    const n = Math.round((num + Number.EPSILON) * 100) / 100
    return n
}
console.log(trimZero("03.1400"))