import { generateConfig, generateAuthorConfig } from "./demo-snapShot";
// snapShot 用来测试配置文件、ui组件
// toMatchSnapshot 生成一个文件夹 所有快照存在文件夹下
// test('测试 generateConfig 函数', () => {
//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date) //针对动态变化
//   });
// })

// test('测试 generateAuthorConfig 函数', () => {
//   expect(generateAuthorConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// })

// w唤醒菜单
// u全局更新快件snapShot
// i逐个模块提示是否更新快件snapShot

// 下载 npm i prettier --save
// toMatchInlineSnapshot 在该文件里面生成快照
test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date) //针对动态变化
    },
    `
    Object {
      "domain": "localhost",
      "hot": true,
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 generateAuthorConfig 函数", () => {
  expect(generateAuthorConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "Author": "hangyida",
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
