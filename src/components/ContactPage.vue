<template>

<div>
  <p><button 
  class="btn btn-success" 
  :style="{ width: '18rem' }"
  @click="$router.push(`editcontact/${getContact().id}`)"
  >
  Редактировать контакт
  </button></p>
  <button 
  @click="openModal" 
  class="btn btn-success" 
  :style="{ margin: '5px', width: '18rem' }">
  Удалить контакт
  </button>
<hr/>  
<div class="d-flex justify-content-center">
  
  <div class="card" style="width: 18rem;">
    <p v-if="getContact().photo==0"><div><img src="https://ipk-tula.ru/struct/img/def.jpg" class="card-img-top" /></div></p>
    <p v-else>
       <img :src="getContact().photo" class="card-img-top" />
      </p>
    <div class="userinfo">
      <h4 :style="{ margin: '10px' }">{{ getContact().name }} {{ getContact().surname }}</h4>
      <hr/>
      <p><small>
        Мобильный:
        </small>
         {{ getContact().main ? getContact().main : 'Не указан' }}
      </p>
      <p><small>
        Рабочий:
        </small>
         {{ getContact().work ? getContact().work : 'Не указан' }}
      </p>
      <p><small>
        Дополнительный:
        </small>
         {{ getContact().additional ? getContact().additional : 'Не указан' }}
      </p>
      <hr/> 
      <p><small>
        Email:
        </small>
         {{ getContact().personal ? getContact().personal : 'Не указан' }}
      </p>
      <p><small>
        Рабочий email:
        </small>
         {{ getContact().working ? getContact().working : 'Не указан' }}
      </p>
      <p><small>
        Дополнительный:
        </small>
         {{ getContact().another ? getContact().another : 'Не указан' }}
      </p>
      <hr/><small>
        Социальные сети:
        </small>
      <p>
        <a v-bind:href="getContact().vk" target="_blank">
         {{ getContact().vk ? 'VK' : ''  }}
        </a>
      </p>
      <p>
        <a v-bind:href="getContact().instagram" target="_blank">
         {{ getContact().instagram ? 'Instagram' : ''  }}
        </a>
      </p>
      <p>
        <a v-bind:href="getContact().whatsapp" target="_blank">
         {{ getContact().whatsapp ? 'Whatsapp' : ''  }}
        </a>
      </p>
      <p>
        <a v-bind:href="getContact().telegram" target="_blank">
         {{ getContact().telegram ? 'Telegram' : ''  }}
        </a>
      </p>
      <hr/>
       День рождения: {{ getContact().birthday ? getContact().birthday : 'Не указан' }}   
      <hr/>
       <p>
        Заметки:
         {{ getContact().note ? getContact().note : 'У данного контакта пока нет заметок' }}
       </p>
    </div>
   
  </div>
</div>
</div>

<div class="dialog" v-if="showModal === true">

    <div class="content">
        <p :style="{ margin: '15px' }">
        При удалении контакта все данные о нём будут утеряны. Вы согласны?
        </p>
        <button 
          :style="{ margin: '15px', width:'15%' }" 
          class="btn btn-success"
          @click="hideModal"
          >Нет
        </button>
        <button 
          :style="{ margin: '15px', width:'15%' }" 
          class="btn btn-success"
          @click="deleteContact"
          >Да
        </button>
     </div>
    
  </div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {useRoute, useRouter } from "vue-router";

export default defineComponent({
    
  setup(){
    const router = useRouter()
    const route = useRoute()
    const id = route.params.id
    let showModal = ref(false)
        
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

    const hideModal = () => {
            showModal.value = false
        }    

    const openModal = () => {
            showModal.value = true
        }      

    return {
      getContact,
      deleteContact,
      hideModal,
      openModal,
      showModal,
    }
} 
});

</script>

<style scoped>

.card {
  margin: 10px;
}



</style>