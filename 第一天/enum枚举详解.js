/**
 *
 *
 *
 *
 */
/**
 * 数字类型
 * 语法使用的是es6语法
 * 自动添加索引
 *  我们可以像访问对象一样使用',' 和 '[]'两种方式访问里面的值
 */
// enum Status {
//     Uploading,
//     Success,
//     Falied
// }
// // 像访问对象一样使用
// console.log(Status.Uploading);
// console.log(Status['Falied']);
/**
 * 指定索引值
 * 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式
 */
// enum Anmimal {
//     /**猪 */
//     Pig = 200,
//     /**狗 */
//     Dog,
//     /**猫 */
//     Cat = 300,
//     /**蛇 */
//     Snake
// }
// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);
// /**计算值和常量 */
// const getvalue= () =>{ 
//     return 1
// } tsc enum枚举详解.ts
// enum Constant{ 
//     a=getvalue(),
//     b,//枚举成员必须具有初始化表达式
//     c
// }
/**反向映射 */
// enum Statuss{ 
//     Success=200,
//     NotFound=404
// }
// console.log(Statuss.Success);
// console.log(Statuss[404]);
// 字符串枚举
// const getValue=()=>{ 
//     return 0
// }
// const names='小明'
// enum Message{ 
//     // 错误信息
//     Error="error message",
//      /**成功的错误信息 
//      * 枚举成员必须具有初始化表达式。
//     */
//       SuccessError = 200, // 枚举成员必须具有初始化表达式。
//       // 含字符串值成员的枚举中不允许使用计算值。
//       // 含字符串值成员的枚举中不允许使用计算值。
//       ClientError = 'names'
// }
// console.log(Message.SuccessError,'SuccessError')
// console.log(Message.Error);
// console.log(Message.ClientError);
// 异构枚举
var Result;
(function (Result) {
    Result[Result["Faild"] = 0] = "Faild";
    Result["Success"] = "Success";
})(Result || (Result = {}));
console.log(Result.Faild);
console.log(Result.Success);
