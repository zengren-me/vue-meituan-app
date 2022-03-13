<template>
  <div class="change-city">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <HotCity :list="hotCityList" title="热门搜索"/>
    </el-row>
    <el-row>
      <HotCity :list="recentList" title="最近访问"/>
    </el-row>
    <el-row>
      <Category />
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue';
import HotCity from '@/components/changeCity/hotCity.vue';
import Category from '@/components/changeCity/category.vue';
import api from '@/api/request';

export default {
  components: {
    Province,
    HotCity,
    Category,
  },
  data() {
    return {
      hotCityList: [],
      recentList: [],
    };
  },
  created() {
    api.getHotCity().then((resp) => {
      this.hotCityList = resp.data;
    });
    api.getRencentCity().then((resp) => {
      this.recentList = resp.data;
    });
  },
};
</script>

<style lang="scss" scoped>
  .change-city {
    width: 1190px;
    margin: 20px auto 40px;
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    .el-row:nth-child(1) {
      padding-bottom: 30px;
      box-sizing: content-box;
      border-bottom: 1px solid #e5e5e5;
      height: 40px;
    }
    .el-row:nth-child(2), .el-row:nth-child(3) {
      padding: 30px 0;
      box-sizing: content-box;
      border-bottom: 1px solid #e5e5e5;
    }
  }
</style>
