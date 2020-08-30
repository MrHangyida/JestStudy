import { shallowMount } from '@vue/test-utils'
import ToDoBody from '@/components/Todolist/HtmlDir/todobody.vue'

discribe('ToDoBody.vue', () => {
    it('tolist 初始化时，todo 应该为空', () => {
        const wrapper = shallowMount(ToDoBody)
    })
})