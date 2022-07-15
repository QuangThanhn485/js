class question
{
    constructor(content , option, correct ){
        this.content = content;
        this.option = option;
        this.correct = correct;
    }
    
}
let  question1 = new question;
(function createQuestion()
{
    question1.content = "1+1 bằng bao nhiêu";
    question1.option = {}
    question1.option[1] = "bằng 5";
    question1.option[2] = "bằng 4";
    question1.option[3] = "bằng 2";
    question1.correct = question1.option[3];
})()
function getOption()
{
    let show = "option : (";
    let x = 1
    for( x in question1.option)
    {
        let option = question1.option[x];
        show += x+ ": " + option + "  /  "+ (x==3?")":"");
    }
    return show;
}
function answer()
{
    const text =" ";
    let person = prompt(question1.content +"\n1 : "+getOption());
    if(question1.option[person] == question1.correct)
    {
        alert("đáp án chính xác");
    }
    else alert("áp án không chính xác !"+"\n"+"đáp án là : "+question1.correct)
}
answer()