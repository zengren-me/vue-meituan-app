<template>
  <div class="default">
      <el-container>
        <el-header>
            <MyHeader />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <MyFooter />
        </el-footer>
      </el-container>
  </div>
</template>

<script>
import MyHeader from './header/index.vue';
import MyFooter from './footer/index.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style scoped lang="scss">
.deafult {
  overflow: unset !important;
}
.el-header, .el-main, .el-footer {
  width: 100%;
  padding: 0 !important;
  margin: 0 auto !important;
  height: auto !important;
  overflow: unset !important;
  background-color: #F8F8F8;
}
</style>
