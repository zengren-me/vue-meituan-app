<template>
  <div class="login">
      <el-row>
          <router-link to="/">
            <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="" class="logo">
          </router-link>
      </el-row>
      <el-row>
          <el-col :span="12">
              <img class="banner" src="https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/page/static/banner/www.jpg" alt="">
          </el-col>
          <el-col :span="12">
              <MyForm />
          </el-col>
      </el-row>
      <el-row>
          <div class="footer">
              <div class="nav">
                  <ul>
                      <li>关于美团</li>
                      <li>加入我们</li>
                      <li>商家入驻</li>
                      <li>帮助中心</li>
                      <li>美团手机版</li>
                  </ul>
              </div>
              <div class="copyright">©2022 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
          </div>
      </el-row>
  </div>
</template>

<script>
import MyForm from '@/components/Login/form.vue';

export default {
  components: {
    MyForm,
  },
};
</script>

<style lang="scss" scoped>
.login {
    width: 980px;
    margin: 0 auto;
    .logo {
        margin: 40px auto 30px;
        height: 47px;
    }
    .footer {
        margin-top: 40px;
        .nav {
            margin-bottom: 20px;
            padding: 12px 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            ul {
                li {
                    display: inline-block;
                    font-size: 12px;
                    color: #999;
                    margin: 5px 0;
                    padding-right:16px;
                    line-height: 14px;
                    border-right: 1px solid #eee;
                    text-align: center;
                    padding-left: 16px;
                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        border-right: none;
                    }
                }
            }
        }
        .copyright {
            color: #999;
            font-size: 12px;
        }
    }
}
</style>
