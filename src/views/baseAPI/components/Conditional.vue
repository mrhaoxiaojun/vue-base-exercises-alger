<!-- This is the html template -->
<template>
  <div class="about">
    
    <!-- 条件判断 Conditional rendering -->
    <div>
      <span class="lable">Conditional rendering:</span>
      <span class="value">
       <!-- "v-model" 数据双向绑定指令，"message"绑定变量 -->
        <!-- "v-model" data two-way binding instruction, "message" binding variable -->
        <input type="text" v-model="type" placeholder="edit me"/>
        
        <!-- "v-if"和"v-else-if"和"v-else"是一套组合判断指令 -->
        <!-- "v-if" and "v-else-if" and "v-else" are a set of combined judgment instructions -->
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>
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
      type: "",
    };
  },
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
