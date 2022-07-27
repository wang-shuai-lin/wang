// 总结一下
// 1.interface
// 2.可选属性 ？
// 3.[prop:string]:any
// 4.多余属性的检查





// interface
// 我们需要定义这样一个函数 参数是一个对象 里面包含两个字段：
// firstName和lastName 也就是英文的名和姓

// interface Persion{ 
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     color:string
// }

// function getFullName({ firstName, lastName, age, sex }: Persion): string {
//     return `My name ${lastName} ${firstName},My age is ${age},like smoke ${sex}`
// }
/**
 * 第一种: 什么参数都不传 -----应有 1 个参数，但获得 0 个
 * 第二种: 我们传递错误参数, ----- 对象文字可以只指定已知属性，并且“age”不在类型“{ firstName: string; lastName: string; }”中。
 * 第三种: 我们传递的参数个数不一样  -- 类型“{ firstName: string; lastName: string; }”的参数不能赋给类型“Persion”的参数。
  类型“{ firstName: string; lastName: string; }”缺少类型“Persion”中的以下属性: age, sex
 */
//let result = getFullName({firstName: 'world', lastName: 'hello'})
// console.log(result);


// let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false})
//document.body.innerHTML = result
//console.log(result);




// 可选属性 ？
// interface Persion {
//     firstName: string,
//     lastName: string,
//     age: number,
//     sex: boolean,
//     colors?: string,
//     [prop:string]:any
// }
// let result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false, height: 123 })





// 绕开多余属性的检查 类型断言
// 1.类型断言 as <>
// 2.[props:string]:any
// 3. 利用类型兼容性



// 1.类型断言 as <>
// interface Vegetables{ 
//     color?:string,
//     type:string
// }
// const getVegetables=({color,type}:Vegetables):string=>{ 
// return `A ${color?color+'':' '}${type}`
// }

// getVegetables({ 
//     type:'tomato',
//     size:12,
//     price:1.2
// } as Vegetables)



// 2.[props:string]:any
// interface Vegetables{ 
//     color?:string,
//     type:string,
//     [props:string]:any
// }

// const getVegetables=({color,type}:Vegetables):string=>{ 
//     return `A ${color?color+'':' '}${type}`
// }

// getVegetables({ 
//     type:'tomato',
//     size:12,
//     price:1.2
// })





// 利用类型兼容性
interface Vegetables{ 
    type:string
}
const getVegetables=({type}:Vegetables)=>{ 
    return `A${type}`
}
const option={type:'tomato',size:12 }
getVegetables(option)





// 只读属性
// readonly

interface Role{ 
    readonly 0:string,
    readonly 1:string
}
const role:Role={ 
    0:'super-admin',
    1:'admin'
}
// 无法分配到‘1’ 因为他是只读属性
// role[1]='我是快乐的'

// const和readonly对比
const NAME:string='衰仔'
// 无法分配到NAME, 因为他是常数
// NAME='抬头'


const obj={ 
    name:'衰仔'
}
obj.name='量子'


interface Info{ 
    readonly name:string
}

const info:Info={ 
    name:'衰仔'
}
// 无法分配到name 因为他是只读属性
// info['name']='量子'





// 类型别名
interface AddFunc{ 
    (num1:number,num2:number):number
}
const add:AddFunc=(n1,n2)=>n1+n2
// 不能将类型“string”分配给类型“number”
// const join:AddFunc=()=>`${n1}${n2}`
// 类型“string”的参数不能赋给类型“number”的参数
// add('a'2)







