import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Todolist/HtmlDir/Header.vue'
import Todolist from '@/components/Todolist/Todolist.vue'

describe('ToDoBody.vue', () => {
    it('tolist 初始化时，todo 应该为空', () => {
        const wrapper = shallowMount(Todolist)
        const untodo = wrapper.vm.$data.todo
        expect(untodo).toEqual([])
    })

    it('tolist 监听 header add 事件 调用addToDoItem', () => {
        const wrapper = shallowMount(Todolist)
        const header = wrapper.findComponent(Header)
        header.vm.$emit('add', { val: 'hello world', ing: false })
        const untodo = wrapper.vm.$data.todo
        expect(untodo).toEqual([{ val: 'hello world', ing: false }])
    })
})