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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        // 父类内部获取name属性
        return this.name;
    };
    return Animal;
}());
// 实例化父类
var a = new Animal('动物');
// 父类外获取name属性
console.log(a.name);
// 声明 狗类 继承 动物类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.run = function () {
        // 子类内部获取name属性
        return this.name + '会运动';
    };
    return Dog;
}(Animal));
// 实例化子类
var d = new Dog('哈士奇');
// 子类 类外
console.log(d.name);
console.log(d.run());
