class calculate
{
    constructor(age,height)
    {
        this.age = age;
        this.height = height;
    }
    he()
    {
        const result = this.age * 2 + this.height;
        return result;
    }
    she()
    {
        const result = this.age * 2 + this.height;
        return result;
    }

    // compare()
    // {
    //     const result = this.he == this.she?"kết quả hòa":this.he>this.she?"cô ấy thắng":"anh ấy thắng";
    // }
}
(function game()
{
    let he = new calculate(23,55);
    let she = new calculate(21,44);
    const result = he.he() == she.she()?"kết quả hòa":he.he>she.she?"cô ấy thắng":"anh ấy thắng";
    console.log("số điểm của anh đây là : "+he.he()+" số điểm của cô ấy là : "+she.she()+" kết quả là : "+result)
})();