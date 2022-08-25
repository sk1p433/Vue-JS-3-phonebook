<template>
  <nav>
    <router-link to="/">Главная страница</router-link> |
    <router-link to="/about">О сайте</router-link>
  </nav>
  <router-view/>
  <footer class="footer" :style="{ backgroundColor: 'white', marginTop: '5px' }">
         PhoneBook © 2022 
  </footer>
</template>

<style>
#app {
  min-height: -webkit-fill-available;
  font-family: sans-serif;
  text-align: center;
  background: #DBDBDB;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
      'main'
      'footer';
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
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
