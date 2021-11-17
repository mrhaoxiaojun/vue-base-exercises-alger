<template>
  <div class="base-api">

    <!-- Tabs和TabPane 是iview的UI组件 -->
    <!-- Tabs and TabPane are UI components of iview -->

    <!-- @on-click 是iview官方组件提供的事件 -->
    <!-- @on-click is an event provided by the official iview component -->
    <!-- Official website address:https://www.iviewui.com/components/tabs-en -->
    
     <Tabs value="Interpolation" @on-click="clc">
       <!-- label 选项卡头显示文字；name 唯一标识，对应value-->
        <TabPane label="Interpolation" name="Interpolation"></TabPane>
        <TabPane label="ClassAndStyle" name="ClassAndStyle"></TabPane>
        <TabPane label="Conditional" name="Conditional"></TabPane>
        <TabPane label="List" name="List"></TabPane>
        <TabPane label="Event" name="Event"></TabPane>
        <TabPane label="Watch" name="Watch"></TabPane>
        <TabPane label="Form" name="Form"></TabPane>
        <TabPane label="Computed" name="Computed"></TabPane>
        <TabPane label="Subcomponent" name="Subcomponent"></TabPane>
        <TabPane label="LifeCycle" name="LifeCycle"></TabPane>
        <TabPane label="All" name="All"></TabPane>
    </Tabs>
    <!-- component 动态组件; v-bind:is绑定当前组件-->
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>
<script>
// 导入组件
import Interpolation from './components/Interpolation'
import ClassAndStyle from './components/ClassAndStyle'
import Conditional from './components/Conditional'
import List from './components/List'
import Event from './components/Event'
import Watch from './components/Watch'
import Form from './components/Form'
import Computed from './components/Computed'
import Subcomponent from './components/Subcomponent'
import LifeCycle from './components/LifeCycle'
import All from './components/All'
export default {
  // 注册组件
  components:{
    Interpolation,
    ClassAndStyle,
    Conditional,
    List,
    Event,
    Watch,
    Form,
    Computed,
    Subcomponent,
    LifeCycle,
    All
  },
  data() {
    return {
      currentTabComponent:Interpolation,
    }
  },
  methods: {
    clc(name){
      // this执行vue的实例，可以直接访问data里的变量
      this.currentTabComponent = name
    }
  },
}
</script>
<!-- This is css -->
<style >
.base-api{
  width: 1150px;
  margin:30px auto;
}
.line {
  margin: 10px;
  border-bottom: 1px dashed red;
  font-size: 16px;
}
.lable,
.label {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  width: 300px;
  text-align: right;
  color: blue;
  vertical-align: top;
}
.value {
  display: inline-block;
  width: 500px;
  text-align: left;
  margin-left: 10px;
}
</style>