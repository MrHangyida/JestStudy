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
