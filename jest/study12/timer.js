export default (callback) => {
  setTimeout(() => {
    callback()
  }, 3000)
}

export const timers = (callback) => {
  setTimeout(() => {
    callback()
    setTimeout(() => {
      callback()
    }, 3000)
  }, 3000)
}