<template>
	<el-form
		:model="ruleForm"
		status-icon
		:rules="rules"
		ref="ruleForm"
		label-width="100px"
		class="demo-ruleForm"
	>
		<el-form-item label="用户名" prop="userName">
			<el-input
				type="text"
				v-model="ruleForm.userName"
				autocomplete="off"
			></el-input>
		</el-form-item>
		<el-form-item label="创建密码" prop="pass">
			<el-input
				type="password"
				v-model="ruleForm.password"
				autocomplete="off"
			></el-input>
		</el-form-item>
		<el-form-item label="确认密码" prop="checkPass">
			<el-input
				type="password"
				v-model="ruleForm.rePassword"
				autocomplete="off"
			></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('ruleForm')"
				>完成注册并登录</el-button
			>
		</el-form-item>
		<div class="footer">
			<div class="tip" v-if="showTip">请先阅读并勾选用户协议</div>
			<label for="check"></label>
			<input type="checkbox" name="" id="check" @change="handleChange" />
			<i class="check"></i>
			<span
				>我已阅读并同意
				<router-link to="/">《美团用户协议》</router-link>
				<router-link to="/">《隐私政策》</router-link>
				，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
			</span>
		</div>
	</el-form>
</template>

<script>
import api from '@/api/request';

export default {
  data() {
    const checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      setTimeout(() => {
        const reg = new RegExp(/\w{4,16}/);
        if (!reg.test(value)) {
          callback(new Error('必须为4-16位的字母数字下划线组成'));
        } else {
          callback();
        }
      }, 1000);
      return false;
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        const reg = new RegExp(/\w{6,16}/);
        if (!reg.test(value)) {
          callback(new Error('密码必须为6-16位的字母数字或下划线组成'));
          return;
        }
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: '',
        rePassword: '',
        userName: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        userName: [{ validator: checkUserName, trigger: 'blur' }],
      },
      checked: false,
      showTip: false,
    };
  },
  methods: {
    handleChange() {
      this.checked = !this.checked;
    },
    submitForm(formName) {
      if (!this.checked) {
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 1500);
        return;
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register(this.ruleForm).then((resp) => {
            if (resp.status === 'success') {
              this.$message({
                message: resp.msg,
                type: resp.status,
              });
              this.$router.push('/login');
            } else {
              this.$message({
                message: resp.msg,
                type: resp.status,
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
	width: 485px;
	margin: 40px auto;
	.el-button {
		width: 385px;
		background-color: #ffd100;
		color: #222;
		box-shadow: 0px 2px 1px rgba(191, 105, 0, 0.15);
		border: none;
		font-weight: bold;
	}
	.footer {
		position: relative;
		margin-left: 100px;
		margin-right: 10px;
		.tip {
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
			opacity: 0.7;
			&::after {
				content: "";
				position: absolute;
				border: 4px solid transparent;
				border-top-color: #222;
				bottom: -8px;
				left: 14px;
			}
		}
		> label {
			position: absolute;
			top: 0;
			left: 5px;
			height: 20px;
			width: 10px;
			opacity: 0;
			z-index: 999;
		}
		> input {
			display: none;
		}
		> input:checked + .check {
			background-color: #fed100;
			&::after {
				display: block;
			}
		}
		> .check {
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
			color: rgba(0, 0, 0, 0.5);
			font-weight: 400;
			margin-left: 5px;
			margin-top: -2px;
			margin-bottom: 10px;
			font-size: 14px;
			a {
				color: #fe8c00;
			}
		}
	}
}
</style>
