import timer from './timer'
import { timers } from './timer'
jest.useFakeTimers();

// 不用jest.useFakeTimers();
// test('timer 测试', (done) => {
//   timer(() => {
//     expect(2).toBe(2)
//     done()
//   })
// })

// test.only('timers 测试', (done) => {
//   timers(() => {
//     expect(2).toBe(2)
//     done()
//   })
// })

//用jest.useFakeTimers();

// jest.useFakeTimers()和jest.runAllTimers()匹配使用成双成对 立即执行;
test.only('timers 测试', () => {
  const JsetFunc = jest.fn()
  timers(JsetFunc)
  // 执行所有的timers
  // jest.runAllTimers();
  // 只执行一个timers 处于队列中的timers
  // jest.runOnlyPendingTimers()
  // 方法三最优  advanceTimersByTime 时间快进 (ps:推荐使用)
  jest.advanceTimersByTime(6000)
  //toHaveBeenCalledTimes被调用的次数
  expect(JsetFunc).toHaveBeenCalledTimes(2)
})