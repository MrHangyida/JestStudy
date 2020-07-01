import { runCallback } from './demo-mock'

test('测试 runCallback', () => {
  // const func = () => {
  //   return 'hello hyd'
  // }
  // expect(runCallback(func)).toBe('hello hyd')
  const func = jest.fn(); //根据 jest mock一个函数，捕获函数的调用
  runCallback(func);
  expect(func.mock.calls[0]).toEqual(['hyd'])
  // runCallback(func);
  // runCallback(func);
  // console.log(func.mock) //func.mock.calls 查看函数调用的次数
  // expect(func.mock.calls.length).toBe(3)
  // expect(func).toBeCalled()
})