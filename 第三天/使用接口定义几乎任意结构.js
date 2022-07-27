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
function getFullName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, age = _a.age, sex = _a.sex;
    return "My name ".concat(lastName, " ").concat(firstName, ",My age is ").concat(age, ",like smoke ").concat(sex);
}
var result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false, height: 123 });
var getVegetables = function (_a) {
    var type = _a.type;
    return "A".concat(type);
};
var option = { type: 'tomato', size: 12 };
getVegetables(option);
var role = {
    0: 'super-admin',
    1: 'admin'
};
// 无法分配到‘1’ 因为他是只读属性
role[1] = '我是快乐的';
// const和readonly对比
var NAME = '衰仔';
// 无法分配到NAME, 因为他是常数
NAME = '抬头';
var obj = {
    name: '衰仔'
};
obj.name = '量子';
var info = {
    name: '衰仔'
};
// 无法分配到name 因为他是只读属性
info['name'] = '量子';
var add = function (n1, n2) { return n1 + n2; };
// 不能将类型“string”分配给类型“number”
var join = function () { return "".concat(n1).concat(n2); };
// 类型“string”的参数不能赋给类型“number”的参数
add('a', 2);
