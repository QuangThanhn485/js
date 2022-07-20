let captcha=new Array();;
 
function generateCaptcha() {
  const activeCaptcha = document.getElementById("captcha");
  for (let q = 0; q < 6; q++) {
    if (q % 2 == 0) {
      captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } else {
      captcha[q] = Math.floor(Math.random() * 10 + 0);
    }
  }
  theCaptcha = captcha.join("");
  activeCaptcha.value = `${theCaptcha}`;
}