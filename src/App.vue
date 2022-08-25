<template>
  <nav>
    <router-link to="/">Главная страница</router-link> |
    <router-link to="/about">О сайте</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  background: linear-gradient(to right, #FFF9ED 20%, #DBDBDB 20%, #DBDBDB 80%, #FFF9ED 80%);
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
