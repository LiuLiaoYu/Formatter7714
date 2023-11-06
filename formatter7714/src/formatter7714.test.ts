import { expect, test } from 'vitest'
import { wrapFormat } from "./formatter7714"
import formats from "../formats.json" assert { type: "json" }
import example from "../example.json" assert { type: "json" }


const fmt = formats["连续出版物"]
const dat = example["连续出版物"][0]
const ans = example["连续出版物"][0]["原例"]

test('example test', () => {
  expect(wrapFormat(fmt, dat)).toBe(ans)
})