/* 物件 Object
key 鍵  value 值  */

var person1 = {
    name:"小夏",
    age:22,
    is:true
};
// 取出物件中的資料用 物件名稱 . 資料名稱 即可回傳
document.write(person1.name +"<br/>");

var person2 = {
    name:"小名",
    age:22,
    is:true,
    // 這個函式裡面的this是指這個物件名稱
    print1:function(){
        document.write(this.name +"<br/>");
    }
};
// 第二種輸出方式
person2.print1();

// 用物件寫一個資料庫
var data ={
    title:"Elon Musk",
    age:52,
    company:[
        {
            name1:"SpaceX",
            position:"董事長、執行長",
            is:true
        },
        {
            name1:"Tesla",
            position:"執行長",
            is:true
        },
        {
            name1:"Twitter",
            position:"持有人",
            is:true
        }
    ]
};
// 可以輸出多筆資料
document.write(data.title+"<br/>",data.age+"<br/>",data.company[0].name1);