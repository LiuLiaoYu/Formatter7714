const regex1 = /{([^{}]*)}/g
const regex2 = /<([^<>]*)>/g

export function wrap(fmt: string, data: any, defaultString = '') {
  let flag = true
  const res = fmt.replace(regex1, (_, token) => {
    if (data[token])
      return data[token]
    flag = false
    return defaultString
  })
  return flag ? res : ''
}

export function wrapFormat(fmt: string, data: any) {
  for (let flag = true; flag;) {
    flag = false
    fmt = fmt.replace(regex2, (_, token) => {
      flag = true
      return wrap(token, data)
    })
  }
  return wrap(fmt, data)
}
