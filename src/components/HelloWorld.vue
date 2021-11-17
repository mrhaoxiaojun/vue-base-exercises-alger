<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 如果msg变量里包含'subcomponent'就显示这部分内容 -->
    <!-- If the msg variable contains'subcomponent', this part of the content will be displayed -->
    <div v-if="msg.indexOf('subcomponent') > -1">
      <input type="text" v-model="parentMsg" placeholder="edit me">&ensp;
      <!-- 执行我们接收到的函数‘callback’ -->
      <!-- Execute the function ‘callback’ we received -->
      <button @click="callback(parentMsg)">Emit to the parent component</button>
    </div>
    <!-- 否则显示这部分内容 -->
    <!-- Otherwise display this part of the content -->
    <div v-else>
      <p>
      For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // 接收参数msg，类型是字符串
    // Receive parameter msg, type is string
    msg: String,
    // 接受参数是"callback"，类型是函数类型
    // The accepted parameter is "callback" and the type is function type
    callback:{
      type:Function,
      default:()=>{}
    }
  },
  data() {
    return {
      parentMsg:""
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
