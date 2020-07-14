export const fetchDataOne = () => {
  return new Promise((resolved, rejects) => {
    resolved({
      data: "(function(){return '123'}())"
    })
  })
}