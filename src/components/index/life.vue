<template>
  <div class="my-life">
      <el-row>
        <ul class="nav">
          <li>
            <router-link to="/" class="takeout">美团外卖</router-link>
          </li>
           <li>
            <router-link to="/" class="movie">猫眼电影</router-link>
          </li>
           <li>
            <router-link to="/" class="hotel">美团酒店</router-link>
          </li>
           <li>
            <router-link to="/" class="homestay">名宿 / 公寓</router-link>
          </li>
           <li>
            <router-link to="/" class="business">商家入驻</router-link>
          </li>
           <li>
            <router-link to="/">美团公益</router-link>
          </li>
        </ul>
      </el-row>
      <el-row>
        <el-col :span="14">
            <Carousel />
        </el-col>
        <el-col :span="4">
          <div class="show"></div>
        </el-col>
        <el-col :span="6">
          <div class="loginCard">
            <div class="default" v-if="!user">
              <img src="https://s0.meituan.net/bs/fe-web-meituan/6937298/img/avatar.jpg" alt="">
              <p>Hi! 你好</p>
              <router-link to="/register">注册</router-link>
              <router-link to="/login">立即登录</router-link>
            </div>
            <div class="default-login" v-if="user">
               <div class="setting">
                 <i class="el-icon-setting"></i>
               </div>
               <div class="head-img">
                 <img src="	https://s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt="">
               </div>
               <div class="nickname">{{ user.userName }}</div>
               <ul>
                 <li>
                   <i class="el-icon-s-order"></i>
                   <span>我的订单</span>
                 </li>
                 <li>
                   <i class="el-icon-star-on"></i>
                   <span>我的收藏</span>
                 </li>
                 <li>
                   <i class="el-icon-s-ticket"></i>
                   <span>抵用券</span>
                 </li>
                 <li>
                   <i class="el-icon-s-finance"></i>
                   <span>余额</span>
                 </li>
                 <li>
                   <i class="el-icon-more"></i>
                   <span>更多</span>
                 </li>
               </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <div class="pic-1"></div>
        </el-col>
        <el-col :span="7">
          <div class="pic-2"></div>
        </el-col>
        <el-col :span="4">
          <div class="pic-3"></div>
        </el-col>
        <el-col :span="6">
          <div class="down-app">
            <div class="img">
              <img src="//s1.meituan.net/bs/fe-web-meituan/6937298/img/download-qr.png" alt="">
            </div>
            <p class="app-name">美团APP手机版</p>
            <p class="s1">
              <span>1元起</span>
              吃喝玩乐
            </p>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Carousel from './carousel.vue';

export default {
  components: {
    Carousel,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
.my-life {
  position: relative;
  .nav {
    display: flex;
    margin-top: -35px;
    margin-left: 12px;
    li {
       margin: 0 20px;
      a {
        color: #222;
        font-weight: 700;
        font-size: 16px;
        &:hover {
          color: #f04d4e;
        }
        &.takeout:hover {
          color: #fbc700;
        }
        &.movie:hover {
          color: #ed1e24;
        }
        &.hotel:hover {
          color: #f04d4e;
        }
        &.homestay:hover {
          color: #FDC411;
        }
        &.business:hover {
          color: #FE8C00;
        }
      }
    }
  }
  .show {
    height: 240px;
    margin: 10px 10px 10px 0;
    background-image: url('http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg');
    background-size: 150px;
  }
  .loginCard {
    margin: 10px 0;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    height: 240px;
    text-align: center;
    .default {
      padding-top: 30px;
      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
      }
      p {
        margin-top: 4px;
      }
      a {
        display: block;
        width: 118px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        margin: 10px auto 14px;
        color: #333;
        background-color: #fff;
        &:hover {
          background-color: #f6f6f6;
          transition: all .5s;
        }
      }
    }
    .default-login {
      padding-top: 30px;
      position: relative;
      .setting {
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 10px;
        i {
          color: #666;
          opacity: .6;
          font-size: 20px;
        }
      }
      .head-img {
        img {
          cursor: pointer;
          border: 4px solid #e5e5e5;
          border-radius: 50%;
          box-sizing: border-box;
          width: 55px;
          height: 55px;
        }
      }
      .nickname {
        cursor: pointer;
        color: #222;
        margin-top: 4px;
        font-size: 16px;
        height: 30px;
      }
      > ul {
        padding: 0 15px;
        li {
          cursor: pointer;
          width: 33.3%;
          text-align: center;
          font-size: 12px;
          float: left;
          i, span {
            display: block;
          }
          i {
            font-size: 24px;
            color: #FFC300;
          }
          span {
            margin: 5px 0;
            color: #222;
          }
        }
      }
    }
  }
  .pic-1, .pic-2, .pic-3 {
    margin-left: 10px;
    height: 165px;
    background-image: url('http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png');
    background-size: 100%;
  }
  .pic-2 {
    margin-right: 10px;
    background-image: url('http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg');
  }
  .pic-3 {
    background-image: url('http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg');
    margin-left: 0;
    margin-right: 10px;
  }
  .down-app {
    height: 165px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    text-align: center;
    .img {
      margin: 10px auto 0;
      img {
        width: 95px;
        height: 95px;
      }
    }
    .app-name {
      color: #222;
      font-weight: 500;
    }
    .s1 {
      margin-top: 2px;
      font-size: 12px;
      font-weight: 500;
      color: #3f3f3f;
      span {
        color: #EC5330;
        margin-right: 5px;
      }
    }
  }
}
</style>
