function repeatingCharacter(str= "")
{
    let arr
    arr =  str.split("")
    let count = 0 ;
    for(let i = 0 ; i < arr.length ; i++)
    {
        for( let  j = 1 ; j < arr.length ; j++)
        {
            if(arr[i].includes(arr[i+j]))
            {
                return arr[i]
            }
        }
    }
    return -1
}
console.log("replace char is : "+repeatingCharacter("orifhwejfbawlief"));