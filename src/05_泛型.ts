
(function () {
    //定义函数或者类时，如果遇到类型不明确，可以使用泛型
    function fn<T>(a: T): T {// T是一个泛型
        return a
    }

    let result = fn(10)//此时T的类型是number,这里没指定类型，ts会自动判断
    let result2 = fn<string>('hello')//指定类型


    function fn2<T, K>(a: T, b: K) {
        return a
    }
    fn2<number, string>(123, 'qing')

    class MyClass<T>{
        constructor(name: T) { }
    }
    const mc = new MyClass<string>('qing')
})()