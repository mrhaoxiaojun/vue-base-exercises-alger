<!-- This is the html template -->
<template>
  <div class="about">

    <!-- 事件处理 -->
    <div>
      <span class="lable">Event handling:</span>
      <span class="value">
        <button v-on:click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
      </span>
    </div>

  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  created() {
    this.init();
  },
  // Function method
  methods: {
    say: function (message) {
      alert(message);
    }
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
