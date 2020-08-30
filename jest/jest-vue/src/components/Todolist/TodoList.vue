<template>
  <div class="todolist">
    <Headers></Headers>
    <ToDoBody />
  </div>
</template>

<script>
import Headers from './HtmlDir/Header'
import ToDoBody from './HtmlDir/ToDoBody'
export default {
  name: 'Todolist',
  props: {},
  components: {
    Headers, ToDoBody
  }
}
</script>

<style lang="scss" scoped>
.todolist{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
