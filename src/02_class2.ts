
//abstract、constructor、extends

(function () {
    //父类
    //添加abstract，表示抽象类，只是不能用来创建实例对象，依然可以继承
    //抽象类中可以添加抽象方法
    abstract class Animal {
        name: string;

        //构造函数
        constructor(name: string) {
            console.log("Animal--构造函数---");
            this.name = name;
        }

        //  sayHello() {
        //     console.log("Animal,hello---");
        // }

        // 抽象方法,该方法没有方法体，子类必须对抽象方法进行重写
        abstract sayHello(): void
    }

    // const animal=new Animal()//报错
    //子类
    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            super(name)
            this.age = age;
        }

        sayHello() {
            console.log("dog,hello---");
        }
    }

    const dog = new Dog('旺财', 2);
    dog.sayHello()

})()

