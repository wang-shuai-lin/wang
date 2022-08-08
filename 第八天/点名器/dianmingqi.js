// 定义武学数据
var data = [
    {
        id: 1,
        name: '三分归元气',
        sex: 0
    },
    {
        id: 2,
        name: '罗汉拳',
        sex: 1
    },
    {
        id: 3,
        name: '圣心决',
        sex: 0
    },
    {
        id: 4,
        name: '五极化雷手',
        sex: 0
    },
    {
        id: 5,
        name: '韦陀掌',
        sex: 1
    },
    {
        id: 6,
        name: '猴拳',
        sex: 1
    },
    {
        id: 7,
        name: '傲寒六决',
        sex: 0
    },
    {
        id: 8,
        name: '天刀八式',
        sex: 0
    },
    {
        id: 9,
        name: '井中八法',
        sex: 0
    },
    {
        id: 10,
        name: '乱劈风刀法',
        sex: 1
    },
    {
        id: 11,
        name: '五虎断门刀',
        sex: 1
    },
    {
        id: 12,
        name: '天意四象决',
        sex: 0
    },
    {
        id: 13,
        name: '兰花拂穴手',
        sex: 1
    },
    {
        id: 14,
        name: '南山拳',
        sex: 1
    },
    {
        id: 15,
        name: '伏魔杖法',
        sex: 1
    },
    {
        id: 16,
        name: '全真剑法',
        sex: 1
    },
    {
        id: 17,
        name: '如来神掌',
        sex: 0
    },
    {
        id: 18,
        name: '天残脚',
        sex: 0
    },
    {
        id: 19,
        name: '双手互博术',
        sex: 1
    },
    {
        id: 20,
        name: '金燕功',
        sex: 1
    },
    {
        id: 21,
        name: '草上飞',
        sex: 1
    },
    {
        id: 22,
        name: '杀神一刀斩',
        sex: 1
    },
    {
        id: 23,
        name: '雪飘人间',
        sex: 1
    },
    {
        id: 24,
        name: '满天花雨',
        sex: 1
    },
    {
        id: 25,
        name: '男人见不得',
        sex: 1
    },
    {
        id: 26,
        name: '神刀斩',
        sex: 0
    },
    {
        id: 27,
        name: '剑二十三',
        sex: 0
    },
    {
        id: 28,
        name: '万道森罗',
        sex: 0
    },
    {
        id: 29,
        name: '大悲赋',
        sex: 0
    }
];
// 定义所有秘籍的名单
var allMi = data;
// 定义所有待选的名单
var xrMi = [];
// 全局获取ul
var ul = document.getElementsByTagName('ul')[0];
// 获取单次抽的按钮
var oneButton = document.getElementById('one');
// 获取双次抽的按钮
var twoButton = document.getElementById('two');
// 获取金色传说按钮
var jinButton = document.getElementById('three');
// 获取白色垃圾按钮
var baiButton = document.getElementById('four');
// 设置定时器
var times;
// 获取存放的秘籍
var saveDom = document.getElementsByClassName('box-2-1')[0];
// 获取随机数后的添加名字
var saveSpan = document.getElementById('name');
// 渲染秘籍
function xran() {
    ul.innerHTML = '';
    allMi.forEach(function (item) {
        // 创建li标签
        var li = document.createElement('li');
        // 添加li标签展示的内容
        li.innerHTML = "".concat(item.name);
        // 将li标签动态添加到ul中
        ul.appendChild(li);
    });
}
xran();
// 封装获取随机函数
function suihan(array) {
    // 获取随机数的最大值
    var maxs = array.length - 1;
    // 获取随机数的最小值
    var mins = 0;
    // 生成随机数
    var suiji = Math.floor(Math.random() * (maxs - mins) + mins);
    return suiji;
}
// 单次抽
function dan(event) {
    if (event.target.innerText.includes('停')) {
        oneButton.innerText = '单次抽';
        var sui = suihan(allMi);
        // 根据随机数，获取选中的秘籍
        var danMi = allMi[sui];
        // 添加随机抽出来的名字
        saveSpan.innerText = danMi.name;
    }
    else {
        oneButton.innerText = '停止';
    }
}
// 双次抽
function shuang(event) {
    if (event.target.innerText.includes('停')) {
        twoButton.innerText = '双次抽';
        // 第一个随机数
        var sui = suihan(allMi);
        var danMi = allMi[sui];
        // 第二个随机数
        var suier = suihan(allMi);
        var shuangMi = allMi[suier];
        // 添加随机抽出来的武学秘籍
        saveSpan.innerText = "".concat(danMi.name, "\u2605\u2605\u2605").concat(shuangMi.name);
    }
    else {
        twoButton.innerText = '停止';
    }
}
// 金色传说与白色垃圾武学秘籍下标获取
function Index() {
    // 金色传说下标存放
    var jinIndex = [];
    // 白色垃圾下标存放
    var baiIndex = [];
    // 遍历数组拿到标识
    allMi.forEach(function (item, index) {
        if (item.sex === 0) {
            jinIndex.push(index);
        }
        else {
            baiIndex.push(index);
        }
    });
    return {
        jinIndex: jinIndex,
        baiIndex: baiIndex
    };
}
// 金色传说或白色垃圾抽
function may(sex, event) {
    if (event.target.innerText.includes('停')) {
        if (sex === 0) {
            jinButton.innerText = '金色传说';
        }
        else {
            baiButton.innerText = '白色垃圾';
        }
        // 分别获取不同的下标
        var buIndex = Index();
        // 分别获取不同的数组
        var jinIndex = buIndex.jinIndex, baiIndex = buIndex.baiIndex;
        // 根据参数判断是金色传说还是白色垃圾
        var org = sex === 0 ? jinIndex : baiIndex;
        // 获取到数组的下标
        var shuIndex = suihan(org);
        // 获取具体是那本金色传说还是白色垃圾武学秘籍
        var jinBai = allMi[org[shuIndex]];
        // 添加抽出来的武学秘籍
        saveSpan.innerText = jinBai.name;
    }
    else {
        if (sex === 0) {
            jinButton.innerText = '停止';
        }
        else {
            baiButton.innerText = '停止';
        }
    }
}
getTime();
setInterval(function () {
    getTime();
}, 1000);
// 获取当前系统时间getTime()方法
function getTime() {
    // 格式化年月日
    var times = dateFormat();
    // 渲染页面
    var timesHtml = document.getElementsByClassName('timer')[0];
    timesHtml.innerText = "\u65F6\u95F4:".concat(times);
}
/**封装日期的函数 */
function dateFormat() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1 + '').padStart(2, '0');
    var d = (dt.getDate() + '').padStart(2, '0');
    var hh = (dt.getHours() + '').padStart(2, '0');
    var mm = (dt.getMinutes() + '').padStart(2, '0');
    var ss = (dt.getSeconds() + '').padStart(2, '0');
    // yy-mm-dd hh:mm:ss
    // 可以根据需要输出相对应的时间格式
    return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(hh, ":").concat(mm, ":").concat(ss);
}
