import axios from 'axios'

const runCallback = (callback) => {
  // return callback()
  callback('hyd1')
}

const createObject = (classItem) => {
  new classItem()
}

const getData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data)
  })
}
const getDataTwo = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export {
  runCallback,
  createObject,
  getData,
  getDataTwo
}