<template>
  <div class="register">
      <el-row>
        <div class="header">
           <div class="logo">
             <router-link to="/">
              <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="">
            </router-link>
           </div>
           <div class="right">
             <span>已有美团账号?</span>
             <router-link to="/login">登录</router-link>
           </div>
        </div>
      </el-row>
      <el-row>
        <MyForm />
      </el-row>
      <el-row>
        <div class="footer">
          ©meituan.com  京ICP证070791号  京公网安备11010502025545号
        </div>
      </el-row>
  </div>
</template>

<script>
import MyForm from '@/components/Register/form.vue';

export default {
  components: {
    MyForm,
  },
};
</script>

<style lang="scss" scoped>
.register {
  .el-row:first-child {
    width: 100%;
    border-bottom: 2px solid #d8d8d8;
    .header {
      width: 980px;
      height: 67px;
      margin: 0 auto;
      padding: 10px 0;
      color: #666;
      box-sizing: border-box;
      .logo {
        float: left;
        img {
          height: 47px;
        }
      }
      .right {
        float: right;
        margin-top: 10px;
        line-height: 30px;
        span {
          font-size: 14px;
          margin-right: 10px;
        }
        a {
          font-size: 12px;
          padding: 3px 10px;
          background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
          color: #222;
          box-shadow: 0px 2px 1px rgba(191, 105, 0, .15);
        }
      }
    }
  }
  .el-row:last-child {
    width: 100%;
    border-top: 1px solid #eee;
    text-align: center;
    .footer {
      margin-top: 20px;
      font-size: 13px;
      color: #999;
    }
  }
}
</style>
