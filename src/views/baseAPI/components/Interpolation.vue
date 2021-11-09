<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 插值表达式 -->
    <div>
      <span class="lable">Interpolation expression:</span>
      <span class="value">
        <span class="t">Using Interpolation: {{ text }}</span><br>
        <span class="t">Using v-html directive: <span v-text="text"></span></span><br>
        <span class="t">Using Interpolation:  {{ rawHtml }}</span><br>
        <span class="t">Using v-html directive: <span v-html="rawHtml"></span></span><br>
      </span>
    </div>
  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  // Data object of Vue instance
  data() {
    return {
      text: "This is an about Vue page",
      rawHtml:"<a>123</a>"
    };
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
