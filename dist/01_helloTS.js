console.log("hello");
let b;
b = 10;
// b = 'hello';//会报错
// let c: boolean = true;
//如果变量的声明和赋值同时进行，则ts可以自动对变量进行类型检测
let c = true;
//第三个number是对返回值的类型进行限制
function sum(a, b) {
    return a + b;
}
// sum(1, '23')//会报错
let d;
d = '123';
let e; //关闭此变量的类型检测，不建议使用any类型
let f; //未知类型
e = 'hello';
b = e;
let s;
// 类型断言：
s = e;
s = e;
function fn() {
    // return '123'//会报错
}
function fn2() {
    throw new Error('报错了');
}
let obj;
obj = {};
// 在属性名后面加问号表示属性可选
let obj2; //必须写name属性，age不必
obj2 = { name: 'qing' };
// [propName:string]:any 表示可以有任意属性
let obj3;
obj3 = { name: 'qing', gender: '女' };
let arr; //字符串数组
arr = ['a', 'b'];
let arr2; //数值数组
arr2 = [1, 2];
let arr3; //数值数组
arr3 = [1, 2];
//元祖：就是固定长度的数组
let h;
h = ['a', 'b'];
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let en;
en = { name: 'qing', gender: Gender.Female };
console.log(en.gender === Gender.Female);
// &表示同时
let j;
j = { name: 'qing', age: 18 };
let k;
// k = 6;//会报错
