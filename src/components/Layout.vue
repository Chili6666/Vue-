<template>
    <div>
        <div>
            <slot name="header"/> 
        </div>
        <div>
            <slot>this is the container</slot>
        </div>
        <div>
            <slot name="footer"/>
        </div>
    </div>
</template>


<script lang="ts">

import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; 
import { defineComponent } from 'vue'

export default defineComponent({
    components:{
        Header,
        Footer
    },
    setup() {
        
    },
})
</script>
