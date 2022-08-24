<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


export default defineComponent({
    name:'ContactList',
    methods: {
        addContact: function(name:string, surname:string, photo:img) {
        let contacts = []
        if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
            contacts = JSON.parse(localStorage.getItem('contacts')|| '{}')
            }
            contacts.push({
            name: name,
            surname: surname,
            photo: photo,
            })
            localStorage.setItem('contacts', JSON.stringify(contacts))
            }
        console.log(localStorage)    
        }
                
    }


});
--
<p> {{(getContacts().length==0) ? 'Контакты ещё не добавлены' : (getContacts())}}</p>
--
import { defineComponent } from 'vue';
console.log(localStorage)
export default defineComponent({
  
  name:'ContactList',
  methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          return JSON.parse(localStorage.getItem('contacts')|| '{}')
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
--
export default defineComponent({
  
  setup () {
    
	  const getContacts =() => {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          return JSON.parse(localStorage.getItem('contacts')|| '{}')
          }
         }
      return []
   }
   
   
   const deleteAllContacts = () => {
            if (typeof window !=="undefined") {
                localStorage.removeItem('contacts')
                }
              //this.$forceUpdate()  
              
            }
    
    return {
            getContacts,
            deleteAllContacts,
           }        
  } 
  
});
--
<ul class="demo">
  <li v-for="value in getContacts()">
    <p>{{ value.name }} {{ value.surname }}</p><br/>
  </li>
</ul>
--
//<img v-bind:src="'data:{{ item.photo }}'" />
--
.responsive {
  width: 40%;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid rgb(0, 0, 0)
}
--
export default defineComponent({
    name: 'ContactPage',
    methods: {
	  getContacts: function() {
		  if (typeof window !=="undefined") {
        if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          return contactsArray[1]
          }
        }
      return []
    } 
    }  
});
--
{{ getContact().name }}
--
{{ getContact().map(object => object.id).indexOf(id) }}
Индекс: {{ getContact().map(object => object.id).indexOf(id) }}
--
<p>
      <button 
      class="btn btn-primary" 
      :style="{ margin: '5px' }" 
      @click="$router.push(`contact/${item.id}`)"
      >
      подробности
      </button></p>
--
<p><button class="btn btn-primary">Редактировать контакт</button></p>

<hr/>
<button @click="deleteContact" class="btn btn-primary" :style="{ margin: '5px' }">Удалить контакт</button>
const deleteContact = () => {
        if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          let index = contactsArray.map((object:any) => object.id).indexOf(id)
          contactsArray.splice(index, 1)
          localStorage.setItem('contacts', JSON.stringify(contactsArray))
          }
        }
        router.push({path: '/'})
      }
