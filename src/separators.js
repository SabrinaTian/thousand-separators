'use strict';

function thousands_separators(num) {
    var s=1011540.25;
    var num= s.toString();         //将数转换为字符串
    var digit = num.indexOf(".");
    var int = num.slice(0,digit);   //提取出数的整数部分
    var numLength = num.length;     //获取整个数值的长度
    var intLength = int.length;     //获取整数的长度
    var decimals = num.substr(digit+1,numLength-intLength); //提取出小数
    var decLength = decimals.length; //获取小数的长度
    if(intLength>3){
        var result = '',counter = 0;
        for (var i = intLength - 1; i >= 0; i--) {
            counter++;
            result = num.charAt(i) + result;
            if (!(counter % 3) && i != 0) { result = ',' + result; }
        }
    }
    if(decLength>1){
        var result1 = result+"."+decimals;
        alert(result1);
    }else{
        var result1 = result;
        alert(result1);
    }
}

module.exports = thousands_separators;
