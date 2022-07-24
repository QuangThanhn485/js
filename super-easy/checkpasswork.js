function checkPass(pwd ="")
{
    const strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    const mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    const enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (pwd.length == 0) {
        return "Type Password"
    } else if (false == enoughRegex.test(pwd)) {
        return "More Characters";
    } else if (strongRegex.test(pwd)) {
        return  "Strong!";
    } else if (mediumRegex.test(pwd)) {
       return "Medium!";
    } else {
       return "Weak!"
    }
}
console.log(checkPass("ugfw3123@A123~,."))