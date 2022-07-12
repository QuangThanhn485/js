
const year = new Array(1999,2000,2004,2005,1998);
const just = [];
const bool = [];
const date = new Date();
for(let i = 0 ; i< year.length ;  i++)
    {
        just[i] = date.getFullYear() - year[i];
    }
console.log(year ,);
console.log(just ,);
(function printFullAge()
{
    for(let i = 0 ; i<just.length ; i++)
    {
        bool[i] = just[i] >= 18?true:false;
    }
    console.log(bool ,)
})()
 
