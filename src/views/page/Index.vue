<template>
  <div class="index-page">
      <el-row>
        <el-col :span="5">
          <MyMenu />
        </el-col>
        <el-col :span="19">
          <Life />
        </el-col>
      </el-row>
      <el-row>
        <Container />
      </el-row>
      <el-row>
        <Recommend />
      </el-row>
  </div>
</template>

<script>
import MyMenu from '@/components/index/menu.vue';
import Life from '@/components/index/life.vue';
import Container from '@/components/index/container.vue';
import Recommend from '@/components/index/recommend.vue';

export default {
  components: {
    MyMenu,
    Life,
    Container,
    Recommend,
  },
};
</script>

<style lang="scss" scoped>
.index-page {
    width: 1190px;
    margin: 0 auto;
}
</style>
