<template>
  <div class="cont">
      <h3>商家团购及优惠</h3>
      <el-row>
        <el-col :span="19">
          <div class="group">
            <ul>
              <h4 v-if="dealItems">{{ dealItems.length }}款套餐</h4>
              <li v-for="item in dealItems" :key="item.title">
                <p class="title">{{ item.title }}</p>
                <p class="content">
                  ￥<span class="price">{{ item.price }}</span>
                  <span>门市价{{ item.counterPrice }}</span>
                  <span>已售{{ item.saleNum }}</span>
                </p>
                <a href="/">立即抢购</a>
              </li>
            </ul>
          </div>
          <div class="recommend">
              <h3>推荐菜</h3>
              <ul>
                <li v-for="item in recommend" :key="item">{{ item }}</li>
              </ul>
            </div>
          <div class="comment-wrap">
            <h3>{{ commentNum }}条网友点评</h3>
            <ul class="comments">
              <li class="items" v-for="(item, i) in comment" :key="i">
                <div class="avatar">
                  <img :src="item.image" alt="">
                </div>
                <div class="container">
                  <div class="name">{{ item.username }}</div>
                   <el-rate
                    :value="item.rate"
                    disabled
                    text-color="#f90"
                    class="starts">
                    </el-rate>
                    <span class="time">2021年8月5日</span>
                    <div class="desc">{{ item.evalaute }}</div>
                    <div class="images">
                       <ul>
                         <li v-for="img in item.pics" :key="img" @click="showImage(img)"
                         :class="{active: activeImg === img}">
                           <img :src="img" alt="" v-if="img">
                         </li>
                       </ul>
                       <div class="showImage" v-if="activeImg">
                         <img :src="activeImg" alt="">
                       </div>
                    </div>
                    <div class="like">
                       <span></span>赞
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="5">
          <Recommend :isDetail="true" :list="recommendList"/>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import api from '@/api/request';
import Recommend from '@/components/products/recommend.vue';

export default {
  props: ['dealItems', 'recommend', 'comment', 'commentNum'],
  components: {
    Recommend,
  },
  data() {
    return {
      recommendList: [],
      activeImg: '',
    };
  },
  created() {
    api.getRecommend().then((resp) => {
      this.recommendList = resp.data;
    });
  },
  methods: {
    showImage(item) {
      this.activeImg = item;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin box {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 16px 20px 0;
  margin-bottom: 40px;
}
.cont {
  padding-top: 40px;
  h3 {
    margin-bottom: 10px;
  }
  .group {
    @include box;
    ul {
      li {
        position: relative;
        margin-top: 20px;
        box-sizing: border-box;
        padding-bottom: 20px;
        color: #222;
        border-bottom: 1px solid #e5e5e5;
        .content {
          font-size: 14px;
          color: #f60;
          span {
            font-size: 12px;
            color: #999;
            margin-right: 10px;
            &.price {
              font-size: 30px;
              color: #f60;
            }
          }
        }
        &:last-child {
          border-bottom: none;
        }
        a {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 120px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          background-color: #f90;
          color: #fff;
          font-size: 14px;
          border-radius: 100px;
        }
      }
    }
  }
  .recommend {
    ul {
      @include box;
      padding: 33px 32px 26px;
      li {
        display: inline-block;
        margin: 0 20px 19px 0;
      }
    }
  }
  .comment-wrap {
    h3 {
      font-size: 20px;
      font-weight: 500;
    }
    .comments {
      @include box;
      padding-bottom: 40px;
      .items {
        padding-top: 30px;
        display: flex;
        .avatar {
          img {
            width: 60px;
            height: 60px;
            vertical-align: top;
          }
        }
        .container {
          margin-left: 20px;
          color: #222;
          position: relative;
        }
        .time {
          position: absolute;
          top:20px;
          right: 5px;
          color: #999;
          font-size: 12px;
        }
        .desc {
          margin-top: 13px;
          color: #666;
          font-size: 14px;
        }
        .images {
          padding-top: 10px;
          li {
            display: inline-block;
            margin-right: 10px;
            border: 10px solid #fff;
            img {
              width: 140px;
              height: 140px;
              cursor: pointer;
            }
            &.active {
              border-color: #f4f4f4;
            }
          }
         .showImage {
           margin-top: 30px;
           img {
            width: 460px;
            max-height: 380px;
           }
         }
        }
        .like {
          margin: 20px 0;
          font-size: 12px;
          line-height: 12px;
          text-align: right;
          span {
            display: inline-block;
            cursor: pointer;
            width: 15px;
            height: 16px;
            margin-right: 6px;
            vertical-align: bottom;
            background: url(https://s3plus.meituan.net/static-prod01/com.sankuai.web.meishife.pcweb-files/857a0ab/assets/a9850ffbcbd6b5e6.png);
          }
        }
      }
    }
  }
}
</style>
