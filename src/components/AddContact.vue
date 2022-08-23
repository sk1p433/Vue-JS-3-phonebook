<template>
  <div class="ContactAdd">
    <form @submit.prevent="onSubmit">
      
      <p>Загрузить фото <input type="file" accept="image/*" @change="uploadImage"></p>
      <p>Имя <input v-model="state.name" placeholder="введите имя" /></p>
      <p>Фамилия <input v-model="state.surname" placeholder="введите фамилию" /></p>
      <p>Номер <input v-model="state.phone.main" placeholder="введите мобильный номер" /> </p>
      <p>Рабочий номер <input v-model="state.phone.work" placeholder="введите рабочий номер" /> </p>
      <p>Дополнительный номер <input v-model="state.phone.additional" placeholder="введите дополнительный номер" /> </p>
      <p>Личный email <input v-model="state.email.personal" placeholder="введите email" /> </p>
      <p>Рабочий email <input v-model="state.email.working" placeholder="введите рабочий email" /> </p>
      <p>Дополнительный email <input v-model="state.email.another" placeholder="дополнительный email" /> </p>
      <p>Telegram <input v-model="state.social.telegram" placeholder="telegram" /> </p>
      <p>Whatsapp <input v-model="state.social.whatsapp" placeholder="whatsapp" /> </p>
      <p>VK <input v-model="state.social.vk" placeholder="vk" /> </p>
      <p>Instagram <input v-model="state.social.instagram" placeholder="instagram" /> </p>
      <p>Заметка <input v-model="state.social.note" placeholder="заметка" /> </p>
      <p>День рождения <input v-model="state.social.birthday" type="date" placeholder="день рождения" /> </p>
      <button 
      @click="addContact(state.name, state.surname, state.phone.main, state.phone.work,
      state.phone.additional, state.email.personal, state.email.working, state.email.another,
      state.social.telegram, state.social.whatsapp, state.social.vk, state.social.instagram, state.social.note, state.social.birthday, state.photo)">
      добавить контакт
      </button>
    </form>
     
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const addContact = (name:string, surname:string, main:number, work:number, 
        additional:number, personal:string, working:string, another:string,
        telegram:string, whatsapp:string, vk:string, instagram:string, note:string, birthday:any, photo:any ) => {
        let contacts = []
        if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
            contacts = JSON.parse(localStorage.getItem('contacts')|| '{}')
            }
            contacts.push({
            name: name,
            surname: surname,
            main: main,
            work: work,
            additional:additional,
            personal:personal,
            working: working,
            another: another,
            telegram: telegram,
            whatsapp: whatsapp,
            vk: vk,
            instagram: instagram,
            note: note,
            birthday:birthday,
            photo:photo,
            })
            localStorage.setItem('contacts', JSON.stringify(contacts))
            }
        console.log(localStorage)    
        }

        let state = reactive({
          id: '',
          photo: '',
          name: '',
          surname: '',
          phone: {
          main: '',
          work: '',
          additional: '',
          },
        email: {
        personal: '',
        working: '',
        another: '',
        },
        social: {
            telegram: '',
            whatsapp: '',
            vk: '',
            instagram: '',
        },
            birthday: '',
            note: '',
    })

    const uploadImage = (e: any) => {
      if (e.target.files[0].size > 1000000) return
      let reader = new FileReader()
      reader.onload = (e) => {
        state.photo = reader.result as string
      }
      reader.readAsDataURL(e.target.files[0])
    }
     
        return {
            addContact,
            state,
            uploadImage,
         }
    
    }
});


</script>