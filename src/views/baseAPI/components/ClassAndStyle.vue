<!-- This is the html template -->
<template>
  <div class="about">

    <!-- Class 与 Style 绑定 -->
    <!-- Class and Style binding -->
    <div>
      <span class="lable">Class and Style binding:</span>
      <span class="value"> </span>
      
      <!-- "v-bind" 是动态绑定指令可以简写为":" -->
      <!-- "v-bind" is a dynamic binding instruction that can be abbreviated as ":" -->
      <div>-------class binding--------</div>

      <!-- 对象里的键是类名，值是变量 -->
      <!-- The key in the object is the class name, and the value is the variable -->
      <div class="static" v-bind:class="{ active: isActive }">Class binding(Object way)</div>

      <!-- 数组里可以是变量也可以是字符串 -->
      <!-- The array can be a variable or a string -->
      <div :class="[activeClass, errorClass]">Class binding(Array way)</div>
      
      -------style binding--------
    
      <!-- 对象里的键是类名，值是变量 -->
      <!-- The key in the object is the class name, and the value is the variable -->
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Style binding</div>
      
      <!-- 也可也直接写一个对象变量 -->
      <!-- You can also write an object variable directly -->
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

