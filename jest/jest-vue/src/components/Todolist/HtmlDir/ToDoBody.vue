<template>
  <div class="ToDoBody">
    <div class="todolist">
      <div class="todoIng">
        <h3>正在进行中</h3>
        <span>{{this.todoList.length}}</span>
      </div>
      <ol  v-if="todoList.length>0">
        <li v-for="(item,index) in todoList" :key="index">
          <div class="left">
            <input type="checkbox" :data-index="index" :value="index" :checked="item.done"  ref="inp"  @input='changeInput' />
            <span @click="editInput(index)" v-show="!item.flag">{{item.val}}</span>
            <input type="text" class="editInput" :value="item.val" v-show="item.flag"  @blur="editSuccess(index)" ref="editSuccess" autofocus="autofocus"/>
          </div>
          <div class="right">
            <div class="del" @click="delToDo(index)">-</div>
          </div>
        </li>
      </ol>
    </div>
    <div class="todolist">
      <div class="todoIng">
        <h3>已经完成</h3>
        <span>{{this.todoListSuccess.length}}</span>
      </div>
      <ol v-if="todoListSuccess.length>0">
        <li v-for="(item,index) in todoListSuccess" :key="index" class="done">
          <div class="left">
            <input type="checkbox" :data-index="index" :value="index" :checked="item.done"  ref="inp2"  @input='changeInput2' />
            <span>{{item.val}}</span>
          </div>
          <div class="right">
            <div class="del" @click="delToDo2(index)">-</div>
          </div>
        </li>
      </ol>
    </div>
    <div class="authorCopy">
      <!-- &reg; -->
      Copyright &copy; 2020.8.31 杭一达 <span @click="clear">clear列表</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToDoBody',
  // props: ['todo'],
  props: {
    todo: {
      type: Array,
      default: function () {
        return []
      }
    },
    editFlag: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      todoList: [],
      todoListSuccess: [],
      editVal: ''
    }
  },
  watch: {
    todo: {
      handler: function (val, oldVal) {
        this.todoList = val
      },
      deep: true
    }
  },
  created () {
    const flag = window.localStorage.getItem('todo')
    const flag2 = window.localStorage.getItem('todo200')
    if (flag) {
      const flagArr = JSON.parse(flag)
      this.todoList = flagArr
    } else {
      this.todoList = this.todo
    }
    if (flag2) {
      const flagArr = JSON.parse(flag2)
      this.todoListSuccess = flagArr
    } else {
      this.todoListSuccess = []
    }
  },
  methods: {
    changeInput (e) {
      if (e.target.checked) {
        const index = this.$refs.inp[e.target.value].getAttribute('data-index')
        let successItem = []
        successItem = this.todoList.filter((item, ind) => {
          return ind === Number(index)
        })
        this.todoListSuccess.push(successItem[0])
        this.todoListSuccess = this.todoListSuccess.map(item => {
          item.done = true
          return item
        })
        this.todoList.splice(index, 1)
        this.$emit('changeTodo', this.todoList)
        window.localStorage.setItem('todo', JSON.stringify(this.todoList))
        window.localStorage.setItem('todo200', JSON.stringify(this.todoListSuccess))
        e.target.checked = false
      }
    },
    changeInput2 (e) {
      if (!e.target.checked) {
        const index = this.$refs.inp2[e.target.value].getAttribute('data-index')
        let todoItem = []
        todoItem = this.todoListSuccess.filter((item, ind) => {
          return ind === Number(index)
        })
        this.todoListSuccess = this.todoListSuccess.filter((item, ind) => {
          return ind !== Number(index)
        })
        window.localStorage.setItem('todo200', JSON.stringify(this.todoListSuccess))
        this.todoList.push(todoItem[0])
        this.todoList = this.todoList.map(item => {
          item.done = false
          return item
        })
        this.$emit('changeTodo', this.todoList)
        window.localStorage.setItem('todo', JSON.stringify(this.todoList))
        e.target.checked = true
      }
    },
    delToDo (index) {
      // this.todoList.splice(index, 1)
      this.todoList = this.todoList.filter((item, ind) => {
        return ind !== index
      })
      this.$emit('changeTodo', this.todoList)
      window.localStorage.setItem('todo', JSON.stringify(this.todoList))
    },
    delToDo2 (index) {
      this.todoListSuccess = this.todoListSuccess.filter((item, ind) => {
        return ind !== index
      })
      window.localStorage.setItem('todo200', JSON.stringify(this.todoListSuccess))
    },
    editInput (index) {
      this.todoList[index].flag = !this.todoList[index].flag
      this.$nextTick(() => {
        this.$refs.editSuccess[index].focus()
      })
    },
    editSuccess (index) {
      this.todoList[index].flag = false
      this.todoList[index].val = this.$refs.editSuccess[index].value
      this.$emit('changeTodo', this.todoList)
      window.localStorage.setItem('todo', JSON.stringify(this.todoList))
    },
    clear () {
      // window.localStorage.clear()
      this.todoList = []
      this.todoListSuccess = []
      this.$emit('changeTodo', this.todoList)
      window.localStorage.removeItem('todo')
      window.localStorage.removeItem('todo200')
    }
  }
}
</script>
<style lang="scss" scoped>
.ToDoBody {
  width: 100%;
  flex: 1;
  background: #cdcdcd;
  .todolist {
    width: 600px;
    margin: 0 auto;
    > .todoIng {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      > h3 {
        font-weight: bold;
        font-size: 28px;
      }
      > span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: #666;
        background: #fff;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        line-height: 22px;
        font-weight: bold;
        cursor: pointer;
      }
      > span:hover {
        color: red;
      }
    }
    > ol {
      width: 100%;
      > li {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: 5px;
        border-radius: 5px;
        cursor: pointer;
        .left {
          height: 22px;
          display: flex;
          align-items: center;
          flex:1;
          > input {
             height: 22px;
            width: 22px;
            border: 1px solid #ccc;
            outline: none;
            margin-right: 10px;
          }
          >span{
            flex: 1;
          }
          >input.editInput{
            flex:1;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 2px;
            padding-left: 10px;
          }
        }
        .right{
          width: 22px;
          .del{
            width: 22px;
            height: 22px;
            text-align: center;
            line-height: 18px;
            border-radius: 50%;
            border: 2px solid #ccc;
            color: red;
            font-size: 32px;
          }
        }
      }
      > li:last-child {
        margin-bottom: 0;
      }
      > li:hover:nth-child(odd) {
        color: red;
      }
      >li.done{
        background: rgb(241, 233, 233);
        opacity: .6;
      }
    }
  }
  .authorCopy{
    width:100%;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #666;
    >span{
      color: red;
      cursor: pointer;
    }
  }
}
</style>
