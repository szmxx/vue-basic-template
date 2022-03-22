/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 23:11:45
 * @LastEditTime: 2022-03-22 23:54:08
 */
export function string_to_dom(string) {
  const div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes;
}

export function check_position_style(el) {
  const position = el.style.position;
  if (!position || position === "static") el.style.position = "relative";
}
export function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0;
    var v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
