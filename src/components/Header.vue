<template>
    <header>
        <h1>{{ title }}</h1>

        <!--Step3: Adding values to the properties in Button -->
        <Button v-if="homePage"
        @btn-click="$emit('btn-click')" 
        :text="(showAddTask)? 'Close': 'Add Task' "
        :color="(showAddTask)? 'Red': 'green'"/>
    </header>
</template>

<script>
import Button from "./Button"

export default {
    // NAME //
    name:"Header",
    // Properties //
    props: {
      title: String,
      showAddTask: Boolean,
    },
    // Components //
    components:{
        Button
    },
    computed:{
        homePage(){
            if(this.$route.path === '/'){
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>