<template>
  <div>
    <p>{{ count }}</p>
    <p>
      Is even : {{evenNumber}}
    </p>
    <p></p>
    <p>
      sync: 
      <button @click="increment">+</button>
      --
      <button @click="decrement">-</button>
    </p>
    <p>
      async:
      <button @click="increment2">+</button>
--
      <button @click="decrement2">-</button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "99",
    };
  },
  methods: {
    // this.$store：可以访问到全局的store
    // this.$store: can access the global 'store'
    // 同步数据+1  Sync data +1
    increment() {
      this.$store.commit("increment", 1);
    },
    // 同步数据 -1  Sync data -1
    decrement() {
      this.$store.commit("decrement", 1);
    },
    // 异步数据 +1 Asynchronous data +1
    increment2() {
      this.$store.dispatch("incrementAsync", 1);
    },
    // 异步数据 -1 Asynchronous data -1
    decrement2() {
      this.$store.dispatch("decrementAsync", 1);
    },
  },
  computed: {
    count() {
      // 取到全局数据"count"返回给当前组件
      // Get the global data "count" and return it to the current component
      return this.$store.state.count;
    },
    evenNumber() {
      // 取到全局数据"evenNumber"返回给当前组件
      // Get the global data "evenNumber" and return it to the current component
      return this.$store.getters.evenNumber;
    },
  },
};
</script>