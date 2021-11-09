<!-- This is the html template -->
<template>
  <div class="about">

    <!-- Class 与 Style 绑定 -->
    <div>
      <span class="lable">Class and Style binding:</span>
      <span class="value"> </span>
      <div>-------class--------</div>
      <div class="static" v-bind:class="{ active: isActive }">Class binding(Object way)</div>
      <div v-bind:class="[activeClass, errorClass]">Class binding(Array way)</div>
      -------style--------
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Style binding</div>
      <div :style="styleObject">Style binding</div>
    </div>

  </div>
</template>
<!-- This is Javascript -->
<script>
export default {
  data() {
    return {
      isActive:true,
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    };
  }
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>

