/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 10:55:54
 * @LastEditTime: 2022-03-20 22:45:12
 */
import axios from "axios";
// 防抖暂时只能采用这种方式进行取消
const CancelToken = axios.CancelToken;
export default class Http {
  constructor({
    BASEURL = "",
    timeout = 5 * 60 * 1000,
    errorHandler = () => {},
    isCancel = true,
  }) {
    this.instance = axios.create({
      baseURL: BASEURL,
      timeout: timeout,
    });
    this.errorHandler = errorHandler;
    this.cancel_map = new Map();
    this.isCancel = isCancel;
    this.init_interceptors();
    return this.instance;
  }
  init_interceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isCancel) {
          this.add_cancel(config);
        }
        return config;
      },
      (error) => {
        if (!axios.isCancel(error)) {
          this.errorHandler(error);
          return Promise.reject(error);
        }
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        if (this.isCancel) {
          this.complete_cancel(response.config);
        }
        return Promise.resolve(response?.data);
      },
      (error) => {
        if (!axios.isCancel(error)) {
          this.errorHandler(error);
          return Promise.reject(error);
        }
      }
    );
  }
  add_cancel(config) {
    const key = `${config.method}-${config.url}-${this.obj_to_string(
      config.params
    )}-${this.obj_to_string(config.data)}`;
    this.delete_cancel(key);
    config.cancelToken = new CancelToken((cancel) => {
      this.cancel_map.set(key, cancel);
    });
  }
  delete_cancel(key) {
    const cancel = this.cancel_map.get(key);
    if (cancel) {
      cancel();
      this.cancel_map.delete(key);
    }
  }
  complete_cancel(config) {
    const key = `${config.method}-${config.url}-${this.obj_to_string(
      config.params
    )}-${this.obj_to_string(config.data)}`;
    if (this.cancel_map.has(key)) {
      this.cancel_map.delete(key);
    }
  }
  obj_to_string(obj = {}) {
    if (typeof obj !== "object") {
      return obj;
    }
    let res = "";
    try {
      res = JSON.stringify(obj);
    } catch {
      res = "";
    }
    return res;
  }
  static get() {
    return axios.get(...arguments);
  }
}
