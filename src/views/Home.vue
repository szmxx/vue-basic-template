<!--
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 14:08:14
 * @LastEditTime: 2022-03-22 23:57:10
-->
<template>
  <div v-load="bool" class="home bg-primary" :loaded-text="loadingText">
    <div>
      <h1>This is an Home page</h1>
      <img src="~@/assets/logo.png" />
      <global-svg-icon name="user"></global-svg-icon>
      <global-svg-icon name="hot"></global-svg-icon>
      <el-button type="success">成功按钮</el-button>
    </div>
    <div>
      <router-link to="/about">详情页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      bool: true,
      loadingText: "加载中...",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.bool = false;
      this.$message.success("成功");
    }, 3000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > div {
    text-align: center;
  }
}
</style>
