import Until from './until'

describe('until 模块', () => {
    let until = null
    beforeAll(() => {
        console.log('beforeAll')
    })
    beforeEach(() => {
        until = new Until()
    })
    afterEach(() => {
        console.log('afterEach')
    })
    afterAll(() => {
        console.log('afterAll')
    })
    test('测试 a方法', () => {
        expect(until.a(2, 3)).toBe(6)
    })
})