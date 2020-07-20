const Until = jest.fn(() => {
  console.log('constructor')
});
Until.prototype.a = jest.fn(() => {
  console.log('a')
})
Until.prototype.b = jest.fn(() => {
  console.log('b')
})

export default Until