/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 15:28:46
 * @LastEditTime: 2022-03-22 01:27:18
 */
import Vue from "vue";
import "element-ui/lib/theme-chalk/message.css";
import { Message } from "element-ui";
import { Notification } from "element-ui";

const types = ["success", "warning", "info", "error"];
Vue.prototype.$message = ({ type = "info", message, ...rest }) => {
  Message({
    type: type,
    message: message,
    ...rest,
  });
};

Vue.prototype.$notify = ({ title, message, type = "info", ...rest }) => {
  Notification({
    title: title,
    message: message,
    type: type,
    ...rest,
  });
};
types.map((type) => {
  Vue.prototype.$message[type] = (message, ...rest) => {
    Message({
      type: type,
      message: message,
      ...rest,
    });
  };
  Vue.prototype.$notify[type] = (title, message, ...rest) => {
    Notification({
      title: title,
      type: type,
      message: message,
      ...rest,
    });
  };
});
