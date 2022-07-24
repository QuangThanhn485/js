function show(same)
{
    console.log("chuỗi ban đầu là : "+same)
}
function res(str)
{
    let res = str.split("");
    show(res.join(""));
    let arr = res.reverse().join("");
    return arr
}
console.log("chuỗi sau khi được đảo ngược : "+res("thanh"));