<template>

        <div v-for="dataItem in items" v-bind:key="dataItem" class="div">
          <!-- we don't give the slot a name, because it's the default slot. that means name='default' -->
          <!--  use v-bind to access the item form the parent -->
          <slot v-bind:item="dataItem">
            {{item}}
          </slot>
        </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "listbox",
    props:{
        items:{type: []}
    }
})

</script>


<style scoped>
  .div:hover{
      color: red;
      background: royalblue;
  }
</style>

