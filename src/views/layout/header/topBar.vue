<template>
    <el-row>
      <el-col :span="10">
        <MyGeo />
      </el-col>
      <el-col :span="8">
        <MyNav />
      </el-col>
    </el-row>
</template>

<script>
import MyGeo from './geo.vue';
import MyNav from './nav.vue';

export default {
  components: {
    MyGeo,
    MyNav,
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  width: 1190px;
  margin: 0 auto;
}

.el-col:nth-child(1) {
  float: left;
}

.el-col:nth-child(2) {
  float: right;
}
</style>
