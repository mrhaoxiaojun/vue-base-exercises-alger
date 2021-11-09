<!-- This is the html template -->
<template>
  <div class="about">
    
    <!-- 条件判断 -->
    <div>
      <span class="lable">Conditional rendering:</span>
      <span class="value">
        <input type="text" v-model="type" placeholder="edit me"/>
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
