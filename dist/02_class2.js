//abstract、constructor、extends
(function () {
    //父类
    //添加abstract，表示抽象类，只是不能用来创建实例对象，依然可以继承
    //抽象类中可以添加抽象方法
    class Animal {
        //构造函数
        constructor(name) {
            console.log("Animal--构造函数---");
            this.name = name;
        }
    }
    // const animal=new Animal()//报错
    //子类
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            console.log("dog,hello---");
        }
    }
    const dog = new Dog('旺财', 2);
    dog.sayHello();
})();
