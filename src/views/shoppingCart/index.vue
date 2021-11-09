<template>
  <div class="shop-box">
    <div class="shopping">
      <!-- 遍历商品 -->
      <!-- Iterate over products -->
      <div class="commodity" v-for="(item, index) in list" :key="index">
        <a :title="item.name">
          <img class="shopimg" :src="item.imgURL" />
        </a>
        <div class="commodity_text">
          <p class="shopms">{{ item.name }}</p>
          <div class="commodity_text_footer">
            <span class="price">{{ item.price }}</span
            ><span class="da">DA</span>
            <!-- 添加事件 -->
            <!-- Add event -->
            <span 
              :class="[item.inventory >0  ? 'commodity_text_right':'commodity_text_right commodity_text_null']" 
              @click="add(item,index)">
              Ajouter au panier
            </span>
          </div>
        </div>
      </div>
    </div>
    <span class="addCart">vérifier le panier ⬇⬇⬇ </span>
    <Panier :shopCartList="shopCartList"></Panier>
  </div>
</template>

<script>
import Panier from "@/components/Panier.vue";
import list from "./list";
export default {
  name: "Shopping",
  data() {
    return {
      // 原始数据 Raw data
      list: JSON.parse(JSON.stringify(list)),
      // 数据结构 data structure
      dataSet: new Set(),
      // 购物车数据 Data shopping cart data
      shopCartList:[],
      // 计数器-单个物品数量 Counter-the number of individual items
      counterMap:{}
    };
  },
  beforeDestroy(){
    alert("You really have the heart to leave!")
  },
  created() {
    // 初始化为数据添加一些自定义字段
    // Initialize to add some custom fields to the data
    this.list.map(v=>{
      this.counterMap[v.id] = 0,
      v.num = 0
      v.total = 0
    })
  },
  components: {
    // 注册组件 Registered components
    Panier,
  },
  methods: {
    add(item,index) {
      // 减库存 Subtract inventory
      item.inventory --
      // 库存不够 Not enough stock
      if(item.inventory < 0) return false
      // 计数器，累计添加商品数量 Counter, the cumulative number of added products
      this.counterMap[item.id] +=1
      // 将商品数量写道数据中 Write the number of goods in the data
      item.num = this.counterMap[item.id]
      // 数据结构做去重 Data structure de-duplication
      this.dataSet.add(item)
      // 更新最新数据到购物车 Update the latest data to the shopping cart
      this.shopCartList = Array.from(this.dataSet)
    },
  },
};
</script>
<style >
.shopping {
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  width: 842px;
  margin: 0 auto;
}
.commodity {
  display: inline-block;
  width: 280px;
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
}
.shopimg {
  margin: 20px 0 20px 0;
  width: 220px;
  height: 220px;
}
.shopms {
  text-align: left;
  font: 14px/20px microsoft yahei;
  color: #320;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;
}
.commodity_text_footer {
  overflow: hidden;
  padding: 10px;
}
.commodity_text_footer::after {
  content: "";
  clear: both;
  height: 0;
  width: 0;
}
.price {
  float: left;
}
.da {
  float: left;
}
.commodity_text_right {
  cursor: pointer;
  float: right;
  color: #fff;
  padding: 2px 10px;
  border-radius: 3px;
  background-color: darkgreen;
}
.addCart {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  background: rgb(48, 175, 54);
}
.commodity_text_null{
  background-color: #eee;
  color: #666060;
  cursor:not-allowed
}
</style>
