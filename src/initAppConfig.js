/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 17:00:01
 * @LastEditTime: 2022-03-22 23:58:44
 */
import { initAxiosInstance } from "@/api";
import { getAppConfig } from "@/api/public";
import store from "@/store";

export default async () => {
  const config = await getAppConfig();
  const env = process.env.NODE_ENV;
  const envConfig = config[env];
  initAxiosInstance();
  store.dispatch("app/setAppConfig", Object.assign({}, config, envConfig));
};
