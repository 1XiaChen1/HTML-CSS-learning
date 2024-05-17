// if 迴圈

// 如果今天 下雨 就不出門
var rainy = true
var not_rainy = false
if(rainy){
    document.write("今天不出門"+"<br/>");
}

// 如果今天 下雨 就不出門
// 如果今天 不下雨 就出門
if(not_rainy){
    document.write("今天不出門"+"<br/>");
}
else{
    document.write("今天出門"+"<br/>");
}

/* 如果考100分 A++
    考90分 A+
    考80分 A
    考70分 B+
    考60分 B   */
// 下面這行是讓變數隨機產生0~100的數值
var score = Math.round(Math.random()*100);

document.write(score);

if(score == 100){
    document.write("恭喜你 A++ !" +"<br/>");
}
else if(score >= 90){
    document.write("恭喜你 A+ !" +"<br/>");
}
else if(score >= 80){
    document.write("恭喜你 A !" +"<br/>");
}
else if(score >= 70){
    document.write("恭喜你 B+ !" +"<br/>");
}
else{
    document.write("恭喜你 B !" +"<br/>");
}

/* 如果考試有 及格 又 沒下雨 就可以出門玩 */
not_rainy = true;

if(score >= 60 && not_rainy){
    document.write("可以出門玩" +"<br/>");
}
else{
    document.write("今天不能出門玩" +"<br/>");
}

/* 如果考試有 及格 或 沒下雨 就可以出門玩 */
not_rainy = Math.random()<0.5;

document.write(not_rainy);

if(score >= 60 || not_rainy){
    document.write("可以出門玩" +"<br/>");
}
else{
    document.write("今天不能出門玩" +"<br/>");
}

// 用 if 判斷哪個數最大
// 使用者輸入框
num1 = prompt("請數入num1數(結果會顯示哪個值最大)");
num2 = prompt("請數入num2數(結果會顯示哪個值最大)");
num3 = prompt("請數入num3數(結果會顯示哪個值最大)");
// 將字串變成數值
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
// 判斷式
if(num1>=num2 && num1>=num3){
    document.write(num1);
}
else if(num2>=num1 && num2>=num3){
    document.write(num2);
}
else{
    document.write(num3);
}
