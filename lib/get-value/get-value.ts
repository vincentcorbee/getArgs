import { regExp } from '../constants'

const getValue = (value: any): any => {
  if (regExp.FLOAT.test(value)) {
    return parseFloat(value)
  }

  if (regExp.INT.test(value)) {
    return parseInt(value)
  }

  if (value === 'true') return true

  if (value === 'false') return false

  return value
}

export default getValue
