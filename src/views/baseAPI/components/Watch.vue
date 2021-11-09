<!-- This is the html template -->
<template>
  <div class="about">
    <!-- watch -->
    <div>
      <span class="lable">watch num:</span>
      <span class="value">{{ num }}</span>
    </div>
    <div>
      <span class="lable">watch result:</span>
      <span class="value">{{ changeNum }}</span>
    </div>

  </div>
</template>
<!-- This is Javascript -->
<script>
// JavaScript file import
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  // Component name
  name: "About",
  // Register subcomponents
  components: {
    HelloWorld,
  },
  // Data object of Vue instance
  data() {
    return {
      num: 0,
      changeNum: ""
    };
  },
  // Observe data changes
  watch: {
    num: function (val, oldVal) {
      this.changeNum = `new: ${val}, old: ${oldVal}`;
    },
  },
  // After the instance is created
  created() {
    this.init();
  },
  // Function method
  methods: {
    init() {
      setTimeout(() => {
        this.num = 1;
      }, 2000);
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
<!-- This is css -->
<style >
.line {
  margin: 10px;
  border-bottom: 1px dashed red;
  font-size: 16px;
}
.lable {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  width: 300px;
  text-align: right;
  color: blue;
}
.value {
  display: inline-block;
  width: 300px;
  text-align: left;
  margin-left: 10px;
}
</style>