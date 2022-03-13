<template>
  <div class="list">
    <ul>
      <li v-for="item in nav" :key="item.key">{{ item.name }}</li>
    </ul>
    <el-row>
      <Item :list="list"/>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/request';
import Item from './item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true,
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false,
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false,
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false,
        },
      ],
      list: [],
    };
  },
  created() {
    api.getGoodsList().then((resp) => {
      this.list = resp.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 4px;
  ul {
    padding: 15px 20px 2px;
    li {
      display: inline-block;
      min-width: 96px;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
