<template>
  <div class="todolist">
    <Headers @add="addToDoItem"></Headers>
    <ToDoBody :todo='todo'  />
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
  },
  data () {
    return {
      todo: []
    }
  },

  watch: {
    todo: {
      handler: function (val, oldVal) {
        console.log('监听TODO', val)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    addToDoItem (val) {
      const flag = window.localStorage.getItem('todo')
      if (flag) {
        const flagArr = JSON.parse(flag)
        console.log(flagArr, 'add if')
        window.localStorage.setItem('todo', JSON.stringify(flagArr.concat(val)))
        this.todo = JSON.parse(window.localStorage.getItem('todo'))
      } else {
        this.todo.push(val)
        window.localStorage.setItem('todo', JSON.stringify(this.todo))
      }
    }
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
