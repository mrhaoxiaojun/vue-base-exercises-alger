<!-- This is the html template -->
<template>
  <div class="about">

    <!-- 事件处理 Event handling-->
    <div>
      <span class="lable">Event handling:</span>
      <span class="value">
        <!-- "v-on:click" 点击事件指令，可以简写为"@click"-->
        <!-- "v-on:click" click event instruction, can be abbreviated as "@click" -->
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
    // 事件方法写在这里
    // The event method is written here
    say (message) {
      alert(message);
    }
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
