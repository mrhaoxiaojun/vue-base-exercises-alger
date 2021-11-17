<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 子组件传递了两个参数-->
    <!-- The child component passed two parameters -->
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
  // Function method
  methods: {
    cb(message) {
      alert(message);
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
