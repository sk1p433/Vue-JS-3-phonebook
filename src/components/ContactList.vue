<template>
  <div class="ContactList">
    
 

 <p v-if="getContacts().length==0">Контакты ещё не добавлены</p>
 <p v-else>
     
<div v-for="item in getContacts()" :key="item.index">
 <div class="d-flex justify-content-center"> 
  <div class="card" style="width: 18rem;">
    <p v-if="item.photo==0">Фото ещё не загружено</p>
    <p v-else>
    <div id="photo">
    <img :src="item.photo" alt="фото ещё не загружено" class="card-img-top" />
    </div></p>
    <div class="userinfo">
    {{ item.name }} {{ item.surname }}
    <hr/> Мобильный: {{ item.main ? item.main : 'Не указан' }} 
    <hr/> Email: {{ item.personal ? item.personal : 'Email ещё не указан' }}  
    <hr/> Социальные сети: 
    <p><a v-bind:href="item.vk" target="_blank"> {{ item.vk ? 'VK' : ''  }} </a> </p>
    <p><a v-bind:href="item.instagram" target="_blank"> {{ item.instagram ? 'Instagram' : ''  }}  </a> </p>
    <p><a v-bind:href="item.whatsapp" target="_blank"> {{ item.whatsapp ? 'Whatsapp' : ''  }}  </a> </p>
    <p><a v-bind:href="item.telegram" target="_blank"> {{ item.telegram ? 'Telegram' : ''  }}  </a> </p>
    <hr/> День рождения: {{ item.birthday ? item.birthday : 'Не указан' }}   
    <hr/> Заметки: {{ item.note ? item.note : 'У данного контакта пока нет заметок' }} 
  </div>  
 </div>
 </div>  
</div>


 </p>

 <p><button @click="$router.push('addcontact')" class="btn btn-primary">добавить контакт</button></p>
 <p><button @click="deleteAllContacts" class="btn btn-primary">удалить все контакты</button></p>
       
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
.card {
  margin: 10px;
}
.userinfo {
  margin: 5px;
}
</style>
