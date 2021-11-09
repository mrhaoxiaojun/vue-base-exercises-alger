<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 列表渲染 -->
    <div>
      <span class="lable">List rendering:</span>
      <span class="value">
        <ul id="example-2">
          <li v-for="(item, index) in items" :key="index">
            {{ index }} - {{ item.message }}
          </li>
        </ul>
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
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  }
  
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>
