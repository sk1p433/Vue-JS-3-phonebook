<template>
  <div class="ContactList">
    
 

 <p v-if="getContacts().length==0">Контакты ещё не добавлены</p>
 <p v-else>
     
  <div v-for="item in getContacts()" :key="item.index">
  <div id="photo">
  <img :src="item.photo" alt="Фото ещё не загружено" class="responsive" />
  </div>
  {{ item.name }} {{ item.surname }} {{ item.main }}  {{ item.personal }} 
  <a v-bind:href="item.vk" target="_blank"> {{ item.vk ? 'VK' : ''  }}  </a> 
  {{ item.note }} {{ item.birthday ? 'День рождения' +': '+ (item.birthday) : '' }} 
    
</div>


 </p>

 <p><button @click="$router.push('addcontact')">добавить контакт</button></p>
 <p><button @click="deleteAllContacts">удалить все контакты</button></p>
       
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
console.log(localStorage)
export default defineComponent({
  
  name:'ContactList',
  methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          //сортировка контактов по именам
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
.responsive {
  width: 10%;
  height: auto;
}

</style>
