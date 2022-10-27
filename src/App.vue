

<template>
  <div class="container">
    <router-view> </router-view> 
    
  </div>
 
  <div id="nav">
  <router-link to="/">Home</router-link>
  <router-link to ="/About">About</router-link>
  <router-link to ="/Brasil">Brasil</router-link>
  <router-link to ="/jamaica">jamaica</router-link>

</div>

</template>

 




<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


