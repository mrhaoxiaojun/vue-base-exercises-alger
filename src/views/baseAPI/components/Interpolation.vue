<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 插值表达式 Interpolation expression-->
    <div>
      <span class="lable">Interpolation expression:</span>
      <span class="value">

        <!-- 通过"{{}}"的方式将变量渲染到页面中 -->
        <span class="t">Using Interpolation: {{ text }}</span><br>
        <!-- "v-text "与 "{{}}" 功能一样-->
        <!-- "v-text" has the same function as "{{}}" -->
        <span class="t">Using v-html directive: <span v-text="text"></span></span><br>


        <span class="t">Using Interpolation:  {{ rawHtml }}</span><br>
        <!--" v-html" 渲染html格式的内容 -->
        <!-- "v-html" renders content in html format -->
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
