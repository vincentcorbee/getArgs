import getValue from '../get-value/get-value'
import { regExp } from '../constants'
import { ParsedArgs } from '../types'

const strip = (key: string, reg: RegExp) =>  key.replace(reg, '')
const test = (key: string, reg: RegExp) => reg.test(key)

export const getArgs = (delim = '-', args: string[] | string = process.argv.slice(2)): ParsedArgs => {
  args = Array.isArray(args) ? args : args.split(' ')

  let ch = 1

  const parsedArgs: ParsedArgs = {}
  const regValue = new RegExp(`^[^${delim}]`)
  const regKey = new RegExp(`^${delim}`)

  for (let i = 0, l = args.length; i < l; i += ch) {
    if (!test(args[i], regKey) || test(args[i + 1], regKey)) {
      parsedArgs[strip(args[i], regKey)] = true

      ch = 1
    } else {
      ch = 2

      const [key, val] = args.slice(i, i + ch)
      const argName = strip(key, regKey)

      if (test(args[i + ch], regValue) && i + ch < l) {
        const list = [getValue(strip(val, regExp.COMMA))]

        while (test(args[i + ch], regValue) && i + ch < l) {
          list.push(getValue(strip(args[i + ch],regExp.COMMA)))
          ch += 1
        }

        parsedArgs[argName] = list
      } else if (val !== undefined && !test(val, regKey)) {
        parsedArgs[argName] = getValue(val)
      } else {
        parsedArgs[argName] = true

        ch = 1
      }
    }
  }

  return parsedArgs
}
