<!--
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 20:11:22
 * @LastEditTime: 2022-03-20 21:10:27
-->
<template>
  <div class="layout">
    <left-nav class="layout-left"></left-nav>
    <div class="layout-right">
      <header-layout class="header"></header-layout>
      <main-layout class="content"></main-layout>
    </div>
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import LeftNav from "./components/LeftNav.vue";
import MainLayout from "./components/MainLayout.vue";
export default {
  name: "Home",
  components: { LeftNav, HeaderLayout, MainLayout },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;

  &-left {
    border-right: 1px solid rgb(0 0 0 / 10%);
    padding: 24px;
    width: 200px;
    background: #fff;
  }

  &-right {
    display: flex;
    flex-direction: column;
    width: calc(100% - 200px);
    height: 100%;
    background: #fff;

    .header {
      padding: 0 10px;
      height: 40px;
      box-shadow: 1px 2px 1px 0 rgb(0 0 0 / 10%);
      line-height: 40px;
    }

    .content {
      height: calc(100% - 40px);
    }
  }
}
</style>
