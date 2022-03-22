/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 21:16:43
 * @LastEditTime: 2022-03-20 21:30:37
 */
import { SGET } from ".";
export function getAppConfig() {
  return SGET("/static/appConfig.json", "获取系统配置文件");
}
