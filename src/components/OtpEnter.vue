<template>
  <div class="gradient-border">
    <img src="@/assets/image/image16.png" class="edge-image top">
    <img src="@/assets/image/image16-2.png" class="edge-image right">
    <div class="login-container">
      <div style="height: 40%; align-content: center;" class="img-container">
        <img src="@/assets/image/image21.png" alt="Login Icon" class="login-icon"/>
      </div>
      
      <h2 class="login-title font-color">OTP Verification</h2>

      <div class="font-color2">
        Please enter the OTP send to {{ maskPhoneNumber(phoneNumber) }}
      </div>
      <div class="">
        <InputFieldOtp type="text" v-model="otp" />
      </div>
      

      <div class="font-color2">
        Did't receive your OTP? <a @click="countDown" :class="{ disabled: !isClickable }" :style="{ pointerEvents: isClickable ? 'auto' : 'none', opacity: isClickable ? 1 : 0.8 }"> Resend OTP <span v-if="!isClickable">in <b> {{ countdownValue }}s</b></span></a>
      </div>

      <button class="login-button">OK</button>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import InputFieldOtp from '@/components/InputFieldOtp.vue'

const otp = ref('')
const timer = ref('')
const isClickable = ref(true);
const countdownValue = ref(60); // seconds
const countdownTimer = ref(null);
const phoneNumber = ref('+60123456789')

const maskPhoneNumber = (phone) => {
  if (!phone || phone.length < 5) return phone;
  const first = phone.slice(0, 3);
  const last = phone.slice(-2);
  const masked = 'x'.repeat(phone.length - 5);
  return `${first}${masked}${last}`;
};
const countDown = () => {
  if (!isClickable.value) return;

  isClickable.value = false;
  countdownValue.value = 60;

  countdownTimer.value = setInterval(() => {
    countdownValue.value--;

    if (countdownValue.value <= 0) {
      clearInterval(countdownTimer.value);
      isClickable.value = true;
    }
  }, 1000);
};
onMounted(() => {
  countDown()
})
</script>

<style scoped>
button{
  background: linear-gradient(180deg, #2379be, #103858);
}
a.disabled {
  cursor: not-allowed;
  text-decoration: none;
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
  margin: auto;
  color: white;
  text-align: center;
  height: 100%;
  padding: 0% 10%;
}
@media (min-width: 768px) {
  .gradient-border {
    width: 464px;
  }
  .login-icon{
    
  }
}
.img-container{
  padding-top: 10%;
  padding-bottom: 5%;
}
@media (max-width:425px){
  .img-container{
    padding-top: 15%;
    padding-bottom: 10%;
  }
  .login-icon{
    width: 100% !important;
  }
}

.login-icon {
  width: 70% ;
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

.login-button {
  width: 80%;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
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
.font-color2{
  justify-self: left;
  color: #94bccb;
  white-space: nowrap;
  font-size: x-small;
  align-self: left;
}
</style>
