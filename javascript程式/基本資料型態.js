//    !基本資料型態!
// 變數 可以是英文的大寫小寫，或是加上底線 _、錢符號 $ ，
//如果是井字號之類的就會有錯誤，開頭是數字也會有錯誤。
var hellow = "你好";
var number = 123.456; //數字
var string = "Sam"; //字串
var  bollinger_number = true; //布林數
//變數在插入其中做變數資料的修改，輸出就會不一樣。
document.write(hellow+"<br/>")
hellow = "1 ";
document.write(hellow+number+"<br/>");
hellow = "2 ";
document.write(hellow+string+"<br/>");
hellow = "3 ";
document.write(hellow+bollinger_number+"<br/>");
