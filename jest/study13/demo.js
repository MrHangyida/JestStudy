import Until from './until'

const demoFunction = (a, b) => {
  let until = new Until()
  // return until.a(a, b)
  until.a(a)
  until.b(b)
}

export default demoFunction