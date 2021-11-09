<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 子组件 -->
    <HelloWorld :msg="msg" :callback="cb" />
  </div>
</template>
<!-- This is Javascript -->
<script>
// JavaScript file import
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  // Register subcomponents
  components: {
    HelloWorld,
  },
  // Data object of Vue instance
  data() {
    return {
      msg: "This is a subcomponent",
    };
  },
  // After the instance is created
  created() {
    this.init();
  },
  // Function method
  methods: {
    cb(message) {
      alert(message);
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
