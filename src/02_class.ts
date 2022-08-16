//constructor、extends
// 类的简介
class Person {
    // readonly name: string = 'qing';//实例属性,readonly表示只读属性，无法修改，一般用不上
    name = 'qing';
    static age: number = 18;//类属性，也是静态属性。如果readonly 要和static一起使用，需要放在它的后面

    sayHello() {
        console.log("hello---");
    }
}

const per = new Person()
console.log("per---", per.name, Person.age);
// per.name = 'qingqing'
per.sayHello();


//父类
class Animal {
    name: string;
    age: number;

    //构造函数
    constructor(name: string, age: number) {
        console.log("Animal--构造函数---");
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Animal,hello---");
    }
}

class Dog {
    // name = '旺财';
    // age = 18;

    name: string;
    age: number;

    //构造函数
    constructor(name: string, age: number) {
        console.log("构造函数---", this);//this表示当前实例
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("dog,hello---", this, this.name);//this表示调用方法的对象
    }
}

// class Dog extends Animal{
// }

//子类//继承，让所有子类同时拥有父类中的属性和方法
class Cat extends Animal {
    //方法复写//与父类同名的方法，会覆盖父类方法
    sayHello() {
        // console.log("Cat,hello---");
        super.sayHello()//调用父类的方法//super表示当前类的父类
    }
    run() {
        console.log("Cat,run---");
    }
}

//super
class Monkey extends Animal {
    color: string;
    constructor(name: string, age: number, color: string) {
        super(name, age)
        this.color = color;
    }
}


const dog = new Dog('旺财', 2);
console.log(dog)
dog.sayHello()

const cat = new Cat('咪咪', 2);
console.log(cat)
cat.sayHello()
cat.run()

const mon = new Monkey('猴子', 3, 'white');
console.log(mon)