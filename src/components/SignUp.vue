<template>
  <div class="gradient-border">
    <img src="@/assets/image/image16.png" class="edge-image top">
    <img src="@/assets/image/image16-2.png" class="edge-image right">
    <div class="register-card">
      <h2 class="register-title font-color nowrap">Create Your Account</h2>
      <div style="width: 100%; display: flex;">
        <InputField v-model="username" placeholder="Username" type="text" style="width: 50%;"/>
        <div style="width: 40%; display: flex; height: 37px;" class="uploadDiv">
          <img :src="imageUrl" width="30px" height="30px" style="margin-block: auto;border-radius: 50%; margin-right: 5px;background-color: rgba(255, 255, 255, 0.1);" @click="triggerFileUpload">
          <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" accept="image/*" />
          <div class="upload-title font-color2 nowrap">Upload a photo</div>
        </div>
      </div>
      
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
      <div class="password-field">
        <InputField
          :type="showConfirmPassword ? 'text' : 'password'"
          placeholder="Confirm Password"
          v-model="confirmPassword"
        />
        <span class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
          <img :src="require(showConfirmPassword ? '@/assets/image/eye.svg' : '@/assets/image/eye-off.svg')" width="15px"/>
        </span>
      </div>
      <div class="otp-container">
        <!-- Tabs shown only on mobile -->
        <div class="otp-tabs">
          <button :class="{ active: selectedTab === 'mobile' }" @click="selectedTab = 'mobile'">Mobile OTP</button>
          <button v-if="isMobile" :class="{ active: selectedTab === 'email' }" @click="selectedTab = 'email'">Email OTP</button>
        </div>

        <!-- OTP Input Forms -->
        <div v-if="selectedTab === 'mobile'">
          <PhoneInput />
          <InputField v-model="otp" placeholder="Enter OTP Number" type="text" />
        </div>

        <div v-if="isMobile && selectedTab === 'email'">
          <EmailInput type="email" v-model="email" placeholder="Enter Email"/>
          <InputField v-model="otp" placeholder="Enter OTP Number" type="text" />
        </div>
      </div>
      
      <label class="checkbox-label font-color2">
        <Checkbox v-model="optIn"/>
        I would like to be kept in the loop on content updates.
      </label>

      <button class="register-button font-color" :disabled="!optIn" >Register</button>

      <p class="login-link font-color2">
        Already have an account? <a href="/" class="font-color2">Log in now</a>
      </p>
      <hr style="border: none; height: 1px; background-color: rgba(139, 191, 214, 0.7) !important;"/>
      <p class="terms-text font-color2">
        By creating an account with Syok Sport, I agree to the
        <a href="#" class="font-color2">Terms & Conditions</a> and
        <a href="#" class="font-color2">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InputField from '@/components/InputField.vue'
import PhoneInput from '@/components/PhoneInput.vue'
import EmailInput from '@/components/EmailInput.vue'
import Checkbox from '@/components/CustomCheckBox.vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const otp = ref('')
const optIn = ref(false)
const showPassword = ref(false)
const isMobile = ref(false)
const showConfirmPassword = ref(false)
const selectedTab = ref('mobile')
const email = ref('')
const fileInput = ref(null)
const imageUrl = ref(require('@/assets/image/camera-plus.svg'))

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})

const triggerFileUpload = () => {
  fileInput.value.click()
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imageUrl.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>

.gradient-border {
  position: relative;
  background: linear-gradient(60deg, #2e91d1 0%, #046fa1 60%, #75daff 80%,#046fa1 90%);
  padding: 2px; /* This is the thickness of the border */
  border-radius: 2rem;
  width: 86%;
  height: 580px;
  margin: 4rem auto;
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

.register-card {
  background: linear-gradient(135deg, #0d4973 30%, #003c69 40%, #114f79 65%, #04253b 90%, #000000 100%);
  border-radius: 2rem;
  margin: auto;
  color: white;
  text-align: center;
  align-content: center;
  height: 100%;
  padding-inline: 10%;
}
.uploadDiv{
  padding-left: 13%;
}
@media (min-width: 768px) {
  .gradient-border {
    width: 464px;
  }
  .uploadDiv{
    padding-left: 10%;
  }
}

.password-field {
  position: relative;
}
.toggle-password {
  position: absolute;
  right: 10px;
  top: 30%;
  cursor: pointer;
  font-size: 1rem;
}
.register-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: left;
  margin-top: 0px;
}
.upload-title{
  font-size: 0.7rem;
  align-content: center;
  justify-content: center;
}

.otp-container {
  margin: auto;
  text-align: center;
  margin-top: 1.5rem;
}

.otp-tabs {
  display: flex;
  margin-bottom: 1rem;
}

.otp-tabs button {
  padding-top: 0.5rem;
  border: none;
  color: rgba(139, 191, 214, 0.7);
  cursor: pointer;
  background-color: rgba(30, 58, 138, 0);
  font-size: 0.75rem;
}

.otp-tabs button.active {
  background-color: rgba(30, 58, 138, 0);
  border-bottom: #d1d5db solid 1px;
  color: #cff2ff;
}

.OTP-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.checkbox-label {
  display: flex;
  text-align: left;
  align-items: center;
  font-size: 0.65rem;
  margin-bottom: 1rem;
}



.register-button {
  width: 100%;
  background: linear-gradient(180deg, #2379be, #103858);
  padding: 0.5rem 0;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #1d4ed8; /* darker blue on hover */
}

.login-link {
  margin-block: 1rem;
  font-size: 0.8rem;
  text-align: left;
}

.login-link a {
  text-decoration: underline;
}

.terms-text {
  margin-top: 1rem;
  font-size: 0.7rem;
  text-align: left;
}

.terms-text a {
  text-decoration: underline;
  color: #d1d5db;
}

.font-color{
  color: #cff2ff !important;
}
.font-color2{
  color: rgba(139, 191, 214, 0.7) !important;
}
.nowrap{
  white-space: nowrap;
}
</style>
