(function removeElement()
{
    const myArray = [
        { field: "id", operator: "eq" },
        { field: "cStatus", operator: "eq" },
        { field: "money", operator: "eq" },
      ];
    myArray.splice(1,1)
    console.log(myArray)
})()