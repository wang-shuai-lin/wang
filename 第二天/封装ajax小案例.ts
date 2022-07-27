// 原生ajax
// 创建ajax
let ajax = new XMLHttpRequest()
// 制定发送方法和url
ajax.open('get', 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
// 发送数据
ajax.send()
// 判断是不是返回成功和状态码
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.response);

    }
}




// 是否请求成功 状态码的封装
enum Status {
    // 成功
    Success = 200,
    ReadyStatus = 4

}

// 定义params
interface IParams {
    method: string,
    url: string,
    data?: any
}

function getAjaxResponse(params: IParams) {
    let ajax = new XMLHttpRequest()
    // method  方法和url请求
    ajax.open(params.method, params.url)
    ajax.send(params.data)
    // 判断请求地址
    ajax.onreadystatechange = function () {
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyStatus) {
            console.log('我是成功的');
        }
    }

}
const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}
getAjaxResponse(params)