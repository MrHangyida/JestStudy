import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Todolist/HtmlDir/Header.vue'
// import Vue from 'vue'

describe('Header.vue', () => {
    it('header 包含 input框', () => {
        const wrapper = shallowMount(Header)
        const input = wrapper.find('[attr-test="input"]')
        expect(input.exists()).toBe(true)
    })

    it('header input框 初始化为空', () => {
        const wrapper = shallowMount(Header)
        const inputValue = wrapper.vm.$data.inputVal
            // expect(inputValue).toBe('')
        expect(inputValue).toBeNull()
    })

    it('header input框 inputVal变化 数据也跟着变', () => {
        const wrapper = shallowMount(Header)
        const input = wrapper.find('[attr-test="input"]')
        input.setValue('hello world')
        const inputValue = wrapper.vm.$data.inputVal
            // expect(inputValue).toBe('')
        expect(inputValue).toBe('hello world')
    })

    it('header input框 按回车 无内容时', () => {
        const wrapper = shallowMount(Header)
        const input = wrapper.find('[attr-test="input"]')
        input.setValue('')
        input.trigger('keypress.enter')
            // 确认事件被触发了用 emitted
        expect(wrapper.emitted().add).toBeFalsy()
    })

    it('header input框 按回车 有内容时 触发反应 ,同时清空inputVal', () => {
        const wrapper = shallowMount(Header)
        const input = wrapper.find('[attr-test="input"]')
        input.setValue('hello world')
        input.trigger('keypress.enter')
            // 确认事件被触发了用 emitted
        expect(wrapper.emitted().add).toBeTruthy()
        input.setValue('')
        expect(wrapper.vm.$data.inputVal).toBe('')
    })
})