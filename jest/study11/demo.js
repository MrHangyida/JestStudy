import axios from 'axios';

export const fetchData = function () {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export const fetchDataOne = function () {
  return axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    return res.data
  })
}

export const fetchDataTwo = function (fn) {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data)
  })
}
export const getNumber = () => {
  return 123
}