import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const root = document.createElement('div')
  //   root.className = 'root'
  //   root.classList.add('hang')
  //   document.body.appendChild(root)
  //   new Vue({
  //     render: h => h(HelloWorld, {
  //       props: {
  //         msg: 'hang yi da'
  //       }
  //     })
  //   }).$mount('.root')
  //   console.log(document.body.getElementsByClassName('hello').length)
  //   expect(document.body.getElementsByClassName('hello').length).toBe(1)

  // })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // shallowMount 浅渲染  适用于单元测试
    // mount 适用于集成测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  test('renders props.msg when passed2', () => {
    const msg = 'new message'
    // shallowMount 浅渲染  适用于单元测试
    // mount 适用于集成测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    console.log(wrapper.props('msg'))
    expect(wrapper.props('msg')).toMatch(msg)
    // console.log(wrapper.find('.hello').exists())
    // console.log(wrapper.find('.hello'))
    // console.log(wrapper.findAll('.hello'))
    expect(wrapper.findAll('.hello').length).toBe(2)
    wrapper.setProps({ msg: 'msg' })
    console.log(wrapper.props('msg'))
    expect(wrapper.props('msg')).toMatch('msg')
  })
  it('组件渲染正常', () => {
    const msg = 'new message'
    // shallowMount 浅渲染  适用于单元测试
    // mount 适用于集成测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatchSnapshot()
    // 测试组件元素是否发生变化 如果发生变化可以及时查看  按u更新变化的结果
  })
})
