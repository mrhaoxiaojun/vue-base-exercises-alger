<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 计算属性 -->
      <span class="lable">Calculated attributes:</span>
      <span class="value">
        <input v-model="message" placeholder="edit me" />
        <p>Message is: {{ reversedMessage }}</p>
      </span>
  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  // Data object of Vue instance
  data() {
    return {
      message: ""
    };
  },
  // 计算属性的 getter
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>