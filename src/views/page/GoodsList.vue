<template>
    <div class="goods-list">
        <el-row>
          <Crumb />
          <el-col :span="19">
            <el-row>
              <Category />
            </el-row>
            <el-row>
              <List />
            </el-row>
          </el-col>
          <el-col :span="5">
            <Recommend :list="recommendList"/>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/request';
import Crumb from '@/components/products/crumb.vue';
import Category from '@/components/products/category.vue';
import List from '@/components/products/list.vue';
import Recommend from '@/components/products/recommend.vue';

export default {
  components: {
    Crumb,
    Category,
    List,
    Recommend,
  },
  data() {
    return {
      fixed: false,
      recommendList: [],
    };
  },
  created() {
    api.getRecommend().then((resp) => {
      this.recommendList = resp.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.goods-list {
  width: 1190px;
  margin: 0 auto;
  height: 500px;
  padding-top: 10px;
}
</style>
