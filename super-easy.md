## . Q. ***Write a program in javascript. sum(2)(3);***

**Example:** Expected output is 5

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How to validate file size and extension before upload? Please explain***

```html
<!DOCTYPE html>
<html>

<head>
  <title>JavaScript File Upload Example</title>
  <script type="text/javascript">
    function showFileSize() {
      let name = document.getElementById("").file[0].name ;
    }
  </script>
</head>

<body>
  <form action="#" onsubmit="return false;">
    <input type="file" id="fileinput" />
    <input type="button" id="btnLoad" value="Load" onclick="showFileSize();" />
  </form>
</body>
</html>

<!-- Output -->

File Name: pic.jpg 
File Size: 1159168 bytes 
File Extension: jpg 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Create captcha using javascript? Please explain***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Captcha Example</title>
  </head>
  <script>
    var captcha;

    function generateCaptcha() {
      
    }
  </script>

  <body onload="generateCaptcha()">
    <input type="text" id="captcha" disabled /><br /><br />
    <button onclick="generateCaptcha()">Refresh</button>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Create a Stopwatch program in javascript? Please explain***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Stopwatch Example</title>
  </head>

  <body>
    <h4>Time: <span id="time">00:00:00</span><h4> <br /><br />
    <button id="start" onclick="start()">Start</button>
    <button id="stop" onclick="stop()">Stop</button>
    <button id="reset" onclick="reset()">Reset</button>

    <script type="text/javascript">
      
    </script>
  </body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Write a program to reverse a string? Please explain***

```javascript
console.log(reverseString("Hello")); 

// Output: olleH
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How to check if object is empty or not in javaScript? Please explain***

```javascript
const obj = {};
console.log(isEmpty(obj)); // true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***JavaScript Regular Expression to validate Email***

```javascript
console.log(validateEmail("thiendepwa21@yahoo.com")); // true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Use RegEx to test password strength in JavaScript? Please explain***

```javascript
// Output
PASS
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How to compare objects ES6? (Answer with 3 solutions)***
```
 can use JSON.stringify , isEqual , "==="
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How to remove array element based on object property? Please explain***

```javascript
var myArray = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

...

Console.log(myArray);
```

Output

```
myArray = [
    {field: "id", operator: "eq"}
    {field: "cStatus", operator: "eq"}
]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(+"meow"); // Explain
```
```
this show conten is "meow"
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result); // Explain
```
```
this show "0" looping we go from 5 to 0 , and print console value 0;
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = 1.2;
console.log(typeof a); // Explain
```
```
  this display console is "number" that return a type data;
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var x = 10;
if (x) {
  let x = 4;
}
console.log(x); // Explain
```
```
  this show in console is value 10 , because var is globel so x  =  10
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(0.1 + 0.2 == 0.3); // Explain
```
```
this return false because 0.1+0.2 = 0.30000000000000004 so 0.1 + 0.2 == 0.3 (false)
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 + -"1" + 2); // Explain
```
```
this show value 2 because "-1" in the middle "+" so "-1" understood is -1 type number 
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20); // Explain
```
```
this display value 20 , because paramater y not yet use in function
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var num = 20;
var getNumber = function () {
  console.log(num);
  var num = 10;
};
getNumber(); // Explain
```
```
this return is undefined because 'var num  = 10' decralation after use 'num'
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
function f1() {
  num = 10;
}
f1();
console.log("window.num: " + window.num); // Explain
```
```
display error because object window defined
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("(null + undefined): " + (null + undefined)); // Explain
```
```
display "(null + undefined): NaN" because "(null + undefined)" not a number
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  var a = (b = 3);
})();

console.log("value of a : " + a); // Explain
console.log("value of b : " + b); // Explain
```
```
display error message because don't find a in a,b in function()
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y); // Explain
```
```
display "1underfined" because f not yet assign values 
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k); // Explain
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k);// Explain
```
```
 return '1function' because 'foo' is function
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("(-1 / 0): " + -1 / 0); // Explain
console.log("(1 / 0): " + 1 / 0); // Explain
console.log("(0 / 0): " + 0 / 0); // Explain
console.log("(0 / 1): " + 0 / 1); // Explain
```
```
in ra (-1 / 0): -Infinity bởi vì số âm chia cho 0 ra âm vô cùng
(1 / 0): Infinity 1 chia cho 0 ra dương vô cùng
(0 / 0): NaN 0 chia 0 nên ra kết quả đây không phải là số ( NaN)
(0 / 1): 0 bởi vì 0 /1 hiển nhiên bằng 0

```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = 4;
var b = "5";
var c = 6;

console.log("(a + b): " + (a + b)); // Explain
console.log("(a - b): " + (a - b)); // Explain
console.log("(a * b): " + a * b); // Explain
console.log("(a / b): " + a / b); // Explain
console.log("(a % b): " + (a % b)); // Explain
```
```
in ra kết quả :(a + b): 45
(a - b): -1
(a * b): 20
(a / b): 0.8
(a % b): 4
b là kiểu string nhưng nó được sủ dụng như kiểu interger nên được hiểu là kiểu interger
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("MAX : " + Math.max(10, 2, NaN)); // Explain
console.log("MAX : " + Math.max()); // Explain
```
```
in ra kết quả :
MAX : NaN
MAX : -Infinity
nếu bất kỳ đối số nào được truyền vào không thể chuyển đối thành 1 số thì kết quả trả về NaN
nếu không tìm thấy đối số nào có thể chuyển đổi thành 1 số thì trả về -Ifninity (âm vô cùng)
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined")); // Explain
console.log("b defined? " + (typeof b !== "undefined")); // Explain
```
```
kết quả in ra là :
a defined? false
b defined? true
bởi vì giá trị của b = 3  mang giá trị không phải là 'undefined' nên kết quả trả về sẽ là true
còn a nó không được gián giá trị như theo cách phía trên( không mang giá trị ) nên nó bằng 'undefined' nên kết quả trả về là false
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // Explain
    console.log("outer func:  self.foo = " + self.foo); // Explain
    (function () {
      console.log("inner func:  this.foo = " + this.foo); // Explain
      console.log("inner func:  self.foo = " + self.foo); // Explain
    })();
  },
};
myObject.func();
```
```
kết quả in ra : 
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
trường hợp đầu tiên sẽ lấy ra được giá trị như bình thường, nhưng đến trường hợp thứ 2, funtion được lồng vô trong 1 object menthod lúc này dùng this sẽ không lấy được giá trị, ta nên dùng từ khóa self sẽ lấy được giá trị vì seld chí là this của menthod func 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(0.1 + 0.2); // Explain
console.log(0.1 + 0.2 == 0.3); // Explain
```
```
kết quả in ra là : 
0.30000000000000004
false
bời vì theo như kết quả nhận được  từ 0.1 +0.2 =0.30000000000000004 nên 0.1+0.3 nó sẽ không bằng 0.3 ( kết quả trả về là false)
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
// Explain
```
```
kết quả in ra là 
1
4
3
2
ta thấy nó không in ra theo thứ tự bởi vì ta đã dùng setTimeout() (đây là một hàm bất đồng bộ) , nên số 2 được in ra sau 1s nữa trong khoản thời gian đấy chương trình đã thực hiện in ra 3 và 4 , sau khi  kết thúc 1s số 2 mói được in ra ( in ra sau số 3 và 4)
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // Explain
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // Explain
```
```
kết quả in màng hình là 
array 1: length=5 last=j,o,n,e,s
array 2: length=5 last=j,o,n,e,s
arr2.push(arr3); hành động này đã thêm Array arr3 vào arr2 (vào element cuối cùng của arr2) và cũng kéo theo arr1 bị thay đổi theo 
menthod slice() được truyền vào số âm điều này có nghĩa nó sẽ lấy các element từ dưới lênh trên (từ cuối về trước) mà element cuối của arr1 và arr2 là một arr3
nên kết quả trả về là err3
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 + "2" + "2"); // Explain
console.log(1 + +"2" + "2"); // Explain
console.log(1 + -"1" + "2"); // Explain
console.log(+"1" + "1" + "2"); // Explain
console.log("A" - "B" + "2"); // Explain
console.log("A" - "B" + 2); // Explain
```
```
kết quả được in ra là
122  // số cộng với 2 chuỗi 
32 // "2" là kiểu string nhưng +"2" là số nguyên , như vậy ta có phép toán 1+2 = 3 ; và kế tiếp 3+"2" (dấu cộng lúc này có vai trò là cộng chuỗi)
02 // tương tự như trên 1-1 =0
112 // cộng chuỗi lại với nhau
NaN2 // 2 chuỗi không thể trừ cho nhau nên trả về NaN( không phải số ), và cộng "2"(kiểu string)
NaN // như trường hợp ở trên nhưng số 2 lúc này không còn là kiểu string nữa nên só 2 đã không được hiển thị
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Explain
```
```
màng hình hiển thị kết quả
5
5
5
5
5
vòng lặp for được thực hiện 5 lần mõi lần như vậy in ra số 5 sau 1s nhờ vào menthod setTimeout()
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
// Explain
```
```
in màng hình 
0
1
2
3
4
vòng lặp for có 5 vòng lặp và mỗi vòng lặp như vậy cho in ra giá trị biến i, thời gian đển in cho mỗi lần là 1s biến i tăng dần cho mỗi vòng lặp
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log("0 || 1 = " + (0 || 1)); // Explain
console.log("1 || 2 = " + (1 || 2)); // Explain
console.log("0 && 1 = " + (0 && 1)); // Explain
console.log("1 && 2 = " + (1 && 2)); // Explain
```
```
kết quả in 
0 || 1 = 1 // vì 0 trả về giá trị là false nên hiển thi 1
1 || 2 = 1 // tương tụ như trên (vì 1 là true nên hiển thị 1)
0 && 1 = 0 // cả hai phải trả về là true còn không thì kết quả sẽ ra false
1 && 2 = 2 // tương tự như trên
các biểu thức xẽ trả về false gồm có 
false;
null;
NaN;
0;
empty string ("" or '' or ``);
undefined
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(false == "0"); // Explain
console.log(false === "0"); // Explain
```
```
kết quả in ra 
true // so sánh giá trị kiểu bool với nhau số 0 tương ứng với kiểu bool là false 
false //  só sách giá trị và cả kiểu dữ liệu vì số 0 là kiểu interger nên không thể bằng với kiểu bool là false được

```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); // Explain
```
```
in ra kết quả 
456
vì a nó nhận giá trị cuối cùng được truyền vào vì nó có chung 1 key
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
); // Explain
```
```
kết quả in ra là 
3628800
phía trên dùng toán tử 3 ngôi kết hợp với đệ quy , nếu n > 1 = true thì thực hiện n *f(n-1) cứ như vậy n mỗi lần chạy trên vòng lặp đệ quy nó sẽ giảm đi 1 giá trị (10 , 9 , 8 ... 1) . và sau đó bắt đầu return ra giá trị của n * f(n-1) cứ như vậy giá trị được nhân lênh nhiều lần trong 10 vòng đệ quy kết quả cuối cùng là 3628800
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function (x) {
  return (function (y) {
    console.log(x); // Explain
  })(2);
})(1);
```
```
in ra
1
vì function lồng bênh trong  có truyền tham số nhưng không được sủ dụng để in ra
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // Explain
console.log(hero.getSecretIdentity()); // Explain
```
```
kết quả in ra 
undefined John Doe // từ khóa this chỉ có tác dụng sử dụng trong cùng 1 scope  lấy ra ngoài phải thông qua object hero (hero.) vì this hiện tại đang trỏ đến các property của object này
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);
// Explain
```
```
kết quả in ra 
undefined // ở đây dùng từ khóa this là thuộc về scope bên trong function (vì function cũng được coi là 1 object) nên nó không nhận được giá trị của biến lenght
2 // arguments nó lấy giá trị theo tham số truyền vào và được truy cập như kiểu array, vì đã gọi đến function fn (trong hàm này có sử dụng this.lenght) nên nó lấy ra độ dài của phần tử bênh trong và trả về giá trị là 2 (vì đã truyền vào 2 tham số)

```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
// Explain
```
```
in màng hình
1 // lấy giá trị từ biến x
undefined // không thể lấy giá trị của biến x vì phạm vi của biến x nằm trong scope khối catch() (đây là tham só truyền vào của khối catch())
2 // lấy dược vì đây là golbal

```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var x = 21;
var girl = function () {
  console.log(x); // Explain
  var x = 20;
};
girl();
```
```
in ra
undefined
bởi vì var có Tính chất hoisting nên nó được khai báo nhưng không khởi tạo giá trị trên đầu 1 scope nên trường hợp trên sẽ nhận được giá trị là undefined
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(1 < 2 < 3); // Explain
console.log(3 > 2 > 1); // Explain
```
```
in ra
true // vì 2 lớn hơn 1 và nhỏ hơn 3 nên kết quả ra true
false // vì nó so sánh 3>2 trả về true và tiếp tục true > 1 (số 1 trong bool tương ứng với false)  true > false (trả về false)
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
console.log(typeof typeof 1); // Explain
```
```
kết quả in ra
string // typeof in ra kiễu dữ liệu , sô 1 là kiểu number mà "typeof 1" nó sẽ cho ra 'number' đây là kiểu string, nên tiếp tục dùng typeof thêm lần nữa nó sẽ trả về kết quả string
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b); // Explain
  }
  inner();
}
outer();
```
```
in ra
3
vì nó nhận biến b trong cùng scoped mặc dù trước đó b có +1 nhưng nó đã được đặt lại là  =3 nên vẫn giữ nguyên. bời vì var có Tính chất hoisting
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Hoisting example in javascript? Please explain***

```javascript
x = 10;
console.log(x);
var x; // Explain
```
```
in ra 
10
nó in ra giá trị của x = 10 vì nó đọc từ trên xuống
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
const arr = [1, 2];
arr.push(3); // Explain
```
```
số 3 đã được thêm vào mảng arr, được thêm vào vị trí cuối cùng trong các phần từ của mảng
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var o = new F();
o.constructor === F;
```
```
xuất hiện lỗi vì F chưa được định nghĩa nên không thể thực hiện phép toán  ===
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
let sum = (a, b) => {
  a + b;
};
console.log(sum(10, 20)); // Explain
```
```
in ra
undefined
vì function thực hiện tính toán nhưng không trả về bất cứ cái gì (không return)
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var arr = ["javascript", "typescript", "es6"];
var searchValue = (value) => {
  return arr.filter((item) => {
    return item.indexOf(value) > -1; // không tìm thấy thì  = -1 lớn hơn -1 thì đã tìm thấy
  });
};
console.log(searchValue("script"));
```
```
kết quả in ra là
[ 'javascript', 'typescript' ]
vì nó tìm trong mảng arr phần tử nào có chứa 'script' thì in ra màng hình
```
## . Q. ***Write the program using fatarrow function? Please explain***

```javascript
var a = [1, 2, 3, 4];
function sumUsingFunction(acc, value) {
  return acc + value;
}
var sumOfArrayUsingFunc = a.reduce(sumUsingFunc);
```
```
error
 không thể định nghĩa sumUsingFunc vì function này không tồn tại
```
## . Q. ***Write a program that prints the numbers from 1 to 15. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”? Please explain***

Output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
var output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output); // Explain
```
```
in ra 
0
bởi vì delete không thể xóa được giá trị của một biến nó chỉ xóa được object và property
```
## . Q. ***What will be the output of the following code? Please explain***

```javascript
var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log(output); // Explain
```
```
in ra
1
nhân giá trị của biến x , delete không thể xóa được giá trị của một biến nó chỉ xóa được object và property
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output); // Explain
```
```
in ra
undefined
bời vì x.foo là một property nên delete đã xóa thành công giá trị của nó
```
## . Q. ***What will be the output of the following code? Please explain***

```javascript
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company); // Explain
```
```
in ra
xyz
không thể xóa một biến đã khai báo bằng var ("var emp1")
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length); // Explain
```
```
in ra
5
giá trị tại index 3 đã được loại bỏ nhưng nó đã thay thế vào một <1 empty item> điều vẫn sẽ chiếm chổ trong mảng
```
## . Q. ***What will be the output of the following code? Please explain***

```javascript
var bar = true;
console.log(bar + 0); // Explain
console.log(bar + "xyz"); // Explain
console.log(bar + true); // Explain
console.log(bar + false); // Explain
```
```
in ra
1 // true là số 1 nếu bool cộng với number kết quả true + 0 = 1
truexyz 
2
1
phía  dưới là hướng dẫn cho toán tử bổ sung
Number + Number -> phép cộng
Boolean + Number -> phép cộng
Boolean + Number -> phép cộng
Number + String -> phép nối
String + Boolean -> phép nối
String + String -> phép nối
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
var z = 1,
  y = (z = typeof y);
console.log(y); // Explain
```

```javascript
var z;
z = 1;
var y;
z = typeof y;
y = z;
```
```
kết in ra
undefined
vì không thể xác định được kiểu dữ liệu của y trong khi đó y chưa được gán giá trị
```

## . Q. ***What will be the output of the following code? Please explain***

```javascript
// NFE (Named Function Expression)
var foo = function bar() {
  return 12;
};
typeof bar();
```
```
error 
vì function bar đã thuộc về foo nên ta không thể gọi trực tiếp bar mà phải gọi foo để xác định kiểu của bar()
```
**Sample 1**

```javascript
var bar = function () {
  return 12;
};
typeof bar();
```

or

**Sample 2**

```javascript
function bar() {
  return 12;
}
typeof bar();
```


```javascript
var foo = function bar() {
  // foo is visible here // Explain
  // bar is visible here // Explain
  console.log(typeof bar()); // Works here :) // Explain
};
// foo is visible here // Explain
// bar is undefined here // Explain
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output of the following? Please explain***

```javascript
bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called"); 
}
```
```
in ra 
bar got called // function này đã được gọi từ ra từ đầu
something // function này được gọi ra ngay khi nó được tạo ra
```
## . Q. ***What will be the output of the following code? Please explain***

```javascript
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary); // Explain

  var salary = "5000$";

  console.log("My New Salary " + salary); // Explain
})();
```
```
in ra
Original salary was undefined // vì trong function có một biến được đặt tên trùng với tên bênh ngoài scope nên nó chỉ nhân giá trị của biến bênh trong scope mà cái biến này lại được khai báo sau khi log được dược sử dụng nên nên nó không tìm thấy giá trị của nó
My New Salary 5000$ // trường hợp này là vì log sử dụng sau khi biến được tạo ta và khởi tạo giá trị nên nó in ra được giá trị ra màng hình

```

```javascript
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary); // Explain

  salary = "5000$";

  console.log("My New Salary " + salary); // Explain
})();
```
```
in ra 
Original salary was undefined // lúc đầu salary nhận giá trị undefiend nên nó in ra giá trị undefiend
My New Salary 5000$ // lúc sau nó được gán lại bằng giá trị khác nen nó có giá tri là "5000$"
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of the following code? Please explain***

```javascript
function User(name) {
  this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person); // Explain
```
```
in ra
USA
vì đã truyền tham số 'USA' vào đối số name trong hàm User
và kết quả trả về là USA theo như tham số truyền vào

```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA); // Explain
```
```
in ra
hi there
vì nó log ra strA mà strA lúc này đang mang giá trị "hi there" cho dù strB có bị thay đổi thì nó vẫn nằm ở vùng nhớ độc lập so với strA trên stack không như object (nó chứa địa chỉ trên stack trỏ tới cùng vùng nhớ trên heap)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA); // Explain
```
```
in ra
{ prop1: 90 }
vì cả 2 object đang trỏ đến cùng một giá trị trên bộ nhớ heap nên khi objB thay đổi thì giá trị này cũng thay đổi theo và lúc này objA cũng đang trỏ đến giá trị này nền khi ta log objA thì nó sẽ ra kết quả là prop1 :90
```
## . Q. ***What would be the output of following code? Please explain***

```javascript
var objA = { prop1: 42 };
var objB = objA;
objB = {};
console.log(objA); // Explain
```
```
in ra 
{ prop1: 42 }
vì lần này object objB trống nên giá trị property của objA không thay đổi vẫn là prop1 :42
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA); // Explain
```
```
in ra 
[ 42, 1, 2, 3, 4, 5 ]
element đầu tiên đã bị thay đổi điều nay là do arrB đã thay đổi giá trị tại vị trí index = 0  và arrB =arrA điều này đã làm cho arrA thay đổi theo arrB lúc này tại index = 0 của arrA = 42 nên khi in arrA ra ta được [ 42, 1, 2, 3, 4, 5 ]
```
## . Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA); // Explain
```
```
in ra
[ 0, 1, 2, 3, 4, 5 ]
cũng như trên nhưng lần này arrA đã không bị thay đổi theo arrB điều này là do arrA.slice().  slice() là hàm sẽ trả về một chuỗi mới từ arrA (tạo ra vùng nhớ mới trong ô nhớ),  không liên quan đến arrA nữa nên arrA không bị thay đổi theo arrB
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA); // Explain
```
```
in ra 
[ { prop1: 42 }, { someProp: 'also value of array A!' }, 3, 4, 5 ]
mảng arrA đã bị thay đổi theo arrB theo như cách của mấy bài toán trước cụ thể nó thay đổi giá trị prop1 =  "value of array A!!" thành prop1 = 42 như arrB đã thay đổi 
```
## . Q. ***What would be the output of following code? Please explain***

```javascript
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA); // Explain
```
```
in ra
[ { prop1: 42 }, { someProp: 'also value of array A!' }, 3, 4, 5 ]
trong lần này chỉ mỗi các thành phần là object bị thay đổi giá trị property ban đầu của chúng ở arrA các thành phần còn lại đều không bị ảnh hưởng nhờ arrA.slice()  ( slice() sẻ cho ra một mảng mới từ arrA)
```
```javascript
function slice(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result; // Explain
}
```
```
hàm slice() ban đầu khai báo array result trống, qua vòng lặp từng phần tử của arr(aray) được truyền vào cho mảng result, rồi cuối cùng trả về array result mang toàn bộ giá trị phần từ của mảng arr được truyền vào hàm
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***console.log(employeeId);***

1.  Some Value
2.  Undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 4

## . Q. ***What would be the output of following code? Please explain***

```javascript
console.log(employeeId);
var employeeId = "19000";
```

1.  Some Value
2.  undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain:2 // tại vì employeeid được khai báo và khời tạo sau khi in log()

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();
```

1.  '122345'
2.  undefined
3.  Type Error
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain:2 // tên biến trùng nhau nên lấy biến trong cùng scope mà cái biến này lại khai báo sau khi in log() nên nó không nhân được giá trị

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
  (function () {
    var employeeId = "abc1234";
  })();
})();
```

1.  '122345'
2.  undefined
3.  '1234abe'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2 // giống như trường hợp bênh trên, còn cái function lồng vào trong kia có biến var trong đấy chỉ có tác dụng bênh trong đấy .

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log("Hi I am inside displayFunc");
  };
})();
```

1.  undefined
2.  function
3.  'Hi I am inside displayFunc'
4.  ReferenceError: displayFunc is not defined

_Answer_and_Explain: 2 // displayFunc dược tạo ra sau khi in log nên nó không nhân được giá trị bênh trong còn "    console.log("Hi I am inside displayFunc");" thì nằm bênh trong function mà function này tạo ra mà chưa được gọi thông qua 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";
function foo() {
  employeeId = "123bcd";
  return;
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd'
3.  'abc123'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain:2 // tại vì ban đầu employeeId = "abc123" nhưng sau đó hàm foo() được gọi ra. hàm này gán lại giá trị cho employeeId thành 123bcd nên cuối cùng employeeId mang giá trị là 123bcd rồi in ra màng hình

##  . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";

function foo() {
  employeeId = "123bcd";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd'
3.  'abc123'
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 3 // cũng như trường hợp ở trên nhưng lần này có thêm dòng "function employeeId() {}" dòng này có tác dụng tương đương với "const employeeId = () => {}" (gán vào 1 function trống) điều này có thể hiểu đã làm cho phép gán trước đó bị hủy bỏ vậy nên nó lấy giá trị ban đầu khởi tạo là abc123

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "abc123";

function foo() {
  employeeId();
  return;

  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
```

1.  undefined
2.  function
3.  string
4.  ReferenceError: employeeId is not defined

_Answer_and_Explain: 2 // function employeeid đã log ra kiểu dữ liệu của chính nó, còn giá trị abc123 do nó mằn bênh ngoài(không cùng scope) nên đã ưu tiên lấy tên function bênh trong

## . Q. ***What would be the output of following code? Please explain***

```javascript
function foo() {
  employeeId();
  var product = "Car";
  return;

  function employeeId() {
    console.log(product);
  }
}
foo();
```

1.  undefined
2.  Type Error
3.  'Car'
4.  ReferenceError: product is not defined

_Answer_and_Explain: 1 // function employeeId được gọi trước khi biến product kịp nhận giá trị nên product trong function employeeid không có giá trị

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();
```

1.  undefined undefined
2.  Type Error
3.  function function
4.  ReferenceError: bar is not defined

_Answer_and_Explain: 3 // do cả hai abc và bar đều là function nên khi dùng typeof nó trả về giá trị là tên kiểu dữ liệu ta được kết quả là in ra 2 cái function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: true,
  });

  console.log(Object.keys(person));
})();
```

1.  Type Error
2.  undefined
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]

_Answer_and_Explain: 3 // Object .key() nó lấy tất cả key của các property có trong object và trả về là một Array tham số truyền vào là object cần lấy key property

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: false,
  });

  console.log(Object.keys(person));
})();
```

1.  Type Error
2.  undefined
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]

_Answer_and_Explain: 4 // cũng như  ở trên nhưng lần này đặt enumerable  = false (giá trị này nếu không set thì mặc định là false), điều này làm cho thuộc tính không được liệt kê trên object

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2 // vì 2 đối tượng là 2 địa chỉ tham chiếu khác nhau trên stack mặc dù nó có cùng 1 giá trị ( so sách bằng khi khác ô nhớ trên stack thì giá trị sẽ là false mặc dù cho có cùng giá trị )

## Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = new Object({ foo: "foo" });
  var objB = new Object({ foo: "foo" });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2 // cũng giống như trường hợp trên 2 object được tạo ra không cùng 1 địa chỉ tham chiếu đến vùng nhớ stack so sánh với nhau sẻ cho ra giá trị false

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create({
    foo: "foo",
  });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 3 // cũng như trên so sách 2 object khác nhau thì sẽ trả về false

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 2 // y chan trường hợp phía trên đều là 2 object

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

1.  false true
2.  false false
3.  true false
4.  true true

_Answer_and_Explain: 4 // trong trường hợp này mặc dù so sách 2 obj với nhau nhưng trả về giá trị là true bởi vì nó đã convert sang kiểu string và 2 đối tượng so sánh bây giờ là kiểu string chứ không phải là kiểu obj nữa

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

1.  true true true false
2.  true false true true
3.  true true true true
4.  true true false false

_Answer_and_Explain: 3 // bởi vì objB hiện tại đang gán object là objA nên objB === objA cho ra true và so sánh value của property với nhau cũng vậy

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  bar bar
3.  foo foo
4.  bar foo

_Answer_and_Explain:2 vì 2 cái array này nó trỏ đến cùng một vùng nhớ trên heap nên khi arrB thay đổi thì tạo ra một nhớ mới trên heap và cả arrA và arrB đều tham chiếu tới và hiễn nhiên arrA cũng vị vậy mà thay đổi từ 'foo' thành 'bar'

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  bar bar
3.  foo foo
4.  bar foo

_Answer_and_Explain:3 //vì ở đây như trên nhưng lần này thêm delete objA.foo , hành động này đã xóa đi ô nhớ mới do objB tạo ra và cả hai trỏ lại ô nhớ củ trên heap

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var objA = {
    foo: "foo",
  };
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

1.  foo bar
2.  undefined undefined
3.  foo foo
4.  undefined bar

_Answer_and_Explain: 2 // vì không sử dụng Object.create() như bài trước nên khi arrB được gán giá trị mới thay vì tạo ra một ô nhớ mới trên heap nó sẽ ghi đè lênh ô nhớ cũ, lúc này chỉ có 1 ô nhớ mà cả hai Array đang trỏ tới và hành động tiếp theo "delete objA.foo" đã xóa đi ô nhớ duy nhất mà cả hai đang trỏ vào, vậy nên khi log value ra thì sẽ là undefined

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = new Array("100");
  console.log(array);
  console.log(array.length);
})();
```

1.  undefined undefined
2.  [undefined × 100] 100
3.  ["100"] 1
4.  ReferenceError: array is not defined

_Answer_and_Explain: 3 // đầu tiên nó log ra tất cả giá trị trong Array, sau đó nó log ra độ dài của array đấy ( có bao nhiêu phần tử)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();
```

1.  [] [] [Array[5]] 1
2.  [] [undefined × 100] Array[5] 1
3.  [] [] ['1',2,'3',4,5.6] 5
4.  [] [] [Array[5]] 5

_Answer_and_Explain: 2 
```
[]                          //đây là một array để trống không có element bênh trong
[ <100 empty items> ]       //đây là một array nhưng nó lại truyền vào độ dài của array là 100 và không hề có value
[ [ '1', 2, '3', 4, 5.6 ] ] //đây là 1 array bênh trong có 1 element cũng là 1 array
1                           //vì chỉ có 1 element (element đó là array) nên lengh là = 1
```

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  delete array[10];
  console.log(array.length);
})();
```

1.  11
2.  5
3.  6
4.  undefined

_Answer_and_Explain: 1 // bởi vì ta dã gán vào index 10 mang giá trị 'f' nên nó tạo ra các element trống ở khoản giữa (lúc này lengh = 11) tiếp theo thực hiện delete array[10] tức là value tại index = 10 (hiện tại đang là 'f') bị xóa nhưng vẫn dể lại một element trống ( không có value ) vì thế nên lấy ra độ dài của array vẫn bằng 11 mặc dù đã xóa đi 1 phần tử index

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();
```

1.  4
2.  5
3.  6
4.  undefined

_Answer_and_Explain:

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
})();
```

1.  [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]
2.  [ 'cow', 'horse', 'cat', 'dog', 'rat', 'goat' ]
3.  Type Error
4.  undefined

_Answer_and_Explain: 1 // đầu tiên khởi tạo array animal và khởi tạo 2 giá trị vào trong array ban đầu thêm 'cat' vào cuối mảng ("cow", "horse","cat"), tiếp theo thêm "dog", "rat", "goat" vào đầu mảng ta được mảng mới 'dog', 'rat', 'goat', 'cow', 'horse', 'cat'

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" }));
  console.log([[1], [2], [3], [4]].indexOf([3]));
  console.log("abcdefgh".indexOf("e"));
})();
```

1.  1 -1 -1 4
2.  1 0 -1 4
3.  1 -1 -1 -1
4.  1 undefined -1 4

_Answer_and_Explain: 1 
```
1 // tìm kiếm số 1 trong mảng và trả vê index của phần tử đấy
-1 // không tìm thấy vì chỉ mục không được sử dụng cho object và array ( không tìm thấy nên trả về -1)
-1 // tương tự như trên
4 //chữ e nằm ở index thứ 4 trong string
```

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));
  console.log(array.indexOf(2, 3));
  console.log(array.indexOf(2, 10));
})();
```

1.  1 -1 -1
2.  1 6 -1
3.  1 1 -1
4.  1 undefined undefined

_Answer_and_Explain: 2 
```
1 // đây là tìm index nào có giá trị là 1
6 // đây cũng là tìm kiếm index nhưng là tìm từ vị trí index thứ 3 trờ về sau, 
-1 // cái này như trên nhưng là tìm từ index 10 trờ về sau ( vì mảng này chỉ có tối đa 10 index nên không còn tìm thấy gì ở đằng sau đó nữa nên trả về -1)

```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleby3 = numbers.some(function (element, index) {
    return element % 3 === 0;
  });

  console.log(containsDivisibleby3);
})();
```

1.  [ 2, 4, 8, 12, 16 ] [ 0, 3, 0, 0, 9, 0, 12]
2.  [ 2, 4, 8, 12, 16 ] [ 3, 9, 12]
3.  [ 2, 4, 8, 12, 16 ] true
4.  [ 2, 4, 8, 12, 16 ] false

_Answer_and_Explain: 3
```
[ 2, 4, 8, 12, 16 ] // đây là một mảng mới được chọn lọc ra từ mảng củ theo điều kiện chia hết cho 2
true // kiểm tra xem trong array number có phần từ nào chia hết cho 3 không nếu có trả về true , và nó đã tìm thấy
```

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var containers = [2, 0, false, "", "12", true];
  var containers = containers.filter(Boolean);
  console.log(containers);
  var containers = containers.filter(Number);
  console.log(containers);
  var containers = containers.filter(String);
  console.log(containers);
  var containers = containers.filter(Object);
  console.log(containers);
})();
```

1. [ 2, '12', true ]
   [ 2, '12', true ]
   [ 2, '12', true ]
   [ 2, '12', true ]
2. [false, true]
   [ 2 ]
   ['12']
   [ ]
3. [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
   [2,0,false,"", '12', true]
4. [ 2, '12', true ]
   [ 2, '12', true, false ]
   [ 2, '12', true,false ]
   [ 2, '12', true,false]

_Answer_and_Explain:1 // thật ra Object ,String,Number,Boolean đều là function nó trả về giá trị true nếu có 2, "12", và true

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();
```

1. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
2. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john','ritz ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
3. [ 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
4. [ 'foo' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]

_Answer_and_Explain:2 // menthod slice() nó trả về một array mới từ một phần của array củ bắt đầu từ vị trí index truyền vào cho đến hết array cũ

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();
```

1.  [ 'bar', 'john' ] [] [ 'foo' ]
2.  [ 'bar', 'john' ] [] [ 'bar', 'john' ]
3.  [ 'bar', 'john' ] [ 'bar', 'john' ] [ 'bar', 'john' ]
4.  [ 'bar', 'john' ] [] []

_Answer_and_Explain:1 
```
[ 'bar', 'john' ] // cắt lấy các phần tử từ index 1 trở đi
[] // lấy phần tử giữa index 1 và index 2 (vì không có gì ở giữa 2 index liền kề này nên kết quả la trống)
[ 'foo' ] vì mảng List đã bị chia cắt từ trước đó nên hiện tại chỉ còn lại 1 phần tử

```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort();
  console.log(arrayNumb);
})();
```

1.  [2, 8, 15, 16, 23, 42]
2.  [42, 23, 26, 15, 8, 2]
3.  [ 15, 16, 2, 23, 42, 8 ]
4.  [ 2, 8, 15, 16, 23, 42 ]

_Answer_and_Explain:3 // vì mặt định method sort() nó sắp xếp số theo thứ tự bản chữ cái chứ không phải là số nhỏ đến số lớn nhất

## . Q. ***What would be the output of following code? Please explain***

```javascript
function funcA() {
  console.log("funcA ", this);
  (function innerFuncA1() {
    console.log("innerFunc1", this);
    (function innerFunA11() {
      console.log("innerFunA11", this);
    })();
  })();
}

console.log(funcA());
```

1.  funcA Window {...}
    innerFunc1 Window {...}
    innerFunA11 Window {...}
2.  undefined
3.  Type Error
4.  ReferenceError: this is not defined

_Answer_and_Explain: 1 // trả về tất cả các giá trị object mà this tham chiếu đến (object ở đây hiện tại là window)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message);
  })(),
};

console.log(obj.innerMessage);
```

1.  ReferenceError: this.message is not defined
2.  undefined
3.  Type Error
4.  undefined true

_Answer_and_Explain:2 // this hiện tại đang lấy tham chiếu đến cái function đang chứa nó nên nó không nhân dược giá trị từ obj

## . Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj.innerMessage());
```

1.  Hello
2.  undefined
3.  Type Error
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 1 // this tham chiếu đến property của cùng object 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  },
};
console.log(obj.innerMessage());
```

1.  Type Error
2.  Hello
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain:3 // this lúc này đang trỏ đến cái function lồng bênh trong nên nó ko lấy được giá trị property từ obj do không cùng scope

## . Q. ***What would be the output of following code? Please explain***

```javascript
var obj = {
  message: "Hello",
  innerMessage: function () {
    var self = this;
    (function () {
      console.log(self.message);
    })();
  },
};
console.log(obj.innerMessage());
```

1.  Type Error
2.  'Hello'
3.  undefined
4.  ReferenceError: self.message is not defined

_Answer_and_Explain: 2 // this lúc này tham chiếu tới obj ta cùng biến self để chứa giá trị của this đang tham chiếu tới nên bây giờ biến self đang mang giá trị và có thể sử dụng ở trong 1 nơi khác (không cùng scope)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(this.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 3 // function hiện tại không có chứa property nào là message cả nên không tìm thấy

## . Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 2 // bời vì function đã thêm  property là message nên this nó sẽ tham chiếu và lấy giá trị được

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  myFunc.message = "Hi John";
  console.log(myFunc.message);
}
console.log(myFunc());
```

1.  Type Error
2.  'Hi John'
3.  undefined
4.  ReferenceError: this.message is not defined

_Answer_and_Explain: 2 // cung tương tự như trường hợp trên nhưng lần này nó tạo property bênh trong function

## . Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc(param1, param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

1.  2 2 2
2.  0 2 4
3.  undefined
4.  ReferenceError

_Answer_and_Explain: 1 //tại vị có 2 tham số truyền vào function sau đó lấy ra độ dài của function thì nó lấy ra được 2 phần tử chính là 2 tham số truyền vào mặc dù chúng chưa mang giá trị

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

1.  2 2 2
2.  0 2 4
3.  undefined
4.  ReferenceError

_Answer_and_Explain: 2 //arguments.length lấy tra số lượng tham sô truyền vào function

## . Q. ***What would be the output of following code? Please explain***

```javascript
function Person(name, age) {
  this.name = name || "John";
  this.age = age || 24;
  this.displayName = function () {
    console.log(this.name);
  };
}

Person.name = "John";
Person.displayName = function () {
  console.log(this.name);
};

var person1 = new Person("John");
person1.displayName();
Person.displayName();
```

1.  John Person
2.  John John
3.  John undefined
4.  John John

_Answer_and_Explain:  1
```
John   // ở đây ta khởi tạo person và truyền đối số name  = "John" và trong function (function cũng được coi là object) cũng tạo ra 1 property là name và ngán nó bằng đối số name truyền vào vì là peoperty nên sử dụng this sẽ tham chiếu đến được
Person // trường hợp này nó đã nằm bênh ngoài scope của function person , nên nó không thể lấy được property name = jodn , nên ta sử dụng this.name thì sẽ được hiểu là đang lấy tên của function (person)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What would be the output of following code? Please explain***

```javascript
function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);
```

1.  12345678 Window
2.  12345678 John
3.  12345678 undefined
4.  undefined undefined

_Answer_and_Explain: 3 // this chỉ có tác dụng trong cùng scope mang ra ngoài không được

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId);
```

1.  Reference Error
2.  aq123
3.  bq1uy
4.  undefined

_Answer_and_Explain: 4 // this không thể mang ra bênh ngoài sử dụng khi không cùng scope

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId);
console.log(new Employee().employeeId);
```

1.  bq1uy 1BJKSJ bq1uy undefined
2.  bq1uy 1BJKSJ bq1uy
3.  bq1uy 1BJKSJ kj182
4.  undefined 1BJKSJ kj182

_Answer_and_Explain: 2
```
bq1uy  //this lúc này tham chiếu đến object là window nên sử dụng được ,
1BJKSJ //không phát hiện trong function có property nào là JobId, nhưng trước đó đã khởi tạo thêm property bằng cách sử dụng prototype tạo JobId và gán giá tri cho nó 
bq1uy  // vì phát hiện bênh trong function có property này nên nó nhận và trả về giá trị này mà không nhân giá trị ở chổ khác nữa

```

## . Q. ***What would be the output of following code? Please explain***

```javascript
var employeeId = "aq123";
(function Employee() {
  try {
    throw "foo123";
  } catch (employeeId) {
    console.log(employeeId);
  }
  console.log(employeeId);
})();
```

1.  foo123 aq123
2.  foo123 foo123
3.  aq123 aq123
4.  foo123 undefined

_Answer_and_Explain: 1
```
foo123 // vì ngoại lệ đã được ném ra thông qua throw nên nó nhận giá trị employeeId của ngoại lệ thay vì nhận employeeId của object window
aq123 // nhận trực tiếp giá trị của employeeId 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var greet = "Hello World";
  var toGreet = [].filter.call(greet, function (element, index) {
    return index > 5;
  });
  console.log(toGreet);
})();
```

1.  Hello World
2.  undefined
3.  World
4.  [ 'W', 'o', 'r', 'l', 'd' ]

_Answer_and_Explain: 4 // bởi vì filter trả về là một Array, điều kiện bênh trong là chỉ lấy các giá trị có index > 5 nên "hello world" chỉ lấy từ ký tự thứ 5 trở đi ta được một Array [ 'W', 'o', 'r', 'l', 'd' ]

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return "Total amount left in account: " + this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.bind(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400)());
  console.log(withdrawAmountBy(300)());
})();
```

1. Total amount left in account: 5600 Total amount left in account: 5300
2. undefined undefined
3. Total amount left in account: 3600 Total amount left in account: 3300
4. Total amount left in account: 5600 Total amount left in account: 5600

_Answer_and_Explain: 1 // khi sử dụng bind() đã tạo ra một function mới do dó this đã nhận property của object barAccount thay vì nhận property của object fooAccount

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined

_Answer_and_Explain: 1 // menthod apply() nó sử đổi object mà this đang trỏ tới và thay đổi luôn tham số truyền vào cho function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var fooAccount = {
    name: "John",
    amount: 6000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 4000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.call(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined

_Answer_and_Explain: 1 // method call() gọi function với object và this trỏ tới và các tham số truyền vào , điều này làm thay đổi property mà this đàng trỏ đến và chúng mang một giá trị khác

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function greetNewCustomer() {
  console.log("Hello " + this.name);
}.bind({
  name: "John",
})());
```

1. Hello John
2. Reference Error
3. Window
4. undefined

_Answer_and_Explain:1 // nó đã truyền vào object nên this trong function sẽ trỏ đến đây

## Q. ***What would be the output of following code? Please explain***

```javascript
function getDataFromServer(apiUrl) {
  var name = "John";
  return {
    then: function (fn) {
      fn(name);
    },
  };
}

getDataFromServer("www.google.com").then(function (name) {
  console.log(name);
});
```

1. John
2. undefined
3. Reference Error
4. fn is not defined

_Answer_and_Explain: 1 // gọi function và truyền tham số sau đó truy cập tiếp vào property của nó thông qua function chứa nó và tiếp tục truyền tham số cho property (function)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  Array.prototype.sort = function (a, b) {
    return a - b;
  };
  arrayNumb.sort();
  console.log(arrayNumb);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    if (a == b) {
      return 0;
    } else {
      return a < b ? -1 : 1;
    }
  });
  console.log(numberArray);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numberArray);
})();
```

1. [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
2. undefined undefined undefined
3. [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
4. Reference Error

_Answer_and_Explain: 1 // vì ta đã thiết lập cách sắp sếp mặc định cho array trong function đầu tiên nên các function tiếp theo sử dụng sort thì đều trả về theo định nghĩa của sort trong function đầu tiên

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
(function () {
  function sayHello() {
    var name = "Hi John";
    return;
    {
      fullName: name;
    }
  }
  console.log(sayHello().fullName);
})();
```

1. Hi John
2. undefined
3. Reference Error
4. Uncaught TypeError: Cannot read property 'fullName' of undefined

_Answer_and_Explain: 4 // vì sau return ta đã dặt dấu ';' trong khi ta chưa định nghĩa là nó sẽ trả về cái gì còn cái ở dưới dược hiểu là 1 cái object nào đấy chứ không phải là cái cần trả về 

## . Q. ***What would be the output of following code? Please explain***

```javascript
function getNumber() {
  return 2, 4, 5;
}

var numb = getNumber();
console.log(numb);
```

1. 5
2. undefined
3. 2
4. (2,4,5)

_Answer_and_Explain: 1 // vì không thể trả về nhiều kết quả cùng lúc nên nó sẽ trả về cái cuối cùng , muốn trả về nhiều hơn 1 kết quả ta nên để nó vào array hoặc object nào đấy

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
function getNumber() {
  return;
}

var numb = getNumber();
console.log(numb);
```

1. null
2. undefined
3. ""
4. 0

_Answer_and_Explain: 2 // bởi vì nó return nhưng không có giá trị được return

## . Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return [
      x * y,
      function (z) {
        return x * y + z;
      },
    ];
  };
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6

_Answer_and_Explain: 1 // truyền paramerter cho từng thành phần return bênh trong, paramerter truyền đến đâu thi kết quả return đến đấy

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return {
      result: x * y,
      sum: function (z) {
        return x * y + z;
      },
    };
  };
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6

_Answer_and_Explain: 1 // khác với phía trên thay vì một array và truy cập vào theo chỉ số index , thì bây giờ là một object truy cập vào theo property

## . Q. ***What would be the output of following code? Please explain***

```javascript
function mul(x) {
  return function (y) {
    return function (z) {
      return function (w) {
        return function (p) {
          return x * y * z * w * p;
        };
      };
    };
  };
}
console.log(mul(2)(3)(4)(5)(6));
```

1. 720
2. undefined
3. Reference Error
4. Type Error

_Answer_and_Explain: 1 // cũng như trên ta truyền tham số lần lược cho các function bênh trong nó và ta dược kết quả trả về cuối cùng 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the value of `foo`? Please explain***

```javascript
var foo = 10 + "20";
```

_Answer_and_Explain: giá trị mà foo mang là "1020" kiểu string vì munber + string = string

## . Q. ***How would you make this work? Please explain***

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

_Answer_and_Explain_and_Code:
```
function add( a , b)
{
  return a + b
}

function add(a)
{
  return function next(b)
  {
    return b;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What value is returned from the following statement? Please explain***

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

_Answer_and_Explain:"goh angasal a m'i" //cho string thành array rồi đảo ngược array sau đó join trả về kiểu string

## . Q. ***What is the value of `window.foo`? Please explain***

```javascript
window.foo || (window.foo = "bar");
```

_Answer_and_Explain: error , object window không có property là foo (chưa định nghĩa)

## . Q. ***What is the outcome of the two alerts below? Please explain***

```javascript
var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

_Answer_and_Explain: 'Hello World' chỉ có alert trong function là hoạt động, do nhân được cả 2 giá trị từ 2 biến foo và bar còn cái alert ở ngoài chỉ nhân dược giá trị từ foo, còn bar có đang nằm trong scope của function
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the value of `foo.length`? Please explain***

```javascripts
var foo = [];
foo.push(1);
foo.push(2);
```

_Answer_and_Explain: bằng 2 vì foo đã thêm 2 element vào array nên lenght  =2

## . Q. ***What is the value of `foo.x`? Please explain***

```javascript
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```

_Answer_and_Explain: 'undefined' không thực hiện 2 phép gán liên tục được

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What does the following code print? Please explain***

```javascript
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
```

_Answer_and_Explain:
```
one // cái này in ra đầu tiên như bình thường
three // theo giải tích bênh dưới bất đồng bộ thì được sử lý riếng nên nó tạm cho setTimeOut qua nơi khác để sử lý
two // setTimeout là một kiểu của bất đồng bộ nên nó được thực hiện sau cùng khi mà call stask trống thì cái này mới đi vào nên nó in ra sau cùng
```

## . Q. ***What would be the result of 1+2+'3'? Please explain***

_Answer_and_Explain: 33 // đầu tiên 1+2 =3 , sau đó 3+"3" = "33" number+ string = string

## . Q. ***Write a script that returns the number of occurrences of character given a string as input? Please explain***

```javascript
function countCharacters(str) {
  return // one line only
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```
```javascript
function countCharacters(str ="") {
  return str.split("").filter((char)=>{if(char==="t") return true ; else return false}).join("").length
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What value is returned from the following statement? Please explain***

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

_Answer_and_Explain:'goh angasal a m'i' cho ra kiểu array rồi dảo ngược sau đó join thành kiểu string

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What does the following code print? Please explain***

```javascript
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
```

_Answer_and_Explain: in ra one và three , two. Do two được thực hiện sau cùng bời vì nó là bất đồng bộ

## . Q. ***For which value of x the results of the following statements are not the same? Please explain***

```javascript
//  if( x <= 100 ) {...}
if( !(x > 100) ) {...}
```

_Answer_and_Explain: 100 , với giá trị này thì chỉ có dòng trên thực hiện được còn phía duwois thì không

## . Q. ***What is g value? Please explain***

```javascript
f = g = 0;
(function () {
  try {
    f =
      function () {
        return f();
      } && f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() {
    g += 5;
    return 0;
  }
})();
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output? Please explain***

```javascript
function b(b) {
  return this.b && b(b);
}
b(b.bind(b));
```
```
output undefined 
```

## . Q. ***What will be the output? Please explain***

```javascript
c = (c) => {
  return this.c && c(c);
};
c(c.bind(c));
```
```
undefined, vì c chưa dược định nghĩa
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var g = 0;
g = 1 && g++;
console.log(g);
```
```
output 0
```

## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
!function(){}()
function(){}()
true && function(){}()
(function(){})()
function(){}
!function(){}
```
```
error , không có tên function
```

## . Q. ***What will expression return? Please explain***

```javascript
var a = (b = true),
  c = (a) => a;
(function a(a = (c(b).a = c = () => a)) {
  return a();
})();
```
```
output [Function: c],
```
## . Q. ***Predict the output of the following JavaScript code? Please explain***

```javascript
var a = true;
(a = function () {
  return a;
})();
```
```
[Function: a] ,vì lúc này đã được gán cho một cái function
```
## . Q. ***What will be the output? Please explain***

```javascript
var v = 0;
try {
  throw (v = (function (c) {
    throw (v = function (a) {
      return v;
    });
  })());
} catch (e) {
  console.log(e()());
}
```
```
output [Function: v], vì trong khối throw nó trả về v mà v hiện tại là function
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will the following code output? Please explain***

```javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
```
```
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
không lấy được giá trị do là index hiện tại là 4 mà cái mảng đấy chỉ có 3 index, do cơ chế bất đồng bộ nên khi vòng lặp chạy xong rồi thì i lúc này bằng 4 bậy giờ mới đi sử lý cái setTimeOut và nó lấy index =4 bỏ vào nên không thể tìm thấy (do làm gì có index 4 cái mảng nó chỉ có tối đa 3 index)
```


## . Q. ***What will be the output of the following code? Please explain***

```javascript
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output);
```
```
output 0, do truyền vào tham số = 0 nên nó trả về bằng 0, còn 'delete x' nó chỉ xóa được property của object và trả về true hoặc false
```
## . Q. ***What will be the output of the following code? Please explain***

```javascript
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee); // chổ này đã tạo ra một mô nhớ mới trên heap (hiểu như bản copy) của object Emploiy
delete emp1.company;
console.log(emp1.company);
```
```
output xyz, chính vì trước đó đã tạo ra một object mới nên khi xóa đi thì nó vẫn còn object ban đầu để trỏ đến 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Make this work:

```javascript
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```
```
function duplicate(arr =[])
{
  let arr1 = arr.concat(arr)
  return arr1
}
console.log(duplicate([1, 2, 3, 4, 5]));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Fix the bug using ES5 only? Please explain***

```javascript
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
```
```
var arr = [10, 32, 65, 2];
setTimeout(function () {
  {
    for (var i = 0; i < arr.length; i++)
      console.log("The index of this number is: " + i);
  }
}, 3000);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
console.log(eval("10 + 10")); // Explain

console.log(eval("5 + 5" + 10)); // Explain

console.log(eval("5 + 5 + 5" + 10)); // Explain

console.log(eval(10 + "5 + 5")); // Explain

console.log(eval(10 + "5 + 5 + 5")); // Explain
```
```
20  // cộng 2 sô như bình thường
515 // cộng chuỗi số 5 và số 10 ta dược 510 mang 510 + 5 = 515
520 // cộng chuỗi số 5 với số 10 ta được 510 cộng số 5 với số 5 được số 10, tiếp tục 10 + 510 = 520
110
115
```

## . Q. ***What will be the output of the following code? Please explain***

```javascript
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 30") + "<br>";

let result = a + b + c;
console.log(result); // Explain
```
```
output
200<br>4<br>40<br>
vì 10 * 20 = 200 +<br> ="200<br>". Tương tự với 2 cái còn lại
ta được dãy "200<br>"+"4<br>"+"40<br>"
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What will be the output of the following code? Please explain***

```javascript
// Example 01:
var prices = [12, 20, 18];
var newPriceArray = [...prices];
console.log(newPriceArray); // output [ 12, 20, 18 ]

// Example 02:
var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets); //output [ 'A', 'B', 'C', 'D', 'E' ]. dấu '...' đây là phép toáng cộng array gộp lại với nhau

// Example 03:
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); //output 20 Lấy ra số lớn nhất trong mảng

// Example 04:
var max = Math.max(..."43210");
console.log(max); //output 4, lấy ra số lớn nhất (số 4) trong array

// Example 05:
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // output [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]. dấu '...' có tác dụng nối array

// Example 06:
const country = "USA";
console.log([...country]);//output [ 'U', 'S', 'A' ],'...' chuyển string thành array
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Given and object and property path. Get value from property path***

```javascript
function getPropertyValue(TEMP_OBJECT, path) {
  return // One line only
}

//Input :
let srcObject = {
    'system' : {
        'database' : {
              '0' : {
                'host' : '54.232.122',
                'port' : 3306
             },
              '1' : {
                'host' : '54.232.123',
             'port' : 3307
             },
              '2' : {
                'host' : '54.232.123',
             }
       }
   }
},
path = "system.database.1.port";

//Output: 3307
```
```
function getPropertyValue(TEMP_OBJECT, path ="") {
    let pathh =  path.split(".")
    let returnn = TEMP_OBJECT[pathh[0].toString()][pathh[1].toString()][pathh[2].toString()][pathh[3].toString()]
    return returnn
  }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How to filter object from Arrays of Objects***
```
sử dụng filter() để lọc theo diều kiện
```

## . Q. ***How to replace all the occurrences of string***
```
```
sử dụng replace() để thay thế 1 ký tự đầu tiên tìm được , sử dụng replaceAll() để thay thế toàn bộ
```
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Write a script that returns the number of occurrences of character given a string as input***

```javascript
function countCharacters(str) {
  return // One line only
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```
``` javascript
function countCharacters(str = "") {
  const arr = str.split("");
  const uniqueChars = [...new Set(arr)].sort().join("");
  for (let i = 0; i < uniqueChars.length; i++) {
    const charDuplicate = arr.filter((char) => {
      if (char === uniqueChars[i]) return true;
      else return false;
    });
    console.log([...new Set(charDuplicate)] + " : " + charDuplicate.length);
  }
}
countCharacters("the brown fox jumps over the lazy dog")
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***write a script that return the number of occurrences of a character in paragraph***

```javascript
function charCount(str, searchChar) {
  
}
console.log(charCount("the brown fox jumps over the lazy dog", "o"));
```
```javascript
function charCount(str = "", searchChar="") {
  const arr =  str.split("")
  let charduplicate = arr.filter((char)=>{if(char === searchChar)return true ; else return false})
  return charduplicate.length
}
console.log(charCount("the brown fox jumps over the lazy dog", "o"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Recursive and non-recursive Factorial function***

```javascript
function recursiveFactorial(n) {
  
}

console.log(recursiveFactorial(5));

function factorial(n) {
  
}

console.log(factorial(5));
```
```javascript
// sử dụng đệ quy
function recursiveFactorial(n) {
  return n !== 0 ? n  * recursiveFactorial(n-1) : n + 1
}

console.log(recursiveFactorial(5));
```
```javascript
// không sử dụng đệ quy
function factorial(n) {
  let ketqua = 1;
  for(let i = n ; i > 0 ; i--)
  {
    ketqua *= i;
  }
  return ketqua;
}
console.log(factorial(5));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Memoization fibonnaci-sequence***

```javascript
// 1, 1, 2, 3, 5, 8, 13, 21, 34
// Memoization fibonnaci

function fibonnaci(num, memo = {}) {
  
}

console.log(fibonnaci(5)); // 8
```
```javascript
function fibonnaci(num, memo = {}) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr[i] = i;
      continue;
    }
    if (i === 1) {
      arr[i] = i;
      continue;
    }
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibonnaci(5));

```

## . Q. ***Random Number between min and max***

```javascript
// 5 to 7 - One line only
function random(min, max)
{
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1,7))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Reverse the number***

```javascript
function reverse(num) {
  
}

console.log(reverse(12345));
```
```javascript
function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }
console.log(reversedNum(12345))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Remove Duplicate elements from Array***

```javascript
var arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function removeDuplicate() {
  
}
console.log(removeDuplicates(arr)); // ["1", "2", "3", "5", "8", "9"] // O(n)

// Es6

```
```javascript
var arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function removeDuplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}
console.log(removeDuplicates(arr));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Deep copy of object or clone of object with and without a function***

```javascript
function deepExtend(out = {}) {
  
}

//Alternative if there are no function

console.log(deepExtend({}, { a: 1, b: { c: 2, d: 3 } }; // { e: 4, b: { f: 1 } }));
//output : { a: 1, b: {c: 2, d: 3, f: 1}, e: 4 }
```
```javascript
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function mergeDeep(target, source) {
  let output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

console.log(mergeDeep({ a: 1, b: { c: 2, d: 3 } }, { e: 4, b: { f: 1 } }));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Sort ticket based on flying order.***

```javascript
"use strict";

function SortTickets(tickets) {
  
}

SortTickets.prototype.getStartingPoint = function () {
  return null;
};

new SortTickets({
  Athens: "Rio",
  Barcelona: "Athens",
  London: "NYC",
  ND: "Lahore",
  NYC: "Barcelona",
  Rio: "ND",
});
```
```
hông hiểu đề đang muốn cái gì và phải làm sao
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Concurrent execute function based on input number***
?????????????????????
```javascript
function concurrent(num) {
  
}

concurrent.prototype.enqueue = function (value) {
  
};

concurrent.prototype.start = function () {
  
};

let callback = (done) => {
  
};

let c = new concurrent(2);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.start();
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Reversing an array***

```javascript
let a = [1, 2, 3, 4, 5];

//Approach 1: using reverse()


//Approach 2:
var reverse = function(array){
    var arrayOne = array
    var array2 = [];

    for (var i = arrayOne.length-1; i >= 0; i--){
      array2.push(arrayOne[i])
    } 
    return array2
}



console.log(reverse);
```

## . Q. ***Rotate 2D array***

```javascript
const transpose  = m => m[0].map((x,i) => m.map(x => x[i]));  "One line only"

console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
```

## . Q. ***Get Column from 2D Array***

```javascript
const getColumn = "One line only"

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(getColumn(twoDimensionalArray, 1)); //Result = [2,5,8]
```
```javascript
function getColumn(matrix, col){
    var column = [];
    for(var i=0; i<matrix.length; i++){
       column.push(matrix[i][col]);
    }
    return column;
 }
 const twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(getColumn(twoDimensionalArray, 1)); 
```

## Q. ***Get top N from array***

```javascript
function topN(arr, num) {

}

console.log(topN([1, 8, 3, 4, 5], 2)); // [5,8]
```
```javascript
const topN = (arr = [], num = 1) => {
    if(num > arr.length){
       return [];
    };
    const sorter = (a, b) => b - a;
    const descendingCopy = arr.slice().sort(sorter);
    return descendingCopy.splice(0, num);
 };
 console.log(topN([1, 8, 3, 4, 5], 2));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Get query params (SQL) from Object***

```javascript
function getQueryParams(obj) {
  
}

console.log(
  getQueryParams({
    name: "Umesh",
    tel: "48289",
    add: "3333 emearld st",
  })
);
```
```javascript
function getQueryParams(obj) {
    return 'SELECT * form obj'
}
console.log(
  getQueryParams({
    name: "Umesh",
    tel: "48289",
    add: "3333 emearld st",
  })
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Consecutive 1's in binary***

```javascript
function consecutiveOne(num) {
  
}
//13 = 1101 = 2
//5 = 101 = 1
console.log(consecutiveOne(5)); //1
```
```javascript
function consecutiveOne(num) {
  let arr = casebinary(num).map((item)=>{return parseInt(item,2)})
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < arr.length) {
       if (arr[right] === 0) {
          if (right - left > max) {
             max = right - left
          };
          right++;
          left = right;
       } else {
          right++
       };
    };
    return right - left > max ? right - left : max;
}
function casebinary(num)
{
  let arr = Number(num).toString(2).split("")
  return arr;
}
console.log(consecutiveOne(5))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Spiral travesal of matrix***

```javascript
var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var spiralTraversal = function (matriks) {
  
};
console.log(spiralTraversal(input)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```
```javascript
function spiralTraversal(array) {
  let discovered = new Set();
  let result = [];  
  let totalSpots = array.length * array[0].length;
  let direction = 'right';

  for (var i = 0; i < array.length; i ++) {
    for (var j = 0; j < array[i].length; j++) {   

      while (totalSpots) {
        while (direction === 'right' && !!bounds(array, i, j) && !discovered.has(array[i][j])) {  
          discovered.add(array[i][j]);                        
          result.push(array[i][j]);
          totalSpots--;                            
          j++;                         

        }

        direction = 'down';  
        i++;
        j--;


        while (direction === 'down' && !!bounds(array,i, j) && !discovered.has(array[i][i])) {      
          discovered.add(array[i][j]);                    
          result.push(array[i][j]);
          totalSpots--;          
          i++;                                           
        }


        direction = 'left';  
        j--;
        i--;


        while (direction === 'left' && !!bounds(array, i, j) && !discovered.has(array[i][j])) {  
          discovered.add(array[i][j]);                    
          result.push(array[i][j]);
          totalSpots--;       
          j--;                         
        }


        direction = 'up';          
        i--;
        j++


        while (direction === 'up' && bounds(array, i, j) && !discovered.has(array[i][j])) {
          discovered.add(array[i][j]);          
          result.push(array[i][j]);
          totalSpots--;          
          i--;                                   
        }

        direction = 'right';        
        j++;
        i++;

      }          
    }
  }
  return result;
}

function bounds(array, i, j){
  if (i < array.length && i >= 0 && j < array[0].length && j >= 0) {
    return true;
  } else {
    return false;
  }
};
var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralTraversal(input));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Merge Sorted array and sort it.***

```javascript
function mergeSortedArray(arr1, arr2) {
  // One line only
}

console.log(mergeSortedArray([1, 2, 3, 4, 5, 6], [0, 3, 4, 7])); // [0, 1, 2, 3, 4, 5, 6, 7]
```
```javascript
function mergeSortedArray(arr1, arr2) {
  let arr3 = [...arr1,...arr2].sort()
  return remove_duplicates(arr3)
}
function remove_duplicates(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
  }
  for (var key in obj) {
      ret_arr.push(key);
  }
  return ret_arr;
}

console.log(mergeSortedArray([1, 2, 3, 4, 5, 6], [0, 3, 4, 7]));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Anagram of words***

```javascript
const alphabetize = (word) => word.split("").sort().join("");

function groupAnagram(wordsArr) {
  
}

console.log(
  groupAnagram(["map", "art", "how", "rat", "tar", "who", "pam", "shoop"])
);
// result : {
//  amp: ["map", "pam"],
//  art: ["art", "rat", "tar"],
//  hoops: ["shoop"],
//  how: ["how", "who"]
// }
```
```JAVASCRIPT
var words = ["map", "art", "how", "rat", "tar", "who", "pam", "shoop"],
    map = {};

var normalizedWords = words.map( function( word ){
  return word.split('').sort().join('');
});

normalizedWords.forEach( function ( normalizedWord, index){
  map[normalizedWord] = map[normalizedWord] || [];
  map[normalizedWord].push( words[index] );
});

Object.keys( map ).forEach( function( normalizedWord , index  ){
  var combinations = map[normalizedWord];
  if( combinations.length > 1 ){
    console.log( combinations[0] + ": " + combinations.join(' ') );
  }
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Print the largest (maximum) hourglass sum found in 2d array.***
x x x
  x
x x x


```javascript
i -> n- 2

// if arr 6 X 6 then iterate it till 4 X 4  [reduce by two]
// if arr 8 X 8 then iterate it till 6 X 6  [reduce by two]
function main(arr) {
  console.log(maxScore);
}
```
```javascript
let numbers = [
  [1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6],
];
(function main(arr, x) {
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < arr.length; i = i + x) {
    for (let j = 0; j < arr.length; j = j + x) {
      let valueTotal =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        //
        arr[i + 1][j + 1] +
        //
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      score = valueTotal > score ? valueTotal : score;
    }
  }
  maxScore = score;
  console.log(maxScore); //35
})(numbers, 3);

```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Transform array of object to array***

```javascript
let data = [
  { vid: "aaa", san: 12 },
  { vid: "aaa", san: 18 },
  { vid: "aaa", san: 2 },
  { vid: "bbb", san: 33 },
  { vid: "bbb", san: 44 },
  { vid: "aaa", san: 100 },
];

let newData = data.reduce((acc, item) => {
  
}, {});

console.log(Object.keys(newData).map((key) => newData[key]));

// Result
// [[object Object] {
//   san: [12, 18, 2, 100],
//   vid: "aaa"
// }, [object Object] {
//   san: [33, 44],
//   vid: "bbb"
// }]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Create a private variable or private method in object***

```javascript
let obj = (function () {
  
})();

obj.getPrivateValue(); // You are accessing private variable
console.log("p" in obj); // false
obj.callPrivateFunction(); // this is private function
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Flatten only Array not objects***
. todo
```javascript
function flatten(arr, result = []) {
  return result;
}

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flatten(input)); // [1, { a: [2, [3]]}, 4, 5, 6, 7, "hi", 8, 9, 10]

function flattenIterative(out) {
  return result;
}
var list1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let input = [1, { a: [2, [3]] }, 4, [5, [6]], [[7, ["hi"]], 8, 9], 10];
console.log(flattenIterative1(input));
var list2 = [0, [1, [2, [3, [4, [5]]]]]];
console.log(flattenIterative1(list2)); // [0, 1, 2, 3, 4, 5]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Find max difference between two number in Array***

```javascript
function maxDifference(arr) {
  return maxDiff;
}

console.log(maxDifference([1, 2, 4])); // [1 - 4 ] = 3
```
```javascript
function maxDifference(arr) {
  let maxDiff = Math.max.apply(null,arr) - Math.min.apply(null,arr)
  return maxDiff;
}

console.log(maxDifference([1, 2, 4]));
```
## Q. ***swap two number in ES6 [destructing]***

```javascript
let a = 10,
  b = 5;
[a, b] = [b, a];
```
```javascript
let a = 10,
  b = 5;
  console.log(`The value of a before swapping: ${a}`);
  console.log(`The value of b before swapping: ${b}`);
//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Panagram ? it means all the 26 letters of alphabet are there***

```javascript
function panagram(input) {
  
}
function processData(pannagram){

}

processData("We promptly judged antique ivory buckles for the next prize"); // pangram
processData("We promptly judged antique ivory buckles for the prize"); // Not Pangram
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Convert a number into a Roman Numeral***

```javascript
function romanize(num) {
  
}

console.log(romanize(3)); // III
```
```javascript
function romanize (num) {
  if (isNaN(num))
      return NaN;
  var digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
console.log(romanize(3));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***check if parenthesis is malformed or not***

```javascript
function matchParenthesis(str) {
  return result.length === 0;
}

console.log(matchParenthesis("}{{}}"), matchParenthesis("{{[]}}")); // false - true
```
```
sai ngay từ dấu ngoặc "}" đầu tiên trong phần truyền tham số, ở log
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Create Custom Event Emitter class***
. todo
```javascript
class EventEmitter {
  
}

let e = new EventEmitter();
e.on("callme", function (args) {
  console.log(`you called me ${args}`);
});
e.on("callme", function (args) {
  console.log(`testing`);
});

e.emit("callme", ["a", "b"], { firstName: "umesh", lastName: "gohil" });
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Max value from an array***

```javascript
const arr = [-2, -3, 4, 3, 2, 1];
// Do the Fastest Way

// Do the Slower Way
```
```javascript
const arr = [-2, -3, 4, 3, 2, 1];
console.log(
   Math.max.apply(null,arr)
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***search function called after 500 ms***

```javascript
<input type="text" class="search" />;

let timer = null;
function searchOptions(value) {
  
}

let search = document.querySelector(".search");
search.addEventListener("keyup", function () {
  searchOptions(this.value);
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Move all zero's to end***

```javascript
const moveZeroToEnd = (arr) => {
  return arr;
};

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0])); // [1, 8, 2, 3, 4, 5, 0, 0, 0, 0, 0]
```
```javascript
const moveZeroToEnd = (arr=[]) => {
  
  return arr.sort((a,b)=>{return b -a});
};

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0]));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Decode message in matrix [diagional down right, diagional up right]***

```javascript
const decodeMessage = (mat) => {
  return message;
};

let mat = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decodeMessage(mat)); //IROELEA
```
```javascript
const decodeMessage = (mat = []) => {
  let beetween = Math.floor(mat[0].length / 2);
  let message = [];
  let i = 0;
  for (let j = 0; j < mat[0].length; j++) {
    //message.push(j <= beetween ? mat[j][j] : mat[j - (i = i + 1)][j]);
    if (j <= beetween)
    {
      message.push(mat[j][j])
    }
    else 
    {
      i++
      message.push(mat[j - i][j])
    }
  }
  return message.join("");
};

let mat = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decodeMessage(mat));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***find a pair in array, whose sum is equal to given number.***

```javascript
const hasPairSum = (arr, sum) => {
  return result;
};

console.log(hasPairSum([1, 2, 4, 5], 8)); // null
console.log(hasPairSum([1, 2, 4, 4], 8)); // [2,3]

// NOTE: if array is not sorted then subtract the value with sum and store in difference
// then see if that value exist in difference then return true.
```
``` javascript
const hasPairSum = (arr = [], sum) => {
  arr.sort((a, b) => {
    return b - a;
  });
  if (arr[0] + arr[1] < sum) {
    return null;
  } else {
    return  [arr[0],arr[1]];
  }
};
console.log(hasPairSum([1, 2, 4, 5], 8)); // null
console.log(hasPairSum([1, 2, 4, 4], 8));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Binary Search [Array should be sorted]***

```javascript
function binarySearch(arr, val) {
  
}

console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 22));
console.log(binarySearch([-1, 10, 22, 35, 48, 56, 67], 27));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Pascal triangle.***

```javascript
function pascalTriangle(n) {
  
}

console.log(pascalTriangle(2));
```
```javascript
const pascalTriangle = n => {
  const arr = []
  
  for (let i = 0; i < n; i++) {
      const row = [1]
      
      for (let j = 1; j < i; j++) {
          row.push(arr[i-1][j-1] + arr[i-1][j])
      }
      
      if( i > 0 ) row.push(1)
      
      arr.push(row)
  }
  
  return arr
}

console.log(pascalTriangle(6))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Explain the code below. How many times the createVal function is called?***

```javascript
function createVal() {
  return Math.random();
}

function fun(val = createVal()) {
  console.log(val);
}

fun();
fun(5);
```
```
được gọi 1 lần, gọi ở phần tham số truyền vào của hàm fun, khi chương trình đọc thanm số đầu vào cùng lúc đó hàm createVal cũng được gọi
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

```
B : sử dụng Let nó không có cơ chế hoisting, nên nó không lấy được giá trị còn var thì có cơ chế này nên nó nhận được
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`
```
C :vì ở vòng lặp đầu tiên ta dùng biến var nên nó được khai báo ở ngoài ( do cơ chế hoisting ) và setTimeOut là hầm bất đồng bộ nên là nó chờ bênh ngoài vì lúc này biến i đã liên tục thay đổi giá trị của nó khi nó đang thực hiện bieenh ngoài nên kết quả cuối dùng mà nó nhận được là toàn là 3
còn ở vòng lặp thứ 2 biến i sử dụng let nên nó chỉ có tác dụng trong scope của nó nên cứ mỗi vòng lặp xãy ra biến i của  setTimeOut bênh ngoài không bị thay đổi bởi i trong vòng lặp ( vì dùng let) 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`
```
B : cái đầu tiên hàm diameter this hoạt động bình thường do ở trong cùng object, cái thứ 2 cũng là function như cái đầu tiên nhưng mà trong ES2015 không có cung cấp sử dụng this cho hàm mũi tên
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`
```
A : vì số 1 là được hiểu là truthy nên ra true ngược lại ở đây ta thêm dấu '+' đằng trước thì nó hiểu là số nên từ true nó trả về giá trị số là 1. vì "lydia" cũng là truthy nhưng thêm dấu '!' đằng trước nên nó hiểu đây là kiểu boolean và đảo ngược từ true thành false
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***Which one is true? Please explain***

```javascript
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid
```
A : đây là không hợp lệ vì không thể truy cập từ object này sang object khác được
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`
```
A : vì ta thấy c là object mà object giá trị thực nó chỉ dược lưu trên heap và dược ô nhớ trên stack trỏ tới. Gán d = c, lúc này ta đã tạo ra một địa chỉ tham chiếu mới trên stack và trỏ đến cùng ô nhớ trên heap, khi ta thay đổi giá trị ô nhớ này thì dĩ nhiêu d trỏ đến thì cũng bị thay dổi giá trị thành 'hello'
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`
```
D : vì ta đã khởi tạo một object mới từ class Chameleon và tạo cho object này 1 property khác, hoàn toàn không có cái menthod nào ở đây
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`
```
A : nếu không tạo property bênh trong thì object này sẽ rỗng
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What happens when we do this? Please explain***

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `"Woof"` gets logged.
- D: `ReferenceError`
```
A : function được tạo ra và chưa bao giờ được gọi
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`
```
A : trong object hiện tại chỉ chứa 2 property và không có cái menthod nào 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`
```
A : cái đầu tiên nhân dược giá trị là vì nó đã khởi tạo mới một object và gán parameter cho nó, còn cái phía dưới là do không sử dụng từ khóa 'new' nên đối tượng không được tạo mới
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What are the three phases of event propagation? Please explain***

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<img src="https://i.imgur.com/N18oRgd.png" width="200">
```
B
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***All object have prototypes.***

- A: true
- B: false

```
B
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`
```
C : đây là cộng chuỗi 1 + "2" = "12"
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`
```
C : number++ nó trả về giá trị ban đầu trước khi tăng 1
++ number nó tăng lênh 1 giá trị rồi sau đó trả về (trước đó number tăng lênh 1 rồi nên bây h tăng nữa là thành 2)
number in ra giá trị number hiện tại
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`
```
B : ở đây ta sử dụng Tagged template trong ES6, Template string có các thành phần nằm ngoài dấu {} đều trờ thành các element trong mảng và truyền vào paramater (ở đối số đầu tiên) trong function các đối số tiếp theo sẽ được truyền giá trị của các thành phần trong dấu '{}'
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`
```
C : 2 câu if ban đầu so sách không bằng nhau và trả về giá trị false là vì (đây là object) và nó so sánh trên vùng nhớ stack mà ở đây trên vùng nhớ này là 2 địa chỉ nhớ khác nhau (dùng để trỏ đến giá trị trên heap) nên nó sẽ cho ra kết quả false, 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`
```
C : ta đã biết array là thuộc về kiểu object nên nó trả về kiểu object là điều không hề khó hiểu
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`
```
 D : do age chưa được khai báo kiểu ( chỉ hiển thị lỗi này khi sử dụng strict mode)
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is value of `sum`? Please explain***

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`
```
A : phương thức eval dùng để thực thi mã bênh trong kiểu string nên trường hợp ở trên nó tiến hành tính toán như bình thường
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***How long is cool_secret accessible? Please explain***

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.
```
B 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`
```
B : vì nó nhận vào giá trị được truyền vào cuối cùng
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`
```
C : kiểm tra xem obj có tồn tại cái key này hay không nếu có thì trả về true không thì false, và set thì kiểm tra xem có giá trị nào như vậy tồn tại không
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`
```
D : chỉ nhân giá trị cuối cùng được gán vào cho key ( nếu có bị trùng tên key)
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.***

- A: true
- B: false
- C: it depends
```
B : vì this không có phạm vi là toàn cục nó chỉ hoạt động trong scope
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`
```
C : vì nó đã bỏ qua số 3, vì nếu 'i === 3' thì nó sẽ 'continue' ( nó sẽ bỏ qua vòng lặp này và thực hiện vòng lặp tiếp theo )
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`
```
A : bời cả 2 đều nằm trong object là window nên có thể truy cập tới được
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`
```
B : vì array nó cũng là một object nên nó có các tính chất của 1 object như chỉ lưu trử dữ liệu trên heap và địa chỉ con trỏ nằm trên stack, ở đây ta thấy object từ đầu đến cuối chỉ có 1 ô nhớ trên heap và có 2 địa chỉ đang tham chiếu đến đây là a[b] và a[c] 1 trong 2 , nên 1 trong 2 thay đổi giá trị thì cả hai sẽ bị thay đổi
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`
```
B : menthod 'setTimeOut()' nó là bất đồng bộ nên nó sẽ được sử lý ở một mơi khác rồi cho vào hàng đợi khi các tiến trình chính hoàn thành xong tất cả thì task này mới được cho vào hiển thị thông qua even loop
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the event.target when clicking the button? Please explain***

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.
```
B : in ra log cho tất cả các element trong thẻ <div> ngoài cùng
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***When you click the paragraph, What is the logged output? Please explain***

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`
```
B : in ra từ thẻ ngoài cùng vào trong
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`
```
D : vì sử dụng call thì nó sẽ thực thi hàm ngay lúc đấy luôn , còn bind thì nó sẽ tạo ta 1 cái hàm mới và hàm này chỉ thực thi khi được gọi hoặc sử dụng
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`
```
B: vì hàm sayHi nó đã trả về 1 function khác function này lại trả về số 0 , số 0 là kiểu munber
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

##  . Q. ***Which of these values are falsy? Please explain***

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy
```
A : có 7 ký loại được hiểu là falsy
 0 , 0n , null , undefined , false , NaN , ""

```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`
```
B : dùng typeof lần đầu là trả về 'number' (kiểu string ) lần thứ 2 là in ra kiểu trả về của typeof lần đầu là 'string'
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`
```
C : vì index của numbers có tối đa 3 cái , và nó đã truyền vào indext thứ 10 giá trị 11, điều này đã tạo ra hàng loạt element trống cụ thể là 7 cái 
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## . Q. ***What is the output? Please explain***

```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`
```
A : vì biến x có scope là ở trong khối catch, còn biến y do khai báo trên đầu nên nó có scope là trong một funciton nên sẽ log ra được giá trị của biến y
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Everything in JavaScript is either a...***

- A: primitive or object
- B: function or object
- C: trick question! only objects
- D: number or object

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does the `setInterval` method return in the browser? Please explain***

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this return? Please explain***

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 and 10, 20`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this return? Please explain***

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of `num`? Please explain***

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output`? Please explain***

```javascript
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: `20`, `40`, `80`, `160`
- B: `20`, `40`, `20`, `40`
- C: `20`, `20`, `20`, `40`
- D: `NaN`, `NaN`, `20`, `40`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

</p>
</details>  
---

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***With which constructor can we successfully extend the `Dog` class? Please explain***

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
```

- A: 1
- B: 2
- C: 3
- D: 4

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// index.js
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia Hallie";
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can we log the values that are commented out after the console.log statement? Please explain***

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

- A: `{ x: 100, y: 20 }`
- B: `{ x: 10, y: 20 }`
- C: `{ x: 100 }`
- D: `ReferenceError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Is this a pure function? Please explain***

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there, `
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

let city = person.city;
city = "Amsterdam";

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What kind of information would get logged? Please explain***

```javascript
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

- A: The result of the `fetch` method.
- B: The result of the second invocation of the `fetch` method.
- C: The result of the callback in the previous `.then()`.
- D: It would always be undefined.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument? Please explain***

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log("I want pizza"[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
// module.js
export default () => "Hello world";
export const name = "Lydia";

// index.js
import * as data from "./module";

console.log(data);
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

```javascript
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function giveLydiaPizza() {
  return "Here is pizza!";
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `["name", "age"]` and `undefined`
- D: `Error`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function nums(a, b) {
  if (a > b) console.log("a is bigger");
  else console.log("b is bigger");
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
class Person {
  constructor() {
    this.name = "Lydia";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name);
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const info = {
  [Symbol("a")]: "b",
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `undefined`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const name = "Lydia";

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && "Im"}possible!
You should${"" && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
```

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the value of output? Please explain***

```javascript
const set = new Set();

set.add(1);
set.add("Lydia");
set.add({ name: "Lydia" });

for (let item of set) {
  console.log(item + 2);
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[Object object]2`
- D: `"12"`, `Lydia2`, `[Object object]2`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<resolved>: 5}`
- D: `Error`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "Lydia" };

compareMembers(person);
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

console.log(colorConfig.colors[1]);
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is its value? Please explain***

```javascript
console.log("❤️" === "❤️");
```

- A: `true`
- B: `false`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which of these methods modifies the original array? Please explain***

```javascript
const emojis = ["✨", "🥑", "😍"];

emojis.map((x) => x + "✨");
emojis.filter((x) => x !== "🥑");
emojis.find((x) => x !== "🥑");
emojis.reduce((acc, cur) => acc + "✨");
emojis.slice(1, 2, "✨");
emojis.splice(1, 2, "✨");
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does this method do? Please explain***

```javascript
JSON.parse();
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
let name = "Lydia";

function getName() {
  console.log(name);
  let name = "Sarah";
}

getName();
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
function* generatorOne() {
  yield ["a", "b", "c"];
}

function* generatorTwo() {
  yield* ["a", "b", "c"];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`
å
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
console.log(`${((x) => x)("I love")} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`å

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will happen? Please explain***

```javascript
let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Which method(s) will return the value `'Hello world!'`? Please explain***

```javascript
const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the output? Please explain***

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Predict the output***

```js
if(2 == true) // returns false

if(2 == false) // returns false
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time? Please explain***

```js
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  
}

// Output
// 8 
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How will you remove duplicates from an array in JavaScript? Please explain***

**a.) Using set()**  
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
```
**b.) Using filter()**   
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
```
**c.) Using forEach()**  
```javascript
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
```

**d.) Using set()** 

```js
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
```

**e.) Using Hashmap** 

```js
// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Given a string, reverse each word in the sentence***

```js
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW

var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  // One line only
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Implement enqueue and dequeue using only two stacks***

Enqueue means to add an element, dequeue to remove an element.

```js
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  
}

function dequeue(stackInput, stackOutput) {
 
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How would you use a closure to create a private counter? Please explain***

```js
function counter() {
  
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to divide an array in multiple equal parts in JS? Please explain***

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lenth = 3;

function split(len) {
  
}
split(lenth);

// Output
(3) [1, 2, 3]
(3) [4, 5, 6]
(3) [7, 8, 9]
(1) [10]
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a random integers function to print integers with in a range? Please explain***

```js
/**
 * function to return a random number 
 * between min and max range
 * 
 * */
function randomInteger(min, max) {
  // One line only
}
randomInteger(1, 100); // returns a random integer from 1 to 100
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to convert Decimal to Binary in JavaScript? Please explain***

**Solution 01:**

```js
function DecimalToBinary(number) {
  
}

DecimalToBinary(10);
```

**Solution 02:**

```js
let val = 10;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you make first letter of the string in an uppercase? Please explain***

```js
function capitalizeFirstLetter(string) {
  
}

console.log(capitalizeFirstLetter("hello world")); // Hello World
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write a function which will test string as a literal and as an object? Please explain***

```js
function check(str) {
  
}

var ltrlStr = "Hi I am string literal";
var objStr = new String("Hi I am string object");

console.log(check(ltrlStr)); // It is a string literal
console.log(check(objStr)); // It is an object of string
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you find min and max value in an array? Please explain***

```js
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  // One line only
}
function findMax(arr) {
  // One line only
}

console.log(findMin(marks));
console.log(findMax(marks));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do you find min and max values without Math functions? Please explain***

```js
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  
}

function findMax(arr) {
  
}

console.log(findMin(marks));
console.log(findMax(marks));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write code for merge two JavaScript Object dynamically? Please explain***

Let say you have two objects

```js
const person = {
  name: "Tanvi",
  age: 28
};

const address = {
  addressLine1: "Some Location x",
  addressLine2: "Some Location y",
  city: "Bangalore"
};
```

Write merge function which will take two object and add all the own property of second object into first object.

```js
merge(person , address); 
 
/* Now person should have 5 properties 
name , age , addressLine1 , addressLine2 , city */
```

**Method 1: Using ES6:**

```js

console.log(merge(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

**Method 2: Without using built-in function:**

```js
function mergeObject(toObj, fromObj) {
  
}

console.log(mergeObject(person, address));
// {name: "Tanvi", age: 28, addressLine1: "Some Location x", addressLine2: "Some Location y", city: "Bangalore"}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>