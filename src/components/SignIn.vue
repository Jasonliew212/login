<template>
  <div class="gradient-border">
    <img src="@/assets/image/image16.png" class="edge-image top">
    <img src="@/assets/image/image16-2.png" class="edge-image right">
    <div class="login-container">
      <div style="height: 40%; align-content: center;">
        <img src="@/assets/image/image20.png" alt="Login Icon" class="login-icon"/>
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
        <span class="toggle-password" @click="showPassword = !showPassword">
          <img :src="require(showPassword ? '@/assets/image/eye.svg' : '@/assets/image/eye-off.svg')" width="15px"/>
        </span>
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

<script setup>
import { ref } from 'vue'
import InputField from '@/components/InputField.vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
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
  height: 580px;
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
@media (min-width: 768px) {
  .gradient-border {
    width: 464px;
  }
  .toggle-password {
    right: 20px !important;
  }
}

.login-icon {
  width: 70%;
  margin: 0 auto 1rem;
  display: block;
}

.login-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
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
  top: 12px;
  cursor: pointer;
  font-size: 1rem;
}

.forgot-link {
  text-align: right;
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.forgot-link a {
  color: #2e91d1;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.signup-text {
  margin-top: 1rem;
  font-size: 0.7rem;
  color: #2e91d1;
}

.signup-text a {
  color: #2e91d1;
  text-decoration: underline;
}
.edge-image {
  position: absolute;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 2;
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
  color: #cff2ff;
}
</style>
