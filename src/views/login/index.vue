<template>
  <div class="login-container">
    <t-card title="登录" bordered class="login-card">
      <t-form :label-width="80">
        <t-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
          <t-input v-model="username" placeholder="请输入用户名" />
        </t-form-item>
        <t-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
          <t-input v-model="password" type="password" placeholder="请输入密码" />
        </t-form-item>
        <t-space class="flex-end">
          <t-button theme="primary" :loading="loading" @click="handleLogin">登录</t-button>
          <t-button theme="default" @click="handleRegister">注册</t-button>
        </t-space>
        <footer class="flex-end mt-12">
          <t-link theme="primary" hover @click.prevent="handleForgotPassword">忘记密码？</t-link>
        </footer>
      </t-form>
    </t-card>
  </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
import md5 from 'md5';

export default {
  components: {},
  data() {
    return {
      loading: false,
      username: '',
      password: ''
    };
  },
  mounted() {},
  methods: {
    handleLogin() {
      this.loading = true;
      if (!this.username || !this.password) {
        this.$message.error('请填写完整信息');
        return;
      }
      const encryptedPassword = md5(this.password);
      console.log('用户名:', this.username);
      console.log('加密后的密码:', encryptedPassword);
      this.$api.user
        .login({
          username: this.username,
          password: this.password
        })
        .then(res => {
          try {
            const { token } = res;
            this.$utils.cookies.set('token', token);
            const userInfo = jwtDecode(token);
            this.$store.commit('SET_USERINFO', userInfo);
            this.$router.push({ name: 'Home' });
          } catch (error) {
            this.$message.error('登录失败，请稍后重试');
          }
        })
        .catch(() => {
          this.loading = false;
          this.$message.error('登录失败，请稍后重试');
        });
    },

    handleRegister() {
      this.$router.push({ name: 'Register' });
    },

    handleForgotPassword() {
      this.$message.info('请联系管理员重置密码');
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  overflow: hidden;

  .login-card {
    width: 400px;
    margin: 30vh auto;
  }
}
</style>
