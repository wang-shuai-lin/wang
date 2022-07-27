/**
 * new Array(),创建数组的长度
 * fill,填充数组的方法，将数据填充到期中，分别以不同的数据类型进行填充
 */
const getArray=(value:any,times:number=5):any[]=>{ 
    return new Array(times).fill(value)
}
let result=getArray([1],2)
result.forEach(item=>{ 
    console.log(item.length);
    
})
/**
 * 每个item都是一个数组
 */