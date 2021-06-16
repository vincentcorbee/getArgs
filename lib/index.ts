import getValue from './get-value/get-value'
import { regExp } from './constants'
import { ParsedArgs } from './types'

export const getArgs = (delim = '-', args: string[] | string = process.argv.slice(2)): ParsedArgs => {
  args = Array.isArray(args) ? args : args.split(' ')

  let ch = 1

  const parsedArgs: ParsedArgs = {}
  const regKey = new RegExp(`^[^${delim}]`)
  const regDelim = new RegExp(`^${delim}`)

  for (let i = 0, l = args.length; i < l; i += ch) {
    if (!regDelim.test(args[i])) {
      parsedArgs[args[i]] = true

      ch = 1
    } else {
      ch = 2

      const [key, val] = args.slice(i, i + ch)
      const argName = key.replace(regDelim, '')

      if (regKey.test(args[i + ch]) && i + ch < l) {
        const list = [getValue(val.replace(regExp.COMMA, ''))]

        while (regKey.test(args[i + ch]) && i + ch < l) {
          list.push(getValue(args[i + ch].replace(regExp.COMMA, '')))
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
