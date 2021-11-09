<template>
  <div class="base-api">
     <Tabs value="Interpolation" @on-click="clc">
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
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>
<script>
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
  name:"base",
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
      currentTabComponent:Interpolation
    }
  },
  methods: {
    clc(name){
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
.lable {
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