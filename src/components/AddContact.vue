<template>
<h4>Добавить контакт</h4>
<div class="d-flex justify-content-center"> 
  <div class="card" :style="{ padding: '10px' }">
    <form @submit.prevent>
      <p>Загрузить фото <input type="file" accept="image/*" @change="uploadImage"></p>
      Имя<input v-model="state.name" class="form-control" placeholder="введите имя" />
      <p>Фамилия <input v-model="state.surname" class="form-control" placeholder="введите фамилию" /></p>
      <p>Сотовый телефон 
        <input 
        v-model="state.phone.main" 
        class="form-control" 
        v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']" 
        placeholder="введите мобильный номер" />
      </p>
      <p>Рабочий телефон 
        <input v-model="state.phone.work" 
        class="form-control" 
        v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']" 
        placeholder="введите рабочий номер" />
      </p>
      <p>Дополнительный телефон 
        <input v-model="state.phone.additional" 
        class="form-control" 
        v-maska="['# (###) ##-##-##', '# (###) ###-##-##']" 
        placeholder="введите дополнительный номер" /> 
      </p>
      <p>Личный email 
        <input v-model="state.email.personal" 
        class="form-control" 
        type="email"
        @keydown="checkEmail"
        :rules="emailRules.rules"
        placeholder="введите email" />
      </p>
      <p>Рабочий email 
        <input v-model="state.email.working" 
        class="form-control" 
        type="email"
        @keydown="checkEmail"
        :rules="emailRules.rules"
        placeholder="введите рабочий email" /> 
      </p>
      <p>Дополнительный email 
        <input v-model="state.email.another" 
        class="form-control" 
        type="email"
        @keydown="checkEmail"
        :rules="emailRules.rules"
        placeholder="дополнительный email" /> 
      </p>
      <p>Telegram <input v-model="state.social.telegram" class="form-control" placeholder="telegram" /> </p>
      <p>Whatsapp <input v-model="state.social.whatsapp" class="form-control" placeholder="whatsapp" /> </p>
      <p>VK <input v-model="state.social.vk" class="form-control" placeholder="vk" /> </p>
      <p>Instagram <input v-model="state.social.instagram" class="form-control" placeholder="instagram" /> </p>
      <p>Заметка <input v-model="state.note" class="form-control" placeholder="заметка" /> </p>
      <p>День рождения <input v-model="state.birthday" class="form-control" type="date" placeholder="день рождения" /> </p>
      <button 
        @click="$router.push('/')"
        class="btn btn-outline-danger" 
        :style="{ marginRight: '15px' }">
        Отменить
      </button>
      <button 
      class="btn btn-outline-success"
      @click="addContact(state.name, state.surname, state.phone.main, state.phone.work,
      state.phone.additional, state.email.personal, state.email.working, state.email.another,
      state.social.telegram, state.social.whatsapp, state.social.vk, state.social.instagram, state.note, state.birthday, state.photo)">
      Cохранить
      </button>
    </form>
     
  </div>
</div>  
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from 'uuid';


export default defineComponent({
    setup() {

        const router = useRouter()

        const addContact = (name:string, surname:string, main:number, work:number, 
        additional:number, personal:string, working:string, another:string,
        telegram:string, whatsapp:string, vk:string, instagram:string, note:string, birthday:any, photo:any ) => {
        let contacts = []
        if (typeof window !=="undefined") {
            if (localStorage.getItem('contacts')) {
            contacts = JSON.parse(localStorage.getItem('contacts')|| '{}')
            }
            if (name.length==0) { alert('Вы не можете создать контакт без имени')}
            else {
            contacts.push({
            id: uuidv4(),
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
            router.push({path: '/'})
            }
          }
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
      reader.onload = () => {
        state.photo = reader.result as string
      }
      reader.readAsDataURL(e.target.files[0])
    }

    const checkSpelling = (value: string) => {
        const regex = /[а-яА-Яё]/
        return !value.match(regex)
    }

    const checkEmail = (e: any) => {
      if (!checkSpelling(e.key)) {
        e.preventDefault()
      }
    }
    
    const emailRules = {rules: 
          [(v: any) => !v ||
          !v.length ||
          /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(v)
          ]
    }
                 
    return {
        addContact,
        state,
        uploadImage,
        checkEmail,
        emailRules,
    }
    
    }
});


</script>

<style scoped>

</style>