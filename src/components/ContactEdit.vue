<template>
 <h4>Редактировать контакт</h4>
<div class="d-flex justify-content-center"> 
  <div class="card" :style="{ padding: '10px' }">
    <form @submit.prevent>
      <p>Загрузить фото <input type="file" accept="image/*" @change="uploadImage"></p>
      Имя<input v-model="getContactData().name" class="form-control" placeholder="введите имя" />
      <p>Фамилия <input v-model="getContactData().surname" class="form-control" placeholder="введите фамилию" /></p>
      <p>Номер <input v-model="getContactData().main" class="form-control" placeholder="введите мобильный номер" /> </p>
      <p>Рабочий номер <input v-model="getContactData().work" class="form-control" placeholder="введите рабочий номер" /> </p>
      <p>Дополнительный номер <input v-model="getContactData().additional" class="form-control" placeholder="введите дополнительный номер" /> </p>
      <p>Личный email <input v-model="getContactData().personal" class="form-control" placeholder="введите email" /> </p>
      <p>Рабочий email <input v-model="getContactData().working" class="form-control" placeholder="введите рабочий email" /> </p>
      <p>Дополнительный email <input v-model="getContactData().another" class="form-control" placeholder="дополнительный email" /> </p>
      <p>Telegram <input v-model="getContactData().telegram" class="form-control" placeholder="telegram" /> </p>
      <p>Whatsapp <input v-model="getContactData().whatsapp" class="form-control" placeholder="whatsapp" /> </p>
      <p>VK <input v-model="getContactData().vk" class="form-control" placeholder="vk" /> </p>
      <p>Instagram <input v-model="getContactData().instagram" class="form-control" placeholder="instagram" /> </p>
      <p>Заметка <input v-model="getContactData().note" class="form-control" placeholder="заметка" /> </p>
      <p>День рождения <input v-model="getContactData().birthday" class="form-control" type="date" placeholder="день рождения" /> </p>
      <button 
      class="btn btn-primary"
      @click="editContact(getContactData().name, getContactData().surname, getContactData().main, getContactData().work,
      getContactData().additional, getContactData().personal, getContactData().working, getContactData().another,
      getContactData().telegram, getContactData().whatsapp, getContactData().vk, getContactData().instagram, 
      getContactData().note, getContactData().birthday)"
      >
      сохранить
      </button>
    </form>
     
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
        
    const getContactData = () => {
		  if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
          let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
          let index = contactsArray.map((object:any) => object.id).indexOf(id)
          return contactsArray[index]
          }
        }
      return []
      } 

    return {
      getContactData,
    }  

  }

});

</script>