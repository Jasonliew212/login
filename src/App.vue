<template>
  <router-view/>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-image: url("@/assets/image/Rectangle551.png");
  background-repeat: no-repeat;
  background-size: cover; /* or 'contain' or specific size */
  background-position: center;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/image/image18.png");
  background-repeat: no-repeat;
  background-position: top right;
  height: 100%;
  background-size: auto;
  overflow-x: hidden;
}
@media (max-width: 768px) {
  #app{
    background-size: 50%;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
