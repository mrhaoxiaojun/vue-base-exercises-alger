<template>
  <div>
    <input type="text" v-model="searchText">
    <!-- 官网 -->
    <!-- <ul>
      <li v-for="(v,i) in searchData" :key="i">
        {{ v.description}}
      </li>
    </ul> -->

    <!-- 瘦狗 -->
    <ul>
      <li v-for="(v,i) in searchData" :key="i">
        {{ v}}
      </li>
    </ul>

    <!-- 谷歌 -->
    <!-- <List  border size="small">
      <ListItem  v-for="(v,i) in searchData" :key="i">
        {{ v[0] }}
      </ListItem>
    </List> -->
  </div>
</template>
<script>
// Import axios
const axios = require('axios');
export default {
  data() {
    return {
      searchText:"",
      searchData:[]
    }
  },
  watch:{
    searchText:function( newValue, oldValue ){
      this.init()
    }
  },
  methods: {
    init() {
      // /apiSearch，这级路径是我们自定义的，方便代理



      // 官方提供测试数据
      // Officially provide test data

      // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => {
      //   this.searchData = response.data.bpi
      // })
      // .catch((error)=>{
      //   // handle error
      //   console.log(error.response);
      // })
      // .finally(() =>{
      //   // always executed
      //   console.log("always executed");
      // });

      // 代理国内瘦狗搜索引擎
      axios.get(
        `apiSearch?key=${this.searchText}`
      )
      .then((response)=>{
        // handle success
        console.log(typeof response.data);
        
        let data = response.data.split("[")[2].slice(0,-2).split(",")
      
        this.searchData = data
       
      })
      // .catch((error)=>{
      //   // handle error
      //   console.log(error.response);
      // })
      // .finally(() =>{
      //   // always executed
      //   console.log("always executed");
      // });



      // 代理国外google谷歌搜索引擎，国内无法使用

      // axios.get(
      //   `apiSearch?q=${this.searchText}&cp=1&client=gws-wiz&xssi=t&hl=zh-CN&authuser=0&pq=ww&psi=LAGUYaWNJYqejLsPgMi3gAM.1637089582951&dpr=1`
      // )
      // .then((response)=>{
      //   // handle success
      //   console.log(response.data);
        
      //   let data = JSON.parse(response.data.split("'")[1])[0]
      
      //   this.searchData = data
       
      // })
      // .catch((error)=>{
      //   // handle error
      //   console.log(error.response);
      // })
      // .finally(() =>{
      //   // always executed
      //   console.log("always executed");
      // });
    }
  },
}
</script>