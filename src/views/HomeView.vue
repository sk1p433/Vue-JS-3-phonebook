<template>
  <div class="home">
   <h1> Телефонная книга </h1>
      <ContactList />
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

