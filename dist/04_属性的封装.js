//属性的修饰符 public、private、protected
//get\set
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("hello---");
        }
        //getter\setter他们被称为属性的存取器
        getAge() {
            return this.age;
        }
        setAge(value) {
            if (value > 0) {
                this.age = value;
            }
        }
    }
    const per = new Person('qing', 18);
    per.name = 'qingqing';
    // per.age = 20;//会报错
    // per.setAge(-20)
    per.setAge(20);
    console.log("per---", per, per.getAge());
    // class Person2 {
    //     name: string;
    //     // private age:number;
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     // ts中的存取器：
    //     get age() {
    //         return this.age
    //     }
    //     set age(value: number) {
    //         if (value > 0) {
    //             this.age = value //这里会报错
    //         }
    //     }
    // }
    // const per2 = new Person2('qing', 18)
    // console.log("per---", per2, per2.age);
    class A {
        // protected num: number;//protected 只能在当前类和当前类的子类中访问
        // constructor(num: number) { this.num = num; }
        constructor(num) {
            this.num = num;
        } //这一行等价于上面的两行
    }
    class B extends A {
        test() {
            console.log('b中的num-------', this.num);
        }
    }
    const b = new B(18);
    // b.num = 20;//会报错
    b.test();
    console.log("b---", b);
})();
