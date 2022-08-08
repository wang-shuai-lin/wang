// 定义武学数据
const data = [
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
]
// 定义秘籍的接口
interface Mi {
    name: string,
    id: number,
    sex: number
}

// 定义所有秘籍的名单
const allMi: Array<Mi> = data
// 定义所有待选的名单
let xrMi: Array<Mi> = []
// 全局获取ul
let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]
// 获取单次抽的按钮
let oneButton = document.getElementById('one')
// 获取双次抽的按钮
let twoButton = document.getElementById('two')
// 获取金色传说按钮
let jinButton = document.getElementById('three')
// 获取白色垃圾按钮
let baiButton = document.getElementById('four')
// 设置定时器
let times: NodeJS.Timer;
// 获取存放的秘籍
let saveDom: Element = document.getElementsByClassName('box-2-1')[0]
// 获取随机数后的添加名字
const saveSpan = document.getElementById('name')
// 渲染秘籍
function xran(): void {
    ul.innerHTML = ''
    allMi.forEach(item => {
        // 创建li标签
        let li = document.createElement('li')
        // 添加li标签展示的内容
        li.innerHTML = `${item.name}`
        // 将li标签动态添加到ul中
        ul.appendChild(li)
    })
}
xran()
// 封装获取随机函数
function suihan(array: Mi[] | number[]): number {
    // 获取随机数的最大值
    let maxs: number = array.length - 1
    // 获取随机数的最小值
    let mins: number = 0
    // 生成随机数
    let suiji: number = Math.floor(Math.random() * (maxs - mins) + mins)
    return suiji
}
// 单次抽
function dan(event: { target: { innerText: string } }): void {
    if (event.target.innerText.includes('停')) {
        oneButton.innerText = '单次抽'
        let sui = suihan(allMi)
        // 根据随机数，获取选中的秘籍
        let danMi: Mi = allMi[sui]
        // 添加随机抽出来的名字
        saveSpan.innerText = danMi.name
    } else {
        oneButton.innerText = '停止'
    }
}
// 双次抽
function shuang(event: { target: { innerText: string } }): void {
    if (event.target.innerText.includes('停')) {
        twoButton.innerText = '双次抽'
        // 第一个随机数
        let sui = suihan(allMi)
        let danMi: Mi = allMi[sui]
        // 第二个随机数
        let suier = suihan(allMi)
        let shuangMi: Mi = allMi[suier]
        // 添加随机抽出来的武学秘籍
        saveSpan.innerText = `${danMi.name}★★★${shuangMi.name}`

    } else {
        twoButton.innerText = '停止'
    }
}
// 定义有对象的返回值
type jbIndex = {
    jinIndex: number[],
    baiIndex: number[]
}

// 金色传说与白色垃圾武学秘籍下标获取
function Index(): jbIndex{
    // 金色传说下标存放
    let jinIndex: number[] = []
    // 白色垃圾下标存放
    let baiIndex: number[] = []
    // 遍历数组拿到标识
    allMi.forEach((item, index) => {
        if (item.sex === 0) {
            jinIndex.push(index)
        } else {
            baiIndex.push(index)
        }
    })
    return{ 
        jinIndex,
        baiIndex
    }
}
// 金色传说或白色垃圾抽
function may(sex: number, event: { target: { innerText: string } }): void {
    if (event.target.innerText.includes('停')) {
        if (sex === 0) {
            jinButton.innerText = '金色传说'
        }else{ 
            baiButton.innerText='白色垃圾'
        }
        // 分别获取不同的下标
        let buIndex:jbIndex=Index()
        // 分别获取不同的数组
        let {jinIndex,baiIndex}=buIndex
        // 根据参数判断是金色传说还是白色垃圾
        let org=sex===0?jinIndex:baiIndex
        // 获取到数组的下标
        let shuIndex=suihan(org)
        // 获取具体是那本金色传说还是白色垃圾武学秘籍
        let jinBai:Mi=allMi[org[shuIndex]]
        // 添加抽出来的武学秘籍
        saveSpan.innerText=jinBai.name
      
    }else{ 
        if(sex===0){ 
jinButton.innerText='停止'
        }else{ 
            baiButton.innerText='停止'
        }
    }
}
getTime()
setInterval(() => {
    getTime()
}, 1000)
/**封装日期的函数 */
function dateFormat(): string {
    const dt = new Date()
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    // yy-mm-dd hh:mm:ss
    // 可以根据需要输出相对应的时间格式
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
// 获取当前系统时间getTime()方法
function getTime():void{ 
    // 格式化年月日
    const times=dateFormat()
    // 渲染页面
    let timesHtml=document.getElementsByClassName('timer')[0]as HTMLBodyElement
    timesHtml.innerText=`时间:${times}`
}



