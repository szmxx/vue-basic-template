/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 15:08:44
 * @LastEditTime: 2022-03-20 22:08:42
 */
import Http from "@/utils/Http";

function handleError(error) {
  console.error(error);
}
const instance_map = {
  base: null,
};

export function initAxiosInstance() {
  instance_map.base = new Http({
    BASEURL: "",
    errorHandler: handleError,
  });
}

const get = (
  instance,
  url,
  serviceName = "未知服务",
  params = {},
  options = {}
) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "get",
      url: url,
      params: params,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error(`请求接口--${serviceName}--失败！`);
        reject(error);
      });
  });
};
const post = (
  instance,
  url,
  serviceName = "未知服务",
  data = {},
  options = {}
) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "post",
      url: url,
      data: data,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error(`请求接口--${serviceName}--失败！`);
        reject(error);
      });
  });
};
const put = (
  instance,
  url,
  serviceName = "未知服务",
  data = {},
  options = {}
) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "put",
      url: url,
      data: data,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error(`请求接口--${serviceName}--失败！`);
        reject(error);
      });
  });
};
const del = (
  instance,
  url,
  serviceName = "未知服务",
  data = {},
  options = {}
) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "delete",
      url: url,
      data: data,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error(`请求接口--${serviceName}--失败！`);
        reject(error);
      });
  });
};

export const GET = (url, serviceName, params, options) => {
  return get(instance_map.base, url, serviceName, params, options);
};
export const POST = (url, serviceName, data, options) => {
  return post(instance_map.base, url, serviceName, data, options);
};
export const PUT = (url, serviceName, data, options) => {
  return put(instance_map.base, url, serviceName, data, options);
};
export const DELETE = (url, serviceName, data, options) => {
  return del(instance_map.base, url, serviceName, data, options);
};

export async function SGET(url, serviceName = "未知服务") {
  try {
    // 配置文件必须走强缓存
    const res = await Http.get(url, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    return res?.data;
  } catch (error) {
    console.error(error);
    throw new Error(`请求---${serviceName}---失败`);
  }
}
