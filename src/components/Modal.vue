<template>

    <div class="dialog" v-if="show === true" @click="hideModal">
     <div class="content">
        <slot></slot>
     </div>
      
    </div>
  
</template>


<script lang="ts">

export default {
    name: 'modal'
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideModal () {
            this.$emit('update:show', false)
        }

    }
}


</script>

<style scoped>

.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
}

.content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
}

</style>