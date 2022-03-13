<template>
   <div class="form">
       <div class="cue" :style="{ visibility: InputError ? 'visible' : 'hidden'}">
          <i class="el-icon-warning-outline"></i>
          <span>{{ InputError }}</span>
       </div>
       <div class="header">
            <span class="login">账号登录</span>
            <span class="phone">手机动态码登录<i></i></span>
        </div>
        <div class="content">
            <div class="login-phone">
                <input type="text" placeholder="手机号/用户名/邮箱" v-model="userName" @focus="focus">
                <i class="el-icon-s-custom"></i>
            </div>
            <div class="login-pass">
                <input type="password" placeholder="密码" v-model="password" @focus="focus">
                <i class="el-icon-unlock"></i>
            </div>
            <div class="forget">忘记密码?</div>
            <button class="btn" @click="getLogin">登录</button>
            <p class="register">还没有账号?
                <router-link to="/register">免费注册</router-link>
            </p>
            <div class="common">
                <div class="tip" v-if="commonError">请先阅读并勾选用户协议</div>
                <label for="check"></label>
                <input type="checkbox" name="" id="check" @change="handleChange">
                <i class="check"></i>
                <span>我已阅读并同意
                <router-link to="/">《美团用户协议》</router-link>
                <router-link to="/">《隐私政策》</router-link>
                 ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
                 </span>
                 <div class="oauth-wrap">
                     <h3>
                        <span>用合作网站账号登录</span>
                     </h3>
                     <div class="oauth">
                         <span></span>
                         <span></span>
                     </div>
                 </div>
            </div>
        </div>
   </div>
</template>

<script>
import api from '@/api/request';

export default {
  data() {
    return {
      password: '',
      userName: '',
      checked: false,
      commonError: false,
      InputError: '',
    };
  },
  methods: {
    handleChange() {
      this.checked = !this.checked;
    },
    focus() {
      this.InputError = '';
    },
    getLogin() {
      if (!this.userName) {
        this.InputError = '请输入账号';
      } else if (!this.password) {
        this.InputError = '请输入密码';
      } else if (!this.checked) {
        this.commonError = true;
        setTimeout(() => {
          this.commonError = false;
        }, 1500);
      } else {
        api.login({
          userName: this.userName,
          password: this.password,
        }).then((resp) => {
          if (resp.status === 'success') {
            this.$message({
              message: resp.msg,
              type: resp.status,
            });
            localStorage.setItem('user', JSON.stringify({
              userName: this.userName,
              password: this.password,
            }));
            const { params } = this.$router.currentRoute;
            if (params.origin) {
              this.$router.push({
                name: params.origin,
                params: {
                  name: params.name,
                },
              });
            } else {
              this.$router.push('/index');
            }
          } else {
            this.InputError = resp.msg;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form{
  margin-left: 80px;
  margin-bottom: 30px;
  width: 270px;
  .cue {
    visibility: hidden;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #f5d8a7;
    background-color: #fff6db;
    border-radius: 2px;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    .el-icon-warning-outline {
      color: #FF8800;
      font-size: 20px;
      vertical-align: bottom;
      margin-right: 5px;
    }
  }
  .header {
     position: relative;
     height: 30px;
     color: #666;
     .login {
        position: absolute;
        left: 0;
        font-size: 14px;
     }
     .phone {
       font-size: 12px;
       position: absolute;
       right: 0;
       i {
        display: inline-block;
        background-image: url('https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/mobile.24bd95a.png');
        width:14px;
        height: 14px;
        background-size: contain;
        vertical-align: top;
       }
     }
  }
  .content {
    .login-phone input, .login-pass input {
       width: 270px;
       height: 40px;
       box-sizing: border-box;
       padding-left: 43px;
       background-color: #fff;
       border: 1px solid #aaa;
       outline: none;
       &:focus {
           border-color: #FFC300;
       }
    }
    .login-phone {
      position: relative;
      input {
        padding-left: 30px;
      }
      i {
        position: absolute;
        top:12px;
        left: 5px;
        margin-left: 2px;
        color: #ccc;
      }
    }
    .login-pass {
      margin-top: 15px;
      position: relative;
      input {
        padding-left: 30px;
      }
      .el-icon-unlock {
        position: absolute;
        top: 7px;
        left: 6px;
        color: #ccc;
        font-size: 20px;
      }
    }
    .forget {
      font-size: 12px;
      color: #FE8C00;
      margin-top: 10px;
      text-align: right;
      cursor: pointer;
    }
    .btn {
        margin: 10px 0;
        width: 100%;
        height: 34px;
        line-height: 34px;
        background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
        color: #222;
        outline: none;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    .register {
        font-size: 14px;
        color: #666;
        a {
            color: #FE8C00;
        }
    }
    .common {
        margin-top: 15px;
        position: relative;
        .tip {
          transition: all .5s;
          position: absolute;
          top: -33px;
          left: -11px;
          font-size: 12px;
          color: #fff;
          background-color: #222;
          text-align: center;
          width: 140px;
          height: 26px;
          line-height: 25px;
          border-radius: 4px;
          opacity: .7;
          &::after {
            content: "";
            position: absolute;
            border: 4px solid transparent;
            border-top-color: #222;
            bottom: -8px;
            left: 14px;
          }
        }
        label {
            position: absolute;
            top: 0;
            left: 5px;
            height: 20px;
            width: 10px;
            opacity: 0;
            z-index: 999;
        }
        input {
            display: none;
        }
        input:checked + .check{
            background-color: #FED100;
            &::after {
                display: block;
            }
        }
        .check {
            display: inline-block;
            width: 17px;
            height: 17px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 50%;
            vertical-align: top;
            &::after {
                position: absolute;
                content: "";
                width: 3px;
                height: 5px;
                top: 7px;
                left: 8px;
                transform: rotate(45deg) translateX(-50%);
                border: 1px solid #222;
                border-top: none;
                border-left: none;
                display: none;
            }
        }
        span {
            display: inline-block;
            width: 240px;
            color: rgba(0,0,0,.5);
            font-weight: 400;
            margin-left: 5px;
            margin-top: -2px;
            margin-bottom: 10px;
            font-size: 14px;
            a {
                color: #FE8C00;
            }
        }
        .oauth-wrap {
            margin-top: 20px;
           h3 {
               position: relative;
               width: 100%;
               height: 0;
               border-bottom: 1px solid #ccc;
               span {
                   position: absolute;
                   top: 2px;
                   left: 50%;
                   transform: translate(-50%, -50%);
                   background-color: #fff;
                   width: 150px;
                   text-align: center;
                   color: #666;
               }
           }
           .oauth {
               margin-top: 20px;
               text-align: center;
               span {
                   display: inline-block;
                   margin:0 10px;
                   cursor: pointer;
                   width: 18px;
                   height: 18px;
                   background-image: url(https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/sp-normal.6a88d8a.png);
                   &:nth-child(1) {
                       background-position: -1250px -617px;
                  }
                  &:nth-child(2) {
                      background-position: -1250px -635px;
                  }
               }
           }
        }
    }
  }
}
</style>
