import { readFileSync } from 'node:fs'




const txt = readFileSync("I:/Project/@LiuLiaoYu/Formatter7714/schemas/input.txt", { encoding: "utf8" })




const items = txt.trimEnd().split('\n')
// console.log(items.length)
// console.log(items[16])



function log(obj) {
  console.log(JSON.stringify(obj))
}




class ReferenceParser {
  constructor() { }
  parse(referenceString: string) {
    let s = referenceString.trim()

    const y = this.parseIndex(s)
    log(y)

    // const indexPattern = s.match(/^\[(\d+)\]/)
    // console.log(indexPattern)
    // if (indexPattern) {
    // const index = indexPattern[1]
    // console.log(index)
    // }
    // s = s.match()


    if (s.indexOf('.http') != -1) {
      // console.log()
      s = s.slice(0, s.indexOf('.http'))
    }
    console.log(s)
    console.log(s.split('.'))
    // const hasUrl = s.match(/http.*(?=\.(?:$|DOI))/)
    // const hasDoi = s.match(/DOI:.*(?=(\.$))/)
    // console.log(hasUrl)
    // console.log(hasDoi)

    return {
    }
  }

  parseName(field: string) {
    field.split(',')
  }

  parseIndex(s: string) {
    const indexPattern = s.match(/^\[(\d+)\]/)
    const value = Number(indexPattern?.[1])
    const pattern = indexPattern?.[0]

    const start = indexPattern?.index ?? 0
    const end = start + (pattern?.length ?? 0)

    return {
      value,
      pattern,
      span: [start, end]
      // span: [0, indexPattern.index + indexPattern[0].length]
    }
  }
  parseUrlAndDoi(field: string) {
    return {
      span: []
    }
  }
  parsePublicationSection() {

  }
}


const parser = new ReferenceParser()


// const res = parser.parse(items[0].slice(4))

for (let i in items) {
  const res = parser.parse(items[i].slice(4))
  // console.dir(res)
}





