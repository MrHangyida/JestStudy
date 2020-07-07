import { runCallback, createObject, getData, getDataTwo } from './demo-mock'
// 在这里引入axios 正常接口处理异步请求会失效 如果不模拟请注释掉
import axios from 'axios'
jest.mock('axios')

// 1、捕获函数的调用和返回结果，以及this和调用顺序
// 2、他可以让我们自由的设置返回结果
// 3、改变函数的内部实现

describe('模块一', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
  })
  afterEach(() => {
    console.log('afterEach')
  })
  afterAll(() => {
    console.log('afterAll')
  })
  test('getData 返回结果为 {success:true}', (done) => {
    getData((data) => {
      expect(data).toEqual({ success: true })
    })
    done()
  })
  test.only('测试 runCallback', () => {
    // const func = () => {
    //   return 'hello hyd'
    // }
    // expect(runCallback(func)).toBe('hello hyd')
    // 返回固定结果1
    // func.mockImplementation(()=>{
    //   return '456'
    // }) //等价于下面的函数
    // const func = jest.fn(() => {
    //   return '456'
    // }); //根据 jest mock一个函数，捕获函数的调用
    const func = jest.fn();
    // 返回固定结果2
    func.mockReturnValue('789')
    // 返回自己定义的结果 自由设置返回结果
    // func.mockImplementationOnce(()=>{
    //   return 'dell'
    // }) 
    // 类似于mockReturnValueOnce但是其功能比之强大 可以在里面做一些逻辑操作
    // func.mockReturnValueOnce('dell')
    // func.mockReturnValueOnce('ios')
    // func.mockReturnValueOnce('lenovo')
    runCallback(func);
    // expect(func.mock.calls[0]).toEqual(['hyd'])
    runCallback(func);
    runCallback(func);
    console.log(func.mock)
    //func.mock.calls 查看函数调用的次数
    expect(func.mock.calls.length).toBe(3) //像这种语句 expect叫做断言
    expect(func.mock.results[0].value).toBe('789')
    expect(func).toBeCalled()  //指的是被调用的次数
  })

  test('测试 createObject', () => {
    const func = jest.fn();
    createObject(func)
    console.log(func.mock)
  })

  test('测试 getDataTwo', async () => {
    const res = await getDataTwo()
    expect(res.data).toEqual({ success: true })
  })

  test('测试 getDataTwo1', async () => {
    await expect(getDataTwo()).resolves.toMatchObject({ data: { success: true } })
  })

  test('测试 getDataTwo2', async () => {
    await getDataTwo().then(res => {
      expect(res.data).toEqual({ success: true })
    })
  })

  test('测试 getDataTwo3', async () => {
    // mock 第三个用处是改变函数的内部实现
    // axios.get.mockResolvedValue({ data: 'hello' })
    axios.get.mockResolvedValueOnce({ data: 'hello' })
    axios.get.mockResolvedValueOnce({ data: 'world' })
    axios.get.mockResolvedValueOnce('world')
    axios.get.mockResolvedValueOnce({ data: 'world' })
    const res = await getDataTwo()
    const res1 = await getDataTwo()
    const res2 = await getDataTwo()
    const res3 = await getDataTwo()
    expect(res.data).toBe('hello')
    expect(res1.data).toBe('world')
    expect(res2).toBe('world')
    expect(res3).toEqual({ data: 'world' })
  })
})



