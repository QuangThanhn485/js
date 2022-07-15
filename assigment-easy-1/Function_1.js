let quarter =0;
let dimes =0;
let nickel =0;
let penny=0;
function conversion(cent)
{
    quarter = cent/25;
    dimes = cent/10;
    nickel = cent/5
    penny = cent;
    money = Array(quarter , dimes ,nickel ,penny);
    return money;

}
function show()
{
    const cent = 80;
    conversion(cent);
    console.log(cent+"cent bằng "+quarter+" quarter, "+dimes+" dimes, "+nickel+ " nickel, "+penny+" penny")
}
show()
// + 1 quarter =  25 cent
// + dimes: 10
// + nickel: 5
// + penny: 1