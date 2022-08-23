<template>
  <div class="ContactList">
    
 

 <p v-if="getContacts().length==0">Контакты ещё не добавлены</p>
 <p v-else>
    
  
<div v-for="item in getContacts()" :key="item.index">
  {{ item.name }} {{ item.surname }} {{ item.mobile }} {{ item.email }}
</div>


 </p>

 <p><button @click="$router.push('addcontact')">добавить контакт</button></p>
 <p><button @click="deleteAllContacts">удалить все контакты</button></p>
       
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive  } from 'vue';
console.log(localStorage)
export default defineComponent({
  
  name:'ContactList',
  methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          let sortedContacts = contactsArray.sort((a:any, b:any) => (a.name < b.name ? -1 : 1))
          return sortedContacts
          }
        }
      return []
      
   },
   deleteAllContacts: function() {
            if (typeof window !=="undefined") {
                localStorage.removeItem('contacts')
                }
              this.$forceUpdate()  
            }
  } 
  
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
