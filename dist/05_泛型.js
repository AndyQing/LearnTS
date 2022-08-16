(function () {
    //定义函数或者类时，如果遇到类型不明确，可以使用泛型
    function fn(a) {
        return a;
    }
    let result = fn(10); //此时T的类型是number,这里没指定类型，ts会自动判断
    let result2 = fn('hello'); //指定类型
    function fn2(a, b) {
        return a;
    }
    fn2(123, 'qing');
    class MyClass {
        constructor(name) { }
    }
    const mc = new MyClass('qing');
})();
