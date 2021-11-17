<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 计算属性 -->
      <span class="lable">Calculated attributes:</span>
      <span class="value">
        <!-- "v-model" 数据双向绑定指令，"message"绑定变量 -->
        <!-- "v-model" data two-way binding instruction, "message" binding variable -->
        <input v-model="message" placeholder="edit me" />
        <!-- "reversedMessage" 通过计算方法得到的变量-->
        <!-- "reversedMessage" variable obtained by calculation -->
        <p>Message is: {{ reversedMessage }}</p>
      </span>
  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  // Vue 实例的数据对象
  // Data object of Vue instance
  data() {
    return {
      message: ""
    };
  },
  // 计算属性 Calculated attributes
  computed: {
    reversedMessage: function () {
      // 当"messageg"改变就会执行这个函数并返回结果
      // When "messageg" changes, this function will be executed and the result will be returned
      // 这里的"this" 指向Vue，可以访问到"message"
      // "This" here points to Vue, you can access "message"
      return this.message.split("").reverse().join("");
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>