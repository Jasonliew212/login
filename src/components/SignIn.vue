<template>
  <div class="gradient-border">
    <img src="@public/image/image16.png" class="edge-image top">
    <img src="@public/image/image16-2.png" class="edge-image right">
    <div class="login-container">
      <div class="img-container">
        <img src="@public/image/image20.png" alt="Login Icon" class="login-icon"/>
      </div>
      
      <h2 class="login-title font-color">Log In Your Account</h2>

      <InputField
        type="text"
        placeholder="Username/Email"
        v-model="username"
      />

      <div class="password-field">
        <InputField
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          v-model="password"
        />
        <div class="toggle-password" @click="showPassword = !showPassword">
          <img :src="require(showPassword ? '@public/image/eye.svg' : '@public/image/eye-off.svg')" width="15px"/>
        </div>
      </div>

      <div class="forgot-link">
        <a href="#">Forgot password/UID?</a>
      </div>

      <button class="login-button">Log In</button>

      <p class="signup-text">
        Don’t have an account?
        <a href="/SignUp">Sign up here</a>
      </p>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'

export default {
  name:'SignIn',
  components: {
    InputField
  },
  data() {
    return {
      username: '',
      password: '',
      showPassword: false
    }
  }
}
</script>

<style scoped>
button{
  background: linear-gradient(180deg, #2379be, #103858);
}

.gradient-border {
  position: relative;
  background: linear-gradient(60deg, #2e91d1 0%, #046fa1 60%, #75daff 80%,#046fa1 90%);
  padding: 2px; /* This is the thickness of the border */
  border-radius: 2rem;
  width: 86%;
  max-width: 464px;
  height: 520px;
  margin: 4rem auto;
}
.login-container {
  background: linear-gradient(135deg, #0d4973 30%, #003c69 40%, #114f79 65%, #04253b 90%, #000000 100%);
  border-radius: 2rem;
  margin: auto auto;
  color: white;
  text-align: center;
  align-content: center;
  height: 100%;
  padding: 0% 10%;
}

.login-icon {
  width: 70%;
  max-width: 230px;
  margin: 0 auto 1rem;
  display: block;
}

.login-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  justify-self: left;
}

.login-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.forgot-link {
  text-align: right;
  font-size: 8px;
  line-height: 140%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.forgot-link a {
  color: #6F9FC9;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem;
  font-size: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.signup-text {
  color: #6F9FC9;
  font-size: 8px;
  line-height: 140%;
}

.signup-text a {
  color: #6F9FC9;
  text-decoration: underline;
}
.edge-image {
  position: absolute;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 0;
}
.edge-image.top{
  width: 300px;
  top: 1px; 
  left: 58%; 
}
.edge-image.right{
  top: 60%; 
  left: calc(100% - 1px);
  height: 300px;
}
.font-color{
  color: #CAE6FF;
}
.img-container{
  height: 45%;
  align-content: center;
}

@media (min-width: 768px) {
  .gradient-border {
    width: 464px;
    height: 580px;
  }
  .toggle-password {
    right: 20px !important;
  }
  .login-title{
    font-size: 24px;
  }
  .toggle-password{
    top: 12px;
  }
  .signup-text{
    font-size: 12px;
  }
  .forgot-link{
    font-size: 14px;
  }
  .login-button{
    font-size: 16px;
  }
  .img-container{
    height: 40%;
  }
  .login-icon{
    width: 60%;
  }
}
</style>
