/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 11:02:37
 * @LastEditTime: 2022-03-20 16:57:23
 */
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./icons", false, /\.svg$/);
requireAll(req);
