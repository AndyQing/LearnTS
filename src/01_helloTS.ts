//类型有：number、string、boolean、any、unknown、void、never、object、array、tuple元祖、enum
//类型断言as
console.log("hello")

let b: number;
b = 10;
// b = 'hello';//会报错

let str: string;
// str = 12;//会报错

// let c: boolean = true;
//如果变量的声明和赋值同时进行，则ts可以自动对变量进行类型检测
let c = true;

//第三个number是对返回值的类型进行限制
function sum(a: number, b: number): number {
    return a + b
}
// sum(1, '23')//会报错

//字面量
let gen: 'male' | 'female';
gen = 'male';

//可以用 '|' 来连接多个类型（联合类型）
let d: string | boolean;
d = '123';

let e: any;//关闭此变量的类型检测，不建议使用any类型
let f: unknown;//未知类型

e = 'hello';
e = true;

f = 123;
b = e;
// b = f;//会报错，unknown不能赋值给其他类型
//方法一：类型检查
if (typeof f === 'number') {
    b = f;
}
//方法二：类型断言
b = f as number;

let s: string;
// 类型断言：
s = e as string;
s = <string>e;//等价上面的一行

function fn(): void {//没有返回值可以设置成void
    // return '123'//会报错
}

function fn2(): never {//表示永远不会返回结果
    throw new Error('报错了')
}

let obj: object;
obj = {}
// 在属性名后面加问号表示属性可选
let obj2: { name: string, age?: number }//必须写name属性，age是可选的属性
obj2 = { name: 'qing' }
// [propName:string]:any 表示可以有任意属性
let obj3: { name: string, [propName: string]: any }
obj3 = { name: 'qing', gender: '女' }

//设置函数的类型声明
let fun: (a: number, b: number) => number;
fun = function (a: number, b) {
    return a + b
}


let arr: string[];//字符串数组
arr = ['a', 'b']

let arr2: number[];//数值数组
arr2 = [1, 2]

let arr3: Array<number>;//数值数组
arr3 = [1, 2]


//元祖：就是固定长度的数组
let h: [string, string]
h = ['a', 'b']

//枚举
enum Gender {
    Male, Female//会自动赋值0、1
}
let en: { name: string, gender: Gender };
en = { name: 'qing', gender: Gender.Female }
console.log(en.gender === Gender.Female)

// &表示同时
let j: { name: string } & { age: number }
j = { name: 'qing', age: 18 }

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
// k = 6;//会报错