//字串與字串的用法
var phrase = "hellow Mr.Chen "
var phrase2 = "hellow \"Mr.Chen\""
var ha = "Hahaha"

document.write(phrase+"<br/>");

document.write(phrase2+"<br/>");

document.write(ha+"<br/>");

document.write(phrase+ha+"<br/>"); 
//.length用於回傳字串長度。
document.write(phrase.length+"<br/>");
//.toUpperCase用於將所有英文變大寫。
document.write(phrase.toUpperCase()+"<br/>");
//.toLowerCase用於將所有英文變小寫。
document.write(phrase.toLowerCase()+"<br/>");
//.cherAt用於回傳字串中的某一位。
document.write(phrase.charAt(1)+"<br/>");
//.indexOf用於回傳字串中的字母(取第一個)在第幾位，但如果沒有該字母就會變 -1 。
document.write(phrase.indexOf("M")+"<br/>");
//.substring用於指定輸出字串中的幾到幾位元。
document.write(phrase.substring(0,5)+"<br/>");