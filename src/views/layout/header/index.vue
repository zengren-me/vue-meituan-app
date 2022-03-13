<template>
    <div class="my-header">
        <el-row>
          <TopBar />
        </el-row>
        <el-row>
          <SearchBar />
        </el-row>
    </div>
</template>

<script>
import TopBar from './topBar.vue';
import SearchBar from './searchBar.vue';

export default {
  components: {
    TopBar,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.my-header>.el-row:nth-child(1) {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F8F8F8;
    color: #999;
    font-size: 12px;
}

.my-header>.el-row:nth-child(2){
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 15px 20px -8px rgba(0, 0, 0, 0.1);
}
</style>
