<template>
  <div class="home">
   <h1> Телефонная книга</h1>
    <ContactList msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactList from '@/components/ContactList.vue'; 

export default defineComponent({
  name: 'HomeView',
  components: {
    ContactList,
  },
});
</script>
