import feedback from "./Feedback";
//验证
var verifyHelper = new class {
    //验证密码
    verifyPwd(pwd) {
        var myreg = /^(\w){6,16}$/;
        if (!myreg.test(pwd)) {
            return false;
        }
        return true;
    }

    /**字符串是否为空 */
    isNull(str) {
        if (str == "") return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }

    //验证登录
    verifyLogin(arg) {
        if (this.isNull(arg.username)) { //账号密码是否为空
            feedback.Message('账号不能为空', 'warning')
            return false
        } else if (this.isNull(arg.userpwd)) {
            feedback.Message('密码不能为空', 'warning') 
            return false
        } else {//验证密码
           let isSuccess =this.verifyPwd(arg.userpwd)
           if(!isSuccess){
            feedback.Message('密码6至16位数字', 'warning')
            return false
           }else{
            return true
           }
        }
    }

    //验证身份证号
    validateSfz(card) {
        console.log('1')
        //大概的验证： 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
        // const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

        //完整的验证
        var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
        if (!reg.test(card)) {//是否为非真
            console.log('2')
            alert("身份证输入不合法");
            return false;
        }
        return true;
    }


    //验证手机号
    verifyPhone(phone) {
        var myreg = /^[1][3,4,5,7,8,9,6][0-9]{9}$/;

        if (!myreg.test(phone)) {
            return false;
        }

        return true;
    }

};

//暴露
export default verifyHelper

