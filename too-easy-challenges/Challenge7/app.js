class question {
  constructor(content, option, correct) {
    this.content = content;
    this.option = option;
    this.correct = correct;
  }
}
var Status = true;
let count = 0;
let question1 = new question();
let question2 = new question();
let question3 = new question();
let question4 = new question();
let question5 = new question();
let question6 = new question();
let question7 = new question();
let question8 = new question();
(function createQuestion() {
  question1.content = "1+1 bằng bao nhiêu";
  question1.option = {};
  question1.option[1] = "bằng 5";
  question1.option[2] = "bằng 4";
  question1.option[3] = "bằng 2";
  question1.correct = question1.option[3];

  question2.content = "trên trời có bao nhiêu ngôi sao";
  question2.option = {};
  question2.option[1] = "bằng 5";
  question2.option[2] = "bằng 4";
  question2.option[3] = "hông biết";
  question2.correct = question2.option[3];

  question3.content = "nếu 1+4 = 6 thì 1+5 bằng bao nhiêu";
  question3.option = {};
  question3.option[1] = "bằng 7";
  question3.option[2] = "bằng 5";
  question3.option[3] = "bằng 6";
  question3.correct = question3.option[3];

  question4.content = "2 nhân 2 bằng mấy";
  question4.option = {};
  question4.option[1] = "vẫn bằng 2";
  question4.option[2] = "bằng 4";
  question4.option[3] = "bằng 8";
  question4.correct = question4.option[2];

  question5.content = "quốc gia nào đông dân nhất";
  question5.option = {};
  question5.option[1] = "Thổ Nhĩ Kỳ";
  question5.option[2] = "việt Nam";
  question5.option[3] = "Ấn Độ";
  question5.correct = question5.option[3];

  question6.content = "3+3 = 7 đúng hay sai";
  question6.option = {};
  question6.option[1] = "đúng";
  question6.option[2] = "sai";
  question6.option[3] = "hông biết";
  question6.correct = question6.option[2];

  question7.content = "không có làm thì có ăn không";
  question7.option = {};
  question7.option[1] = "không";
  question7.option[2] = "có";
  question7.option[3] = "hông biết";
  question7.correct = question7.option[1];

  question8.content = "căng bật 2 của 12.6 ";
  question8.option = {};
  question8.option[1] = "xấp sỉ 3,67";
  question8.option[2] = "xấp sỉ 3.54";
  question8.option[3] = "xấp sỉ 3.23";
  question8.correct = question8.option[2];
})();
function getOption(same) {
  let show = "đưa ra lựa chọn của bạn \n";
  let x = 1;
  for (x in same) {
    let option = same[x];
    show +=
      (x == 1 ? "( " : "") + x + ": " + option + "  /  " + (x == 3 ? ")" : "");
  }
  return show;
}
function answer(content, option, correct) {
  const text = " ";
  let person = prompt(content + "\n1 : " + getOption(option));
  if (option[person] == correct) {
    count += 1;
    alert("đáp án chính xác \n điểm số của bạn là : " + count);
  } else if (person==="exit") {
    Status = false
  } else
    alert(
      "áp án không chính xác !" + "\n" + "đáp án là : " + correct
    );
}
function quiz() {
  while (true) {
    answer(question1.content, question1.option, question1.correct);if(Status == false) break;
    answer(question2.content, question2.option, question2.correct);if(Status == false) break;
    answer(question3.content, question3.option, question3.correct);if(Status == false) break;
    answer(question4.content, question4.option, question4.correct);if(Status == false) break;
    answer(question5.content, question5.option, question5.correct);if(Status == false) break;
    answer(question6.content, question6.option, question6.correct);if(Status == false) break;
    answer(question7.content, question7.option, question7.correct);if(Status == false) break;
    answer(question8.content, question8.option, question8.correct);if(Status == false) break;
  }
}
