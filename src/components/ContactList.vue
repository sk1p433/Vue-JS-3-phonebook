<template>
<div class="ContactList">
  
<p><button @click="$router.push('addcontact')" 
          class="btn btn-success" 
          :style="{ margin: '5px', width: '18rem' }">
          добавить контакт
   </button></p>
<hr/>
 <div class="d-flex justify-content-center">
    <form class="form-inline my-2 my-lg-0">
      <input 
        v-model="searchQuery"
        :style="{ marginBottom: '15px', width: '18rem' }"
        class="form-control mr-sm-2" 
        type="search" 
        placeholder="Поиск..." 
        aria-label="Search">
    </form>
 </div>  
 <p v-if="getContacts().length==0">Контакты ещё не добавлены</p>
 <p v-else>
     
<div v-for="item in searchContact()" :key="item.id" class="layout">
 <div class="d-flex justify-content-center"> 
  <div class="card"
       style="width: 18rem;"
      @click="$router.push(`contact/${item.id}`)">
    
    <p v-if="item.photo==0"><div><img src="https://ipk-tula.ru/struct/img/def.jpg" class="card-img-top" /></div></p>
    <p v-else>
    <div id="photo">
    <img :src="item.photo" class="card-img-top"  />
    </div></p>
          
    <div class="userinfo">
    <h4> {{ item.name }} {{ item.surname }} </h4>
    <hr/>
    <p><small>Мобильный:</small> {{ item.main ? item.main : 'Не указан' }}</p>
   </div>  
  </div>
  </div>
  </div>
 </p>
</div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
  name:'ContactList',
  data () {
    return {
      searchQuery:'',
    }
  },
  methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          //сортировка контактов от А до Я по именам
          let sortedContacts = contactsArray.sort((a:any, b:any) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
          return sortedContacts
          }
        }
      return []
      
   },
   searchContact: function () {
    //поиск по имени или номеру или фамилии
    return this.getContacts().filter((index:any) => (index.name.toLowerCase().includes(this.searchQuery.toLowerCase())) || 
            index.main.replace('(','').replace(')','').split(' ').join('').split('-').join('').includes(this.searchQuery) ||
            index.surname.toLowerCase().includes(this.searchQuery.toLowerCase()))
                                                    
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
  cursor: pointer;
  border-radius: 10px;
}

.card:hover{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  transform:scale(1.0);
}

.layout {
  display: inline-grid;
  margin-right: 10px;
  margin-bottom: 10px;
}

.userinfo {
  margin: 5px;
}


</style>
