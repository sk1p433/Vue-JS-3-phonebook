<template>

<div>
  <p><button 
  class="btn btn-outline-success" 
  :style="{ width: '18rem' }"
  @click="$router.push(`editcontact/${getContact().id}`)"
  >
  Редактировать контакт
  </button></p>
  <button 
  @click="deleteContact" 
  class="btn btn-outline-danger" 
  :style="{ margin: '5px', width: '18rem' }">
  Удалить контакт
  </button>
<hr/>  
<div class="d-flex justify-content-center">
  
  <div class="card" style="width: 18rem;">
    <p v-if="getContact().photo==0"><div><img src="https://ipk-tula.ru/struct/img/def.jpg" class="card-img-top" /></div></p>
    <p v-else>
      <div id="photo">
      <img :src="getContact().photo" alt="фото ещё не загружено" class="card-img-top" />
      </div></p>
    <div class="userinfo">
      <h4>{{ getContact().name }} {{ getContact().surname }}</h4>
      <hr/>
      <p><small>Мобильный:</small> {{ getContact().main ? getContact().main : 'Не указан' }} </p>
      <p><small>Рабочий:</small> {{ getContact().work ? getContact().work : 'Не указан' }}</p>
      <p><small>Дополнительный:</small> {{ getContact().additional ? getContact().additional : 'Не указан' }}</p>
      <hr/> 
      <p><small>Email:</small> {{ getContact().personal ? getContact().personal : 'Не указан' }} </p>
      <p><small>Рабочий email:</small> {{ getContact().working ? getContact().working : 'Не указан' }} </p>
      <p><small>Дополнительный:</small> {{ getContact().another ? getContact().another : 'Не указан' }} </p>
      <hr/><small>Социальные сети:</small>
      <p><a v-bind:href="getContact().vk" target="_blank"> {{ getContact().vk ? 'VK' : ''  }} </a> </p>
      <p><a v-bind:href="getContact().instagram" target="_blank"> {{ getContact().instagram ? 'Instagram' : ''  }}  </a> </p>
      <p><a v-bind:href="getContact().whatsapp" target="_blank"> {{ getContact().whatsapp ? 'Whatsapp' : ''  }}  </a> </p>
      <p><a v-bind:href="getContact().telegram" target="_blank"> {{ getContact().telegram ? 'Telegram' : ''  }}  </a> </p>
      <hr/> День рождения: {{ getContact().birthday ? getContact().birthday : 'Не указан' }}   
      <hr/> <p>Заметки: {{ getContact().note ? getContact().note : 'У данного контакта пока нет заметок' }} </p>
    </div>
   
  </div>
</div>
</div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRoute, useRouter } from "vue-router";

export default defineComponent({
    
  setup(){
    const router = useRouter()
    const route = useRoute()
    const id = route.params.id
        
     const getContact = () => {
		  if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          let index = contactsArray.map((object:any) => object.id).indexOf(id)
          return contactsArray[index]
          }
        }
      return []
    } 

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

    return {
      getContact,
      deleteContact,
    }
} 
});

</script>

<style scoped>

.card {
  margin: 10px;
}

</style>