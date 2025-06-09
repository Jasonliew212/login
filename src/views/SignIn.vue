<template>
  <div class="home">
    <img src="@public\image\logo.png" class="logo">
    <signIn/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import signIn from '@/components/SignIn.vue'; 

@Options({
  components: {
    signIn,
  },
})
export default class SignIn extends Vue {
  mounted() {
    document.title = 'Sign In';
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
  @media (max-width: 425px) {
  .logo {
    max-width: 70%;
    width: auto;
  }
}
  
</style>

