<template>
  <div class="register-page">
    <t-card title="注册账号" class="register-card">
      <t-form ref="registerForm" :rules="rules" :data="form">
        <t-form-item label="用户名" name="username">
          <t-input v-model="form.username" placeholder="请输入用户名" />
        </t-form-item>
        <!-- <t-form-item label="邮箱" name="email">
          <t-input v-model="form.email" placeholder="请输入邮箱" />
        </t-form-item> -->
        <t-form-item label="密码" name="password">
          <t-input v-model="form.password" type="password" placeholder="请输入密码" />
        </t-form-item>
        <t-form-item label="确认密码" name="confirmPassword">
          <t-input v-model="form.confirmPassword" type="password" placeholder="请再次输入密码" />
        </t-form-item>
        <t-space class="flex-end">
          <t-button @click="handleRegister">注册</t-button>
        </t-space>
        <footer class="flex-end mt-12">
          <span>已有账号？</span>
          <t-link theme="primary" hover @click.prevent="handleGoLogin">登陆</t-link>
        </footer>
      </t-form>
    </t-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        // email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        // email: [
        //   { required: true, message: '邮箱不能为空', trigger: 'blur' },
        //   { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }
        // ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          {
            validator: value => {
              if (value !== this.form.password) {
                return new Error('两次输入的密码不一致');
              }
              return true;
            },
            trigger: 'change'
          }
        ]
      }
    };
  },
  methods: {
    async handleRegister() {
      const result = await this.$refs.registerForm.validate();
      if (typeof result !== 'boolean') return;
      const { username, password } = this.form;
      this.$api.user
        .register({
          username,
          password
        })
        .then(() => {
          this.$message.success('注册成功，请登录');
          this.$router.push({ name: 'Login' });
        })
        .catch(err => {
          this.$message.error(err || '注册失败');
        });
    },
    handleGoLogin() {
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.register-card {
  width: 400px;
}
</style>
