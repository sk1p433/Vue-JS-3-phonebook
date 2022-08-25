<template>
 <h4>Редактировать контакт</h4>
<div class="d-flex justify-content-center"> 
  <div class="card" :style="{ padding: '10px' }">
    <form @submit.prevent>
      <p>Загрузить фото <input type="file" accept="image/*" @change="uploadImage"></p>
      <p>Имя<input v-model="state.name" class="form-control" placeholder="введите имя" /></p>
      <p>Фамилия <input v-model="state.surname" class="form-control" placeholder="введите фамилию" /></p>
      <p>Номер 
        <input v-model="state.phone.main" 
        class="form-control" 
        v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
        placeholder="введите мобильный номер" /> 
      </p>
      <p>Рабочий номер 
        <input v-model="state.phone.work" 
        class="form-control" 
        v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
        placeholder="введите рабочий номер" />
      </p>
      <p>Дополнительный номер 
        <input v-model="state.phone.additional" 
        class="form-control" 
        v-maska="['# (###) ##-##-##', '# (###) ###-##-##']"
        placeholder="введите дополнительный номер" /> 
      </p>
      <p>Личный email 
        <input v-model="state.email.personal" 
        class="form-control"
        @keydown="checkEmail"
        :rules="emailRules.rules"
        placeholder="введите email" />
      </p>
      <p>Рабочий email 
        <input v-model="state.email.working" 
        class="form-control"
        @keydown="checkEmail"
        :rules="emailRules.rules" 
        placeholder="введите рабочий email" />
      </p>
      <p>Дополнительный email 
        <input v-model="state.email.another" 
        class="form-control"
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
        :style="{ marginLeft: '15px' }"
        @click="editContact(state.name, state.surname, state.phone.main, state.phone.work,
        state.phone.additional, state.email.personal, state.email.working, state.email.another,
        state.social.telegram, state.social.whatsapp, state.social.vk, state.social.instagram, 
        state.note, state.birthday, state.photo)"
        >
        сохранить
      </button>
    </form>
     
  </div>
</div>  

</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
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

    
    const editContact = (name:string, surname:string, main:number, work:number, 
                        additional:number, personal:string, working:string, another:string,
                        telegram:string, whatsapp:string, vk:string, instagram:string, note:string, birthday:any, photo:any) => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('contacts')) {
            let contactsArray = JSON.parse(localStorage.getItem('contacts')|| '{}')
            let index = contactsArray.map((object:any) => object.id).indexOf(id)
            contactsArray[index].name = name
            contactsArray[index].surname = surname
            contactsArray[index].main = main
            contactsArray[index].work = work
            contactsArray[index].additional = additional
            contactsArray[index].personal = personal
            contactsArray[index].working = working
            contactsArray[index].another = another
            contactsArray[index].telegram = telegram
            contactsArray[index].whatsapp = whatsapp
            contactsArray[index].instagram = instagram
            contactsArray[index].note = note
            contactsArray[index].birthday = birthday
            contactsArray[index].photo = photo
            localStorage.setItem('contacts', JSON.stringify(contactsArray))
            }
          router.push({path: '/'})  
          }
    }

    let state = reactive({
          photo: getContactData().photo,
          name: getContactData().name,
          surname: getContactData().surname,
          phone: {
          main: getContactData().main,
          work: getContactData().work,
          additional: getContactData().additional,
          },
        email: {
          personal: getContactData().personal,
          working: getContactData().working,
          another: getContactData().another,
        },
        social: {
          telegram: getContactData().telegram,
          whatsapp: getContactData().whatsapp,
          vk: getContactData().vk,
          instagram: getContactData().instagram,
        },
          birthday: getContactData().birthday,
          note: getContactData().note,
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
      getContactData,
      state,
      editContact,
      uploadImage,
      checkSpelling,
      checkEmail,
      emailRules,
    }  

  }

});

</script>