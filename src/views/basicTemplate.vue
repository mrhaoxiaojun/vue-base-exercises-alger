<!-- This is the html template -->
<template>
<!-- 模板内部只能有一个根元素 -->
<!-- There can be only one root element inside a template -->
  <div>
  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  // 组件名称
  name:'base',
  // 组件之间调用接受参数
  props:{},
  // Vue 实例的数据对象
  // Data object of Vue instance
  data() {
    return {
      // 数据写在这里
      // Data is written here
    }
  },
  // 注册子组件写在这
  // Register subcomponents are written here
  components:{},
  // 监听数据更新的方法写在这
  // The method of monitoring data update is written here
  watch:{},
  // 计算方法写在这 
  // The calculation method is written here
  computed:{},
  // 普通功能函数写在这
  // Common function functions are written here
  methods:{},
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>

