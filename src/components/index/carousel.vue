<template>
    <div class="carousel">
      <el-carousel height="240px" :interval="4000">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [{
        img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
      }, {
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
      }, {
        img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
      }, {
        img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
      }, {
        img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
      }],
    };
  },
};
</script>

<style scoped>
 .carousel {
    margin: 10px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  img {
      width: 100%;
      height: 100%;
  }
</style>
