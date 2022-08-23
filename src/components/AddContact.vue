<template>
  <div class="ContactAdd">
    <form @submit.prevent="myMethod">
      <p> <input v-model="state.name" placeholder="введите имя" /></p>
      <p><input v-model="state.surname" placeholder="введите фамилию" /></p>
      <p><input v-model="state.mobile" placeholder="введите номер" /> </p>
      <p><input v-model="state.email.personal" placeholder="введите email" /> </p>
      <button @click="addContact(state.name, state.surname, state.mobile, state.email.personal)">
      добавить контакт
      </button>
    </form>
     
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const addContact = (name:string, surname:string, mobile:number, email: string, photo:img) => {
        let contacts = []
        if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
            contacts = JSON.parse(localStorage.getItem('contacts')|| '{}')
            }
            contacts.push({
            name: name,
            surname: surname,
            mobile: mobile,
            email:email,
            photo: photo,
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
          mobile: '',
          work: '',
          additional: '',
          },
        email: {
        personal: '',
        work: '',
        additional: '',
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
     
        return {
            addContact,
            state,
         }
    
    }
});


</script>