


function parseWrappedExpressionRecursive() {

}


export function parseWrappedExpression(
  sequence: string, startPos: number, leftSymbol: string, rightSymbol: string) {
  const regex = new RegExp(`(${leftSymbol}|${rightSymbol})`, 'g')
  let res = undefined
  res = regex.exec(sequence)
  res = regex.exec(sequence)
  // const res = regex.exec("12312312")

  console.log(res)

  startPos += leftSymbol.length
  while (true) {

  }
}


parseWrappedExpression("{123:123}", 0, "{", "}")

// console.log()