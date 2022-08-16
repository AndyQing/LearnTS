//interface、implements
(function () {
    // type myType = {}//同名会报错
    const obj = {
        name: 'qing',
        age: 2,
    };
    const obj2 = {
        name: 'qing',
        age: 2,
        gender: '男'
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("hello---");
        }
    }
})();
