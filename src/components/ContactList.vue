<template>
<div class="ContactList">

<p><button @click="$router.push('addcontact')" class="btn btn-primary" :style="{ margin: '5px', width: '15%' }">добавить контакт</button></p>
<button @click="deleteAllContacts" class="btn btn-primary" :style="{ margin: '5px', width: '15%' }">удалить все контакты</button>
<hr/>
 <p v-if="getContacts().length==0">Контакты ещё не добавлены</p>
 <p v-else>
     
<div v-for="item in getContacts()" :key="item.id">
 <div class="d-flex justify-content-center"> 
  <div class="card" 
  style="width: 18rem;"
  @click="$router.push(`contact/${item.id}`)">
    <p v-if="item.photo==0"><p>Фото ещё не загружено</p></p>
    <p v-else>
    <div id="photo">
    <img :src="item.photo" alt="фото ещё не загружено" class="card-img-top" />
    </div></p>
    <div class="userinfo">
    <h4> {{ item.name }} {{ item.surname }} </h4>
    <hr/>
    <p><small>Мобильный:</small> {{ item.main ? item.main : 'Не указан' }}</p>
   </div>  
  </div>
  </div> 
  <div class="d-flex justify-content-center"><p>***</p></div> 
</div>

 </p>
        
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
  name:'ContactList',
  methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          //сортировка контактов от А до Я по именам
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

a {
  color: #42b983;
}
.card {
  margin: 1px;
  cursor: pointer;
}
.userinfo {
  margin: 5px;
}
</style>
