<template>
  <div>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="(v,i) in searchData" :key="i">
        {{ v.description}}
      </li>
    </ul>
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
      // 官方提供测试数据
      // Officially provide test data
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.searchData = response.data.bpi
      })
      .catch((error)=>{
        // handle error
        console.log(error.response);
      })
      .finally(() =>{
        // always executed
        console.log("always executed");
      });

      // Grab Google's data
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