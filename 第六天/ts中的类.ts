/**
 * Ts中类的定义
 */
// class Tpole{ 
//     name:string;
//     age:number;
//     constructor(name:string,age){ 
// this.name=name;
// this.age=age
//     }
//     sport():string{ 
//         return  this.name+'挣大钱'
//     }
// }
// // 实例化一个类
// let t=new Tpole('王',27)
// // 调用类的方法
// console.log(t.sport());

/**
 * Ts中类的定义
 */
// class Tpole1 {
//     name: string;
//     age: number;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
//     sport(){ 
//         return `${this.name}开源节流`
//     }
// }
// // 实例化一个类
// let t1=new Tpole1('小弟',27)
// // 调用类的方法
// console.log(t1.sport());
// // 调用类属性
// console.log(t1.age);

/**
 * Ts中类的定义
 */
// class Tpole2 {
//     name: string;
//     age: number;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
//     sport(){ 
//         return `${this.age}岁了,青春不再`
//     }
// }
// // 实例化一个类
// let t2=new Tpole2('帅林',27)
// // 调用类的方法
// console.log(t2.sport());
// // 调用类的属性
// console.log(t2.name);



/**
 * Ts中类的继承
 */
// class Animal {
//     name: string
//     age: number
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     getName(): string {
//         return this.name
//     }
// }
// class Dog extends Animal {
//     constructor(name, age) {
//         super(name, age)
//     }
// }
// let d = new Dog('哈士奇', 27)
// console.log(d.age);
// console.log(d.getName());


/**
 * ts中类的继承
 */
// class Animal1 {
//     name: string
//     constructor(name) {
//         this.name = name
//     }
//     ji(): string {
//         return this.name
//     }
// }
// class Dog1 extends Animal1{ 
//     constructor(name){ 
// super(name)
//     }
// }
// let d1=new Dog1('狼')
// console.log(d1.name);
// console.log(d1.ji());


/**
 * ts中继承的类
 */
// class Animal2{ 
//     age:number
//     constructor(age){ 
// this.age=age
//     }
//     lei():number{ 
//         return this.age
//     }
// }
// class Dog2 extends Animal2{ 
//     constructor(age){ 
// super(age)
//     }
// }
// let d2=new Dog2(23)
// console.log(d2.age);
// console.log(d2.lei());




/**
 * 如果不加修饰符，默认是public
 * 使用 public 修饰符，公有，类里面、子类、类外面都可以访问
 */
 class Animal {
    name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.run());


/**
 * 如果不加修饰符，默认是public
 * 使用 public 修饰符，公有，类里面、子类、类外面都可以访问
 */
 class Animal {
    name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.run());


/**
 * 如果不加修饰符，默认是public
 * 使用 public 修饰符，公有，类里面、子类、类外面都可以访问
 */
 class Animal {
    name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.run());



/**
 * 使用 private 修饰符，类里面可以访问，其他不行
 */

 class Animal {
    private name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
console.log(d.getName());



/**
 * 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问
 */

 class Animal {
    protected name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a = new Animal('动物')
// 父类外获取name属性
console.log(a.name); // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);  // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
console.log(d.getName());

/**
 * 多态的实现
 */

// 首先声明一个父类，父类中声明一个方法，不去实现
class Anima3 {
    name:string
    constructor(name:string){
        this.name = name
    }
    // 父类定义了一个方法，不去实现
    eat(){}
}
// 声明一个类继承父类，并且实现 eat 方法
class Dog3 extends Anima3{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃骨头`);
        
    }
}

// 再声明一个类继承父类，并且实现 eat 方法
class Cat extends Anima3{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃鱼`);
        
    }
}