<!--
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 20:07:15
 * @LastEditTime: 2022-03-23 01:06:12
-->
<template>
  <div>{{ SYSTEM_TITLE }}</div>
</template>

<script>
export default {
  name: "HeaderLayout",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    SYSTEM_TITLE() {
      return this.$store.getters["app/config"].title;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
