<template>
    <!-- this class contains an array of classes -->
    <!-- We set class based on whether the reminder 
    is true or not. Lastly we add class "task" by default-->
    <div @dblclick="$emit('toggle-reminder')" :class="[task.reminder ? 'reminder' : '',
    'task']">
        <h3>{{task.text}} 
        <i @click="$emit('delete-task')" class="uil uil-times"></i>
        </h3>
        <p>{{task.day}} </p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        // Initializing task as an object since we'll
        // print individual object from the array iteratively
        task: Object,
    },
}
</script>

<style scoped>
    .uil {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>