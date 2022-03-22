/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 22:50:21
 * @LastEditTime: 2022-03-22 01:11:33
 */
import { check_position_style, string_to_dom, guid } from "@/utils";
const maskColor = "rgba(255,255,255,0.1)";
const img = require("@/assets/loading.webp");
let loading = `
  <div id='${guid()}' style='display:flex;align-items:center;justify-content:center;flex-direction:column;position:absolute;top:0;left:0;width:100%;height:100%;background:${maskColor}'>
    <img src='loadingImg' alt='加载图片' width='5%'/>
    <div style='margin-top:5px'>loadingText</div>
  </div>
`;
function toggle_show() {}
export default {
  bind: (el, binding) => {
    const { value } = binding;
    check_position_style(el);
    loading = loading.replace(/loadingText/, value);
    loading = loading.replace(/loadingImg/, img);
    const dom = string_to_dom(loading);
    el.instance = dom;
    el.appendChild(dom[1]);
  },
  inserted: () => {},
  update: (el, binding, vnode) => {
    el.instance;
    if (binding.value !== vnode.value) {
      toggle_show(el, binding.value);
    }
  },
  componentUpdated: () => {},
  unbind: (el) => {
    el.removeChild(loading);
  },
};
