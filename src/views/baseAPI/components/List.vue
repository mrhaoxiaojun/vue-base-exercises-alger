<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 列表渲染 List rendering -->
    <div>
      <span class="lable">List rendering:</span>
      <span class="value">
        <ul id="example-2">
          <!-- 
              v-for: 循环指令 Loop instruction
              item: 每一项 Each
              index: 索引 index
              in: 循环语法 Loop grammar
              items: 循环主体 Loop body
              key: 每一条数据的唯一标识 Unique identification of each piece of data
           -->
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
