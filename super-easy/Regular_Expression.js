function Regular(str= "")
{
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;     
    return pattern.test(str)    
}
console.log(Regular("quangthanhn485@gmail.com"))