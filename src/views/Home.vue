<template>
    <AddTask v-if="showAddTask" @add-task="addTask" />
    <!-- assigning array tasks[] to the props tasks
    of the component Tasks -->
    <Tasks @toggle-reminder="toggleReminder"
     @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
export default {
    name: 'Home',
    props:{
        showAddTask:Boolean
    },
    components:{
        Tasks,
        AddTask,
    },
       data(){
      return {
        tasks: [],
      }
    },
        methods:{
      // fetchTasks() will fetch data from a fake json server.
      // api is a proxy(short-form) of the actual
      // http url created in vue.config.js 
      async fetchTasks(){
        const res = await fetch("api/tasks")
        const data = await res.json()
        return data
      },
      // fetchTask(id) will fetch data of a specific 
      // index from the arguement id from 
      // the list/array tasks[] in the json server
       async fetchTask(id){
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
      },
      async addTask(newTask){
        // this.tasks = [...this.tasks, newTask]
        // this.tasks.push(newTask)
        const res = await fetch('api/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(newTask)
        })
        const data = await res.json()
        this.tasks.push(data) 
      },

      async deleteTask(id){
        // this.tasks.filter() will iterate the array
        // this.tasks refering on task and will keep only
        // the elements/objects in the array where 
        // task.id != id passed on to deleteTask()
        if(confirm("Are you sure?")){
            const res= await fetch(`api/tasks/${id}`,{
              method: 'DELETE',
            });
            // if status is a success(200), it filters
            (res.status === 200) ? 
            (this.tasks = this.tasks.filter((task)=>
            task.id !== id)):alert("Error deleting task")
        }  
      },
      async toggleReminder(id){
        // map() iterates through each index in this.tasks
        // referring as task. If task.id = id from arguemnt
        // then the spread operator is 
        // called on task (current index of this.task) which
        // allows us to further change the value of each
        //  of its key. Otherwise the unchanged
        // data is returned (task)
        const taskToToggle = await this.fetchTask(id)
         taskToToggle.reminder = !taskToToggle.reminder
        const res = await fetch(`api/tasks/${id}`,{
          method:'PUT',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify(taskToToggle)
        })
        res.json()
        this.tasks = this.tasks.map((task)=>
        task.id === id ? 
        {...task, reminder: taskToToggle.reminder} : task
        ) 
      },
    },
    // created() is used whenever we need to fetch
    // data from database and store in the data of
    // the component, which, for this is tasks[]
    async created(){
      this.tasks = await this.fetchTasks()
    },
}
</script>