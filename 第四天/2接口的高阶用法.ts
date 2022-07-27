// 索引签名
// 重点：绕开多余属性时，[]中间的内容，是可变的
interface Rolec {
    [id: number]: string
}
let rolec: Rolec = {
    0: 'super_andim',
    1: 'admin'
}

// interface Counter{ 
//     ():void;
//     count:number
// }
// const getCounter=():Counter=>{ 
//     const c=()=>{ 
//         c.count++
//     }
//     // 再给这个函数添加一个count属性初始化值为0
//     c.count=0
//     // 最后返回这个函数对象
//     return c
// };
// // 通过getCounter函数得到这个计数器
// const counter:Counter=getCounter()
// counter()
// // 1
// console.log(counter.count);
// counter()
// // 2
// console.log(counter.count);


// 数组模式
let roleArray: Rolec = ['super-amin', 'admin']
roleArray[0] = '我要跪着上课'



// 想要我们的东西不可更改，你只有查看权限
// readonly
interface RoleInfo {
    readonly [id: number]: string
}

const roleChange: RoleInfo = {
    0: 'super-admin'
}
// 类型RoleInfo 中的索引签名仅允许读取
roleCHange[0] = 'admin'

const obj = {
    // 这里定义一个数值类型的123这个属性
    123: 'a',
    // 对象文本不能具有多个名称相同的属性
    '123': 'b'
}
console.log(obj);



// 接口继承
// extends
// 这是一个公共接口类型定义
interface Vegetables {
    color: string
}

interface Tomato extends Vegetables {
    redius: number
}

interface Carrot extends Vegetables {
    length: number
}

let useTomato: Tomato = {
    redius: 13,
    color: 'red'
}
let useCarrot: Carrot = {
    length: 13,
    color: 'red'
}

// 混合接口类型
// 不想被污染掉 放到闭包里 形成独立的作用域
// 自调用函数
const countUps = (() => {
    let count = 0
    function useCount() {
        return ++count
    }
    return useCount
})()
// 1
console.log(countUps());
// 2
console.log(countUps());


const countUp = (() => {
    let count = 0
    return () => {
        return ++count
    }
})()
// 1
console.log(countUp());
// 2
console.log(countUp());


// js中手动添加对象属性
let obj1 = {}
obj1.name = '小红'

// javascript
let countUp1 = () => {
    return ++countUp1.count
}
countUp1.count = 0
// 1
console.log(countUp1());
// 2
console.log(countUp1());




// 混合接口
// 变量永久保存 不会被污染
// 变量只是内部使用
// 定义每个类型 方便维护
interface Counter {
    (): void;
    count: number;
}
const getCounter = (): Counter => {
    const c = () => {
        c.count++
    }
    // 再给这个函数添加一个count属性初始值为0
    c.count=0
    // 最后返回这个函数对象
    return c
}
// 通过getCounter函数得到这个计数器
const counter:Counter=getCounter()
counter()
// 1
console.log(counter.count);
counter()
// 2
console.log(counter.count);





