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

export default {
  // Data object of Vue instance
  data() {
    return {
      num: 0,
      changeNum: ""
    };
  },
  // Observe data changes
  watch: {
    /**
     * num: 被监控数据 Monitored data
     * */  
    num: function (newval, oldVal) {
      // this 指向vue可以直接访问data里的变量
      // this points to vue to directly access the variables in data
      this.changeNum = `new: ${newval}, old: ${oldVal}`;
    },
  },
  // After the instance is created
  created() {
    // this 指向vue可以直接访问methods里的方法
    // this points to vue can directly access the methods in methods
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