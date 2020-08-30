<template>
  <div class="header">
    <label for="searchInp">ToDolist</label>
     <input type="text" id="searchInp" placeholder="添加ToDo" attr-test="input" name="addAndRemoveText" like="myself" v-model="inputVal" @keypress.enter="addInput" ref="searchInp" />
  </div>
</template>
<script>
export default {
  name: 'Headers',
  props: [],
  data () {
    return {
      inputVal: null
    }
  },
  methods: {
    addInput () {
      if (this.inputVal) {
        this.$emit('add', this.inputVal)
        this.inputVal = ''
        console.log(this.inputVal)
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 50px;
    background: rgba(47,47,47,0.98);
    display: flex;
    justify-content: center;
    align-items: center;
    label{
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      margin-right:40px ;
    }
    input{
      width: 20%;
      height: 24px;
      line-height: 24px;
      outline: none;
      border: 1px solid rgba(47,47,47,0.98);
      border-radius: 5px;
      padding-left: 10px;
    }
  }
</style>
