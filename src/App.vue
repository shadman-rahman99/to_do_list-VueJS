<template>
  <div class="container">
    <Header :showAddTask="showAddTask"
     @btn-click="toggleAddTask" title="Task Tracker"/>

    <!-- <router-view> links landing page to all other
    vue components in the views folder and display its
    templates based on the URL. E.g the landing page has 
    the URL '/', since Home.Vue has its path set to '/'
    in index.js it will show its template whenever we're
    on the landing page , that is http://localhost:8080/-->
    <!-- we're sending showAddTask to all of the Vue
    components in view folder. From there we catch this
    data in Home.vue by declaring showAddTask in its props  -->
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer/>
  </div>
</template>

<script>
// importing Header.vue from components folder
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // Registering components here...
     Header,
     Footer,
  },
    // Data //
    data(){
      return {
        showAddTask:false,
      }
    },
    methods:{
      toggleAddTask(){
        this.showAddTask = !this.showAddTask
      },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
