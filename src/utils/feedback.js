//公用的弹窗
import { ElMessage, ElMessageBox } from "element-plus";
//反馈组件的封装
var feedback = new class {
    /**消息提示*/
    Message(message, type) {
        ElMessage({
            message: message,
            type: type,
        })
    }

    /**智能消息提示*/
    myMessage(res) {
        let code = res.data.code    //获取状态码
        switch (code) {
            case 200:
                this.Message(res.data.msg, 'success')
                break;
            case 500:
                this.Message(res.data.msg, 'warning')

        }
    }

    /**消息弹出框 */
    myElMessageBox({ content, title, confirmButtonText, cancelButtonText, type }, callback,errcallback) {
        ElMessageBox.confirm(
            content,
            title,
            {
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                type: type,
            }
        )
            .then((res) => callback(res))//确认回调

            .catch((err) => errcallback(err))//取消回调
    }
}
export default feedback