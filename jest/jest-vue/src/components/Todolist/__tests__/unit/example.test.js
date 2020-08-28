import { shallowMount } from '@vue/test-utils'
import Todolist from '@/components/Todolist/Todolist.vue'
// import Vue from 'vue'

describe('Todolist.vue', () => {
  it('组件渲染正常', () => {
    // shallowMount 浅渲染  适用于单元测试
    // mount 适用于集成测试
    const wrapper = shallowMount(Todolist)
    // expect(wrapper.text()).toMatchSnapshot()
    // 测试组件元素是否发生变化 如果发生变化可以及时查看  按u更新变化的结果
  })
})
