<template>
    <!--Step2: Adding propertie(s) in the template -->
    <!-- @click is an alternative to v-on:click -->
    <button @click="$emit('btn-click')" :style="{ background: color }"
     class="btn">{{text}}</button>
</template>

<script>
export default {
    // Name //
    name: 'Button',
    // Properties //
    props:{
        //Step1: Defining properties of the component..
        text: String,
        color: String
    },
    // Methods //
    methods:{
    
    },
}
</script>