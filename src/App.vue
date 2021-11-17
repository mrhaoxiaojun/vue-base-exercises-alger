<template>
  <div id="app">
    <div id="nav">
      <!-- router-link:路由导航 -->
      <!-- router-link:Route navigation -->
      <!-- to:路由路径 -->
      <!-- to:Routing path -->
      <router-link to="/">BaseAPI</router-link> |
      <router-link to="/shop">ShoppingCart</router-link> |
      <router-link to="/engine">SearchEngine</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
    </div>
    <!-- router-view：组件最终渲染位置 -->
    <!-- router-view：The final rendering position of the component -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
