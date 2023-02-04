//axios请求 
import axios from 'axios'
import instance from './header'

const request = class {
	constructor(url, arg) { //constructor用于声明构造函数
		this.url = url
		this.arg = arg
	}
	//post请求
	 modepost() {
		return new Promise((resolve, reject) => {
			console.log(this.url)
			console.log(this.arg)
			instance.post((this.url), this.arg)
				.then(res => {
					console.log("请求成功")
					resolve(res)
				})
				.catch(err => {
					console.log("请求失败")
					reject(err)
				})
		})
	}


	//get请求
	 modeget() {
		return new Promise((reject, resolve) => {
			instance.get((this.url))
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

}
export default request
