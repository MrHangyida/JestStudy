<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todolist">todolist</router-link> -->
      <!-- <p @click="goHome">Home</p>
      <p @click="goAbout">About</p>
      <p @click="goTodo">todolist</p> -->
    <!-- </div> -->
    <!-- <router-view/> -->
    <TodoList></TodoList>
  </div>
</template>
<script>
import TodoList from './components/Todolist/TodoList'
export default {
  components: {
    TodoList
  },
  data () {
    return {

    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goAbout () {
      this.$router.push('/about')
    },
    goTodo () {
      this.$router.push('/todolist')
    }
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding: 0;
  font-weight: normal;
  list-style: none;
  text-decoration: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
