/**
 * 定义所有数据
 */
const Data = [
	{
		"id": 1,
		"goods_name": "vivo 手机 p30",
		"price": 1242
	},
	{
		"id": 2,
		"goods_name": "苹果手机 iphone plus",
		"price": 45000
	},
	{
		"id": 3,
		"goods_name": "宝马 X7 4驱",
		"price": 750000
	},
	{
		"id": 4,
		"goods_name": "宝马 5系 2驱",
		"price": 450000
	},
	{
		"id": 5,
		"goods_name": "锤子手机 200G",
		"price": 2000
	},
	{
		"id": 6,
		"goods_name": "华为手机 P40",
		"price": 5000
	},
	{
		"id": 7,
		"goods_name": "红米 手机",
		"price": 1200
	},
	{
		"id": 8,
		"goods_name": "海尔电冰箱 3匹",
		"price": 980
	},
	{
		"id": 9,
		"goods_name": "苹果笔记本电脑 i9",
		"price": 20000
	},
	{
		"id": 10,
		"goods_name": "精品手机 华为 200G",
		"price": 3200
	}
]
/**
 * 定义商品接口
 */
interface Icommodity {
	id: number, 
	goods_name: string, 
	price: number 
}
/**
 * 定义商品名单
 */
let allIcommodity: Array<Icommodity> = Data
let tbody: HTMLTableSectionElement = document.getElementsByTagName('tbody')[0]

/**
 * 渲染同学
 */
function renderIcommodity(): void {
	tbody.innerHTML = ''
	allIcommodity.forEach((item => {
		let tr = document.createElement('tr');
		tr.innerHTML = `<td>${item.id}</td>
		<td>${item.goods_name}</td>
		<td>${item.price}</td>`
		tbody.appendChild(tr)
	}))
}
//进页面展示所以自调用
renderIcommodity()

function search(event: { keyCode: number; }): void {
	// 按下回车事件搜索
	if (!event || event.keyCode === 13) {
		// @ts-ignore
		let int: HTMLInputElement = document.querySelector('.int')
		allIcommodity = Data.filter(item => item.goods_name.includes(int.value))
	} else if (event.keyCode === 8) {
		// @ts-ignore
		let int: HTMLInputElement = document.querySelector('.int')
		if (int.value.length == 1) {
			allIcommodity = Data
		}
		//@ts-ignore
		let Fyinput: HTMLInputElement = document.querySelector('.Fyinput')
		Fyinput.value = '10'
		pageSize = Number(Fyinput?.value)
		// console.log(Fyinput?.value);
		created()
		page(1)

	}
	renderIcommodity()
}
/**
*排序标识
 */
let bhsort: boolean = true
let jgsort: boolean = true

/**
 * 编号排序
 */
function bhpx(): void {
	// 取反
	bhsort = !bhsort;
	//@ts-ignore
	let span: HTMLSpanElement = document.querySelector('.bh')
	if (bhsort == false) {
		allIcommodity.sort(function (a, b) {
			return b.id - a.id;
		});
		span.innerHTML = '∨'
	} else {
		allIcommodity.sort(function (a, b) {
			return a.id - b.id;
		});
		span.innerHTML = '∧'
	}
	renderIcommodity()
}
/**
 * 价格排序
 */
function jgpx(): void {
	jgsort = !jgsort;
	//@ts-ignore
	let span: HTMLSpanElement = document.querySelector('.jg')
	if (jgsort == false) {
		allIcommodity.sort(function (a, b) {
			return b.price - a.price;
		});
		span.innerHTML = '∨'
	} else {
		allIcommodity.sort(function (a, b) {
			return a.price - b.price;
		});
		span.innerHTML = '∧'
	}
	renderIcommodity()
}

/**
 * 数据分页
 */
let num: number = 10 
let pageNums: number = 0 
let cur: number = 1 
let pageSize: number = 10 
/**
 *  分页盒子 
 */
// @ts-ignore
let nav: HTMLDivElement = document.querySelector('.nav')

/**
 * 总页数初始化调用
 */
function created(): void {
	pageNums = Math.ceil(Data.length / pageSize);
	Currentpage()
}

created()

function Currentpage(): void {
	nav.innerHTML = ''
	for (let i = 1; i <= pageNums; i++) {
		let div: HTMLDivElement = document.createElement("div");
		div.innerText = `${i}`
		div.id = `${i}`
		div.className = 'pages'
		nav.append(div)
	}
}

/**
 *  事件监听
 */
nav.addEventListener('click', function (e: any) {
	if (e.target.className == 'pages') { 
		page(e.target.id)
	}
})
/**
 * 分页
 * */
function page(value: number): void {
	cur = value
	var list = (cur - 1) * Number(pageSize); 
	allIcommodity = Data.slice(list, list + Number(pageSize)); 
	renderIcommodity()
}
page(1)

function changeInput(): void {
	let Fyinput: HTMLInputElement | null = document.querySelector('.Fyinput')
	pageSize = Number(Fyinput?.value)
	created()
	page(1)
}