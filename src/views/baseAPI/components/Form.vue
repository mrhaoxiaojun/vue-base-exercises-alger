<!-- This is the html template -->
<template>
  <div class="about">
    <!-- 表单绑定 Form binding-->
    <div>
      <span class="lable">Form binding:</span>
      <span class="value">
        <!-- 文本框 Text box -->
        input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
        <input v-model="message" placeholder="edit me" /><br>
        <p>Message is: {{ message }}</p><br>

        <!-- 复选框 Checkbox-->
        <!-- 公用一个"v-model"的变量代表一个组合 -->
        <!-- A common "v-model" variable represents a combination -->
        
        <!-- 'for="jack"'是为了描述'id="jack"'的元素 -->
        <!-- 'for="jack"' is to describe the element of'id="jack"' -->
        checkbox: 
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <p>Checked names: {{ checkedNames }}</p><br>

        <!-- 单选框 Single box-->
        radio:
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <p>Picked: {{ picked }}</p><br>

        <!-- 选择框 Select box-->
        selected:
        <select v-model="selected">
          <option disabled value="">please choose</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
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
      message: "",
      checkedNames:[],
      picked:'',
      selected:''
    };
  }
  // More API (https://cn.vuejs.org/v2/api/)
};
</script>

