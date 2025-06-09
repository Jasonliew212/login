<template>
  <div class="signUp">
    <img src="@\assets\image\logo.png">
    <signUp/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import signUp from '@/components/SignUp.vue'; // @ is an alias to /src

@Options({
  components: {
    signUp,
  },
})
export default class SignUp extends Vue {
  mounted() {
    document.title = 'Sign Up';
  }
}
</script>

<style scoped>
  .signUp{
    display: block;
    height: 100vh;
    width: 100vw;
    align-content: center;
  }
</style>
