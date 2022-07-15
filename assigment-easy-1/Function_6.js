(function countDay()
{
    var date1 = new Date("04/23/2021");
    var date2 = new Date("07/30/2012");
    var Difference_In_Time = date1.getTime() - date2.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log("số ngày còn lại kết thúc năm học là : "+Difference_In_Days+" ngày")
})()