//放置所有请求的接口
//#region 
const url='/api/api/Authoize/'

//#endregion

const urls = class {
	static apis() {
		//注册接口
		const register = `${url}/register`//此处的引号为反引号
		//登录接口
		const login = `${url}/Login`

		return {
			register,
			login

		}
	}
}

export default urls
