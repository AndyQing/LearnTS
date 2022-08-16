//interface、implements

(function () {
    //描述一个对象的类型
    type myType = {
        name: string,
        age: number,
    };
    // type myType = {}//同名会报错

    const obj: myType = {
        name: 'qing',
        age: 2,
    }

    //定义接口,定义一个类结构，接口也可以当做类型声明
    interface myInterface {
        name: string;
        age: number;
    }
    interface myInterface {//同名接口不会报错,相当于合并接口
        gender: string
    }
    const obj2: myInterface = {
        name: 'qing',
        age: 2,
        gender: '男'
    }

    //在接口中，所有方法都是抽象方法
    interface myInter {
        name: string;
        sayHello(): void
    }

    class MyClass implements myInter {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        sayHello() {
            console.log("hello---");
        }
    }
})()

