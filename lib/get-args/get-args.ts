import getValue from '../get-value/get-value'
import { regExp } from '../constants'
import { ParsedArgs } from '../types'

const strip = (key: string, reg: RegExp) =>  key.replace(reg, '')

export const getArgs = (delim = '-', args: string[] | string = process.argv.slice(2)): ParsedArgs => {
  args = Array.isArray(args) ? args : args.split(' ')

  let ch = 1

  const parsedArgs: ParsedArgs = {}
  const regKey = new RegExp(`^[^${delim}]`)
  const regDelim = new RegExp(`^${delim}`)

  for (let i = 0, l = args.length; i < l; i += ch) {
    if (!regDelim.test(args[i]) || regDelim.test(args[i + 1])) {
      parsedArgs[strip(args[i], regDelim)] = true

      ch = 1
    } else {
      ch = 2

      const [key, val] = args.slice(i, i + ch)
      const argName = strip(key, regDelim)

      if (regKey.test(args[i + ch]) && i + ch < l) {
        const list = [getValue(strip(val, regExp.COMMA))]

        while (regKey.test(args[i + ch]) && i + ch < l) {
          list.push(getValue(strip(args[i + ch],regExp.COMMA)))
          ch += 1
        }

        parsedArgs[argName] = list
      } else if (val !== undefined && !regDelim.test(val)) {
        parsedArgs[argName] = getValue(val)
      } else {
        parsedArgs[argName] = true

        ch = 1
      }
    }
  }

  return parsedArgs
}
