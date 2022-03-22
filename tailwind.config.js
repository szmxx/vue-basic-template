/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-21 22:53:58
 * @LastEditTime: 2022-03-22 23:47:32
 */
module.exports = {
  content: ["./src/**/*.{html,js,vue,scss}"],
  // 删除未使用的类
  purge: ["./src/**/*.{html,vue,js,scss,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    // 完全覆盖默认值
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    fontSize: {
      xs: "0.73rem",
      sm: "0.83rem",
      base: "0.93rem",
      xl: "1.04rem",
      lg: "1.25rem",
      xxl: "1.67rem",
    },
    padding: {},
    margin: {},
    // 拓展默认值
    extend: {
      // padding、margin、width、height、maxHeight、flex-basis、gap、inset、space、translate、scrollMargin、scrollPadding、textIndent
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
    },
  },
  variants: {},
  // 支持自定义类名及类内容详见 https://www.tailwindcss.cn/docs/plugins
  plugins: [require("@tailwindcss/line-clamp")],
  corePlugins: {
    container: false,
    preflight: false,
  },
};
