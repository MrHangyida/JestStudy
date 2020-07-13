### jest单元测试(一)
> 通过npm安装jest
1. 书写一个math.js（PS:案例）
```
function add (a, b) {
  return a + b;
}
function minus (a, b) {
  return a - b;
}
function multi (a, b) {
  return a * b;
}
try {
  module.exports = {
    add,
    minus,
    multi
  }
} catch (e) { }
```
2. 再次书写一个math.test.js,引入封装的方法并调用（PS:案例）
```
const math = require('./math');

const { add, minus, multi } = math;

test('测试加法 3+7', () => {
  expect(add(3, 7)).toBe(10);
})
test('测试减法 3-3', () => {
  expect(minus(3, 3)).toBe(0);
})
test('测试乘法 3*7', () => {
  expect(multi(3, 7)).toBe(21);
})
```
> jest语法 test('描述信息',()=>{expect('回调函数').toBe('预期结果')})
> 运行npm run test 查看结果 （npm run test 在page.json里面进行命令设置）
---------------
### jest单元测试(二)
> 查看jest的基础配置 运行npx jest --init 生成jest.config.js文件

> npx jest --coverage 生成测试覆盖率的说明表格并生成一个coverage文件夹（PS:在coverage下面的lcov-report文件下打开一个index.html 查看测试覆盖率）

>> 在jest.config.js里面**coverageDirectory:"coverage"** coverage文件夹命名处理

>> **在page.json里面设置coverage命令**
```
"scripts": {
    "test": "jest",
    "coverage":"jest --coverage"
  }
```
#### jest运用到vue（PS:底层搭建）
1. 由于node.js不能识别es moudle语法 因此需要下载babel进行编译，通过babel把这些语法转译为可以识别的语法 
`
npm i @babel/core @babel/preset-env
`

-------------------
### jest单元测试(三)
> jest中的匹配器
```
test('测试10与10匹配', () => {
  //ToBe 匹配器 matchers
  //类似 ===
  expect(10).toBe(10);
})
test('测试对象与对象内容匹配', () => {
  //toEqual 匹配器 matchers
  const obj = { name: 'hang' }
  expect(obj).toEqual({ name: 'hang' });
})

test('测试null', () => {
  //toEqual 匹配器 matchers
  //null特殊对象
  const obj = null
  expect(obj).toBeNull();
})

test('测试undefined', () => {
  //toBeUndefined 匹配器 matchers
  //null!==undefined
  //undefind 未定义值 null没有该值且打印
  const obj = undefined
  expect(obj).toBeUndefined();
})

test('测试defined', () => {
  //toBeDefined 匹配器 matchers
  //定义值
  const obj = null
  expect(obj).toBeDefined();
})

test('测试true', () => {
  //toBeTruthy 匹配器 matchers
  const flag = 1 || true
  expect(flag).toBeTruthy();
})

test('测试false', () => {
  //toBeFalsy 匹配器 matchers
  const flag = 0 || false
  expect(flag).toBeFalsy();
})

test('测试not', () => {
  //not 匹配器 matchers
  // 非 选择器
  const flag = 1 || true
  expect(flag).not.toBeFalsy();
})

// 数字相关的匹配器

test('测试大于', () => {
  const number = 10
  expect(number).toBeGreaterThan(9);
})

test('测试小于', () => {
  const number = 10
  expect(number).toBeLessThan(11);
})

test('测试大于等于', () => {
  const number = 10
  expect(number).toBeGreaterThanOrEqual(10);
})

test('测试小于等于', () => {
  const number = 10
  expect(number).toBeLessThanOrEqual(10);
})

test('测试小数相加', () => {
  const firstNumber = 0.1
  const secondNumber = 0.2
  expect(firstNumber + secondNumber).toBeCloseTo(0.3);
})

//String

test('测试字符串', () => {
  const str = 'www.baidu.com'
  expect(str).toMatch('www');
  expect(str).toMatch(/www/);
})

// Array

test('测试数组', () => {
  const arr = 'www.baidu.com'.split('.')
  expect(arr).toContain('www');
})

// 异常

const throwError = function () {
  throw new Error('this is a error')
}
test('测试异常', () => {
  // expect(throwError).toThrow();
  expect(throwError).toThrow('this is a error');
})
```
> **在page.json里面设置test监听**
```
"scripts": {
    "test": "jest --watchAll",
    "coverage":"jest --coverage"
  }
```
----------------------------
### jest单元测试(四)
> jest中的命令行
1.  按下f只执行未通过的匹配测试再次按下进行全部匹配测试
2.  o执行变化文件的测试 需要和git配合
3.  t执行你要执行的测试
4.  q结束对代码的监控
5.  enter重新执行 npm run test
6.  p执行某个文件的测试 p模式存在于--watchAll
7.  a相当于--watchAll 存在于--watch