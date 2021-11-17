<template>
  <div class="panier">
    <!-- List、ListItem、ListItemMeta 是iview的UI组件 -->
    <!-- List, ListItem, ListItemMeta are the UI components of iview -->
    <!-- Component address:https://www.iviewui.com/components/list-en -->
    <List size="large">
      <!-- 迭代购物车列表 -->
      <!-- Iterating the shopping cart list -->
      <ListItem v-for="(item, index) in shopCartList" :key="index">
        <ListItemMeta
          :avatar="item.imgURL"
          :title="item.title"
          :description="item.name"
        />
        <template slot="action">
          <li>
            <span>quantité:</span>
            <a>{{ item.num }}</a>
          </li>
          <li>
            <span>Prix ​​unitaire:</span>
            <a>{{ item.price }}</a>
          </li>
          <li>
            <span>Prix ​​total:</span>
            <a>{{ item.total }}</a>
          </li>
        </template>
      </ListItem>
    </List>
    <!-- Total price of all items -->
    <div class="total">le total:{{ total }}</div>
  </div>
</template>
<script>
export default {
  props: {
    // 接收购物车数据
    // Receive shopping cart data
    shopCartList: {
      type: Array,
      default: () => {},
    },
  },
  watch: {
    // 监控购物车数据变化
    // Monitor changes in shopping cart data
    shopCartList: function (val, oldVal) {
      val.map((v) => {
        // 计算单个物品总价
        v.total = v.num * v.price;
      });
    },
  },
  computed: {
    // 计算所有物品总价
    // Calculate the total price of all items
    total: function () {
      return this.shopCartList.reduce((pre, cur) => pre + cur.total, 0);
    },
  },
};
</script>
<style>
.panier .ivu-list-item-meta-title {
  font-size: 22px;
  text-align: left;
}
.panier .ivu-list-item-meta-description {
  font-size: 20px;
  text-align: left;
}
.panier .ivu-avatar {
  width: 60px;
  height: 60px;
}
.panier .ivu-list-item-action a {
  font-size: 16px;
}
.panier .ivu-list-item-action>li{
  color: #000;
  font-size: 16px;
}
.panier .ivu-list-item-action>li a {
  font-weight: bold;
}
.total{
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
</style>