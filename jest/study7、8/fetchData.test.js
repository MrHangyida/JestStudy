import Counter from './fetchData'
// describe 用于分组的 也可以用文件拆分 类似于划分模块
// 每一个describe都有 beforeAll beforeEach afterEach afterAll
// 每次执行的时候 都是先执行外部的beforeAll（如果还有内部）再执行内部的beforeAll其次就是就是beforeEach afterEach afterAll依次执行
// test.only只检测某一个测试用例
// 准备型代码放到声明周期里面
describe('测试Counter的代码', () => {
  let counter = null

  beforeAll(() => {
    console.log('beforeAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter()

  })
  afterEach(() => {
    console.log('afterEach')
  })
  afterAll(() => {
    console.log('afterAll')
  })
  describe('测试 加法相关的', () => {
    beforeEach(() => {
      console.log('beforeach test add')
    })

    test('测试 counter addOne 方法', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    });
    test('测试 counter addTwo 方法', () => {
      counter.addTwo()
      expect(counter.number).toBe(2)
    })
  })
  describe('测试 减法相关的', () => {
    test('测试 counter minuseOne 方法', () => {
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
    test('测试 counter minuseTwo 方法', () => {
      counter.minusTwo()
      expect(counter.number).toBe(-2)
    })
  })

})