import { readFileSync } from 'node:fs'
import YAML from 'yaml'

const braceRegex = /{(?! )([^{}]*)(?<! )}/g
const angleRegex = /<(?! )([^<>]*)(?<! )>/g

// {default}

const regex1 = /{([^{}]*)}/g
const regex2 = /<([^<>]*)>/g

const txt = readFileSync('../data/fmt.yaml', { encoding: 'utf8' })
const dat = YAML.parse(txt)

// console.log(dat["专著析出文献"].join(""))

// console.log("123")

// &
'<{a}{b}>'
// condition
'<{a}<{b}>>'
// |
'<{a}><{b}>'
// oneOf
// value different ?

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
  if (!fmt.includes('{'))
    return fmt

  for (let flag = true; flag;) {
    flag = false
    fmt = fmt.replace(regex2, (_, token) => {
      flag = true
      return wrap(token, data)
    })
  }
  return wrap(fmt, data)
}

export class FormatParser {
  keys: string[]
  constructor(template: string | string[]) {
    if (Array.isArray(template))
      template = template.join('')

    const res = template.matchAll(braceRegex)

    this.keys = Array.from(res).map(it => it[1])
    console.log(this.keys)
    // for (let it of res) {
    // console.log(it[1])
    // }
    // console.log(res)
    // while (true) {
    // const res = braceRegex.exec(template)
    // if (res === null) break
    // console.log(res)
    // }
    // const f = template.matchAll(braceRegex)
    // console.log(f)
    // for (let i of f) {

    // console.log(i)
    // }
  }

  validate(template: string) {

  }

  format(data: any) {

  }
}

'{ {a} }'
'{{a}}'
const fmt = new FormatParser(dat['专著'])
