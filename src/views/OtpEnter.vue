<template>
  <div class="home">
    <img src="@public/image/logo.png">
    <otpEnter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import otpEnter from '@/components/OtpEnter.vue'; 

@Options({
  components: {
    otpEnter,
  },
})
export default class OTPEnter extends Vue {
  mounted() {
    document.title = 'OTP ENTER';
  }
}
</script>
<style scoped>
  .home{
    display: block;
    height: 100vh;
    width: 100vw;
    align-content: center;
  }
</style>
