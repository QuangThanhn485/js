function checkMultiples(num)
{
    if(num % 3 === 0)
    {
        return "Fizz"
    }
    else if(num % 5 === 0)
    {
        return "Buzz";
    }
    else
    return num
}
(function print()
{
    for(let i = 1 ; i <= 15 ; i++)
    {
        console.log("\n"+checkMultiples(i));
    }
})()