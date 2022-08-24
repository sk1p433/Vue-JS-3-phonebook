<template>

<div>

   {{ getContact().name }}

</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRoute} from "vue-router";

export default defineComponent({
    
    setup(){
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

    return {
      getContact,
      id,

    }
} 
});

</script>