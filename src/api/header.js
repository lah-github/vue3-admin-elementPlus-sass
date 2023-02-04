import axios from 'axios';
import {
	Base64
} from 'js-base64';
import {
	ElMessageBox
} from 'element-plus'

//对token加密
function baseFun() {
	const token = localStorage.getItem('token') //从本地缓存里取出token
	const base64 = Base64.encode(token + ':') //对token加密
	return 'Basic' + base64
}

//创建通用axios 配置
let instance = axios.create({
	responseType: "json", //响应数据类型
	headers: {
		'Content-Type': 'application/json'
	}
})

//http拦截：是axios请求发出之前给每一个接口携带token去后端校验身份
instance.interceptors.request.use(
	config => {
		let token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = baseFun()
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)


//http拦截：是axios请求发出后获取响应
instance.interceptors.response.use(
	response => { //成功
		// console.log("2222",response)
		return response
	},
	error => { //失败
		if (error.response) {
			// console.log("11111",error.response)
			let ERRS = error.response.status
			let MSG = error.response.data.Msg
			let errdata = ERRS == 401 ? MSG : '服务器发生错误'

			switch (ERRS) {
				case 401:
					ElMessageBox.alert(errdata, '提示', {
							confirmButtonText: '好的',
							type: "error"
						})
						.then(res => { //点击好的按钮进入
							window.location.href='/'
						})
						.catch(err => { //点击叉进入
							window.location.href='/'
						})
					break;
			}
		}
		return Promise.reject(error.response.data) //返回接口的错误信息
	}
)

export default instance
