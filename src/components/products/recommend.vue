<template>
  <div class="recommend" v-document-scroll="handleScroll" ref="content">
      <div class="map" ref="map"
      v-if="!isDetail"
      :style="{ position, top: top + 'px' }">
          <img src="./assets/map.jpg" alt="">
      </div>
      <ul>
        <h3>猜你喜欢</h3>
        <li v-for="(item, i) in list" :key="i">
          <img src="item.imgUrl" alt="">
          <p class="title">{{ item.title }}</p>
          <p>
            <el-rate
						:value="+item.score"
						disabled
						text-color="#ff9900"
						class="starts">
						</el-rate>
            <span class="highlight">{{ item.commentNum }}个评价</span>
          </p>
          <p class="subTitle">{{ item.areaName }}</p>
          <p class="price">￥{{ item.avgPrice }}.0 <span>起</span></p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['list', 'wrap', 'isDetail'],
  data() {
    return {
      position: 'static',
      top: 0,
    };
  },
  methods: {
    handleScroll() {
      const dom = document.documentElement;
      const { map, content } = this.$refs;
      const top = dom.scrollTop;
      const contentHeight = content && content.offsetHeight;
      const mapHeight = map && map.offsetHeight;
      if (top > 266) {
        this.position = 'fixed';
        if (top > contentHeight - mapHeight + 266) {
          this.position = 'absolute';
          this.top = contentHeight - mapHeight;
        } else {
          this.position = 'fixed';
          this.top = 0;
        }
      } else if (top < 266) {
        this.position = 'static';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  margin-left: 10px;
  margin-bottom: 10px;
  width: 230px;
  position: relative;
  .map {
    margin-bottom: 10px;
    width: 230px;
    height: 180px;
    z-index: 999;
    cursor: pointer;
     img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
     }
  }
  ul {
    width: 230px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #fff;
    padding:15px 15px 0;
    box-sizing: border-box;
    h3 {
      font-weight: 500;
      color: #333;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    li {
      margin-bottom: 10px;
      img {
        width: 100%;
        border-radius: 5px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
      }
      .title {
        font-size: 14px;
      }
      .starts,.highlight {
        display: inline-block;
      }
      .highlight {
        color: #ccc;
      }
      .subTitle {
        color: #999;
      }
      .price {
        font-size: 16px;
        color: #f60;
        font-weight: bold;
        span {
          font-weight: 500;
          font-size: 12px;
          margin-left: 2px;
        }
      }
    }
  }
}
</style>
