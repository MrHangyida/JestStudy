// 深入模拟 除了mocks的另一种写法
// jest.mock('./until',()=>{
//   const Until = jest.fn(() => {
//     console.log('constructor')
//   });
//   Until.prototype.a = jest.fn(() => {
//     console.log('a')
//   })
//   Until.prototype.b = jest.fn(() => {
//     console.log('b')
//   })
//   return Until
// })
jest.mock('./until')
// jest.mock 语法优先执行 自动会跑到首行
// jest.mmock发现until是一个类，会自动把类的构造函数和方法变成 jest.fn()
import Until from './until'
// const Until = jest.fn()
// Until.a = jest.fn()
// Until.b = jest.fn()

// 用来节约性能

import demoFunction from './demo'


//单元测试 只对某个单元进行测试
//集成测试 不但对该单元进行测试而且对其他单元也进行了测试
test('测试 demoFunction a乘法', () => {
  demoFunction()
  expect(Until).toHaveBeenCalled();
  expect(Until.mock.instances[0].a).toHaveBeenCalled();
  expect(Until.mock.instances[0].b).toHaveBeenCalled();
  // console.log(Until.mock)
  // expect(demoFunction(2, 3)).toBe(6)
})

