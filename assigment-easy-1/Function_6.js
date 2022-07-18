function show(same)
{
    console.log("chuỗi ban đầu là : "+same)
}
function res(str)
{
    let res = str.split("");
    show(res);
    let arr = res.reverse();
    return arr
}
console.log("chuỗi sau khi được đảo ngược : "+res("thanh"));