<!--
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 18:08:05
 * @LastEditTime: 2022-03-22 23:57:18
-->
<template>
  <i :class="['svg-icon', `svg-icon-${name}`]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" :width="width" :height="height">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
export default {
  name: "GlobalSvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      type: [Number, String],
      default: () => [12, 12],
    },
    width: {
      type: String,
      default: "1em",
    },
    height: {
      type: String,
      default: "1em",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgStyle() {
      const { color, size } = this;
      const style = {};
      color && (style.color = color);
      if (size) {
        if (typeof size === "string") {
          size.includes("rem")
            ? (style.fontSize = size)
            : (style.fontSize = `${size}px`);
        } else {
          style.fontSize = `${size}px`;
        }
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  display: block;
}
</style>
