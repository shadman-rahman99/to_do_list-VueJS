<template>
    <!-- v-for is used as for loop -->
    <!-- Here we print all the individual task from
    the List/Array of tasks defined in props -->
    <!-- :key is used as a reference to iterate on -->
    <div :key="task.id" v-for="task in tasks" >
        <Task @toggle-reminder="$emit('toggle-reminder',
        task.id)"
         @delete-task="$emit('delete-task',task.id)" :task="task" />
    </div>
</template>

<script>
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        tasks: Array
    },
    components:{
        Task,
    },
    // Since Tasks.vue is not a reciever/sender but
    // bride, it has to declare the event under emits.
    // Here, Sender: Task.vue & Reciever: App.vue 
    emits:['delete-task','toggle-reminder'],
}
</script>