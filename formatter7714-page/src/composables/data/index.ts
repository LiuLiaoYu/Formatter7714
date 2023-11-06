import example from './example.json'
import fmt7714 from './formatter7714.json'

const intoOptions = (arr: [string, string][]) => arr.map(([label, value]) => ({ label, value }))
const joinNameAndId = (map: any) => Object.entries(map).map(([k, v]) => [`${k}(${v})`, v] as [string, string])

export const options: { [property: string]: any } = {
  著录格式类型: intoOptions(fmt7714.著录格式.map(value => [value, value])),
  文献类型标识: intoOptions(joinNameAndId(fmt7714.文献类型)),
  文献载体标识: [{ label: '(空)', value: null, style: 'color: grey' }, ...intoOptions(joinNameAndId(fmt7714.电子资源载体))],
}
export const optionItemPlaceholder: { [property: string]: string } = {
  文献载体标识: '文献载体(空)',
  文献类型标识: '文献类型',
}
export const patterns: { [property: string]: string } = {}
for (const [key, value] of Object.entries(fmt7714.著录项目)) patterns[key] = value.join('')

export const publicationSection = ['出版地', '出版者', '出版年']

export {
  fmt7714,
  example,
}
