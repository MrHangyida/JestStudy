//异步引入 axios库
// import { fetchData, fetchDataOne, fetchDataTwo } from './demo'
// import axios from 'axios';
// jest.mock('axios')

// test('fetchDataTwo', (done) => {
//   fetchDataTwo((data) => {
//     expect(data).toEqual({ success: true })
//   })
//   done()
// })

// describe('模块一', () => {
//   beforeAll(() => {
//     console.log('beforeAll')
//   })
//   beforeEach(() => {
//     console.log('beforeEach')
//   })
//   afterEach(() => {
//     console.log('afterEach')
//   })
//   afterAll(() => {
//     console.log('afterAll')
//   })
//   test('fetchDataOne', () => {
//     axios.get.mockResolvedValueOnce({
//       data: "(function(){return '123'}())"
//     })
//     return fetchDataOne().then(res => {
//       expect(eval(res)).toEqual('123')
//     })
//   })
//   test('fetchData', async () => {
//     axios.get.mockResolvedValueOnce({
//       data: "(function(){return '456'}())"
//     })
//     const res = await fetchData()
//     expect(eval(res.data)).toEqual('456')
//   })
// })


// test('fetchData', () => {
//   return fetchData().then(res => {
//     expect(res.data).toEqual({ success: true })
//   })
// })

// test('fetchData__1', async () => {
//   const res = await fetchData();
//   expect(res.data).toEqual({ success: true })
// })

// 在本地模拟数据创建__mocks__文件夹 模拟fetchData  没有真正的发起ajax请求
jest.mock('./demo')    // 进行模拟

// 自动模拟 在jest.config.js automock:true
// jest.unmock('./demo')  // 取消模拟
import { fetchDataOne } from './demo'  //__mock__ 异步函数在本地模拟  模拟文件的
const { getNumber } = jest.requireActual('./demo')

test('__mock__的fetchDataOne ', () => {
  return fetchDataOne().then(res => {
    expect(eval(res.data)).toEqual('123')
  })
})

test('demo的 getNumber', () => {
  expect(getNumber()).toBe(123)
})