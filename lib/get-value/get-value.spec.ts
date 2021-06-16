import getValue from './get-value'

describe('getValue', () => {
  test('should return a integer', () => {
    const expected = 1
    const provided = getValue('1')

    expect(provided).toEqual(expected)
  })

  test('should return a float', () => {
    const expected = 1.1
    const provided = getValue('1.1')

    expect(provided).toEqual(expected)
  })

  test('should return a string', () => {
    const expected = 'Hello'
    const provided = getValue('Hello')

    expect(provided).toEqual(expected)
  })

  test('should return a boolean true', () => {
    const expected = true
    const provided = getValue('true')

    expect(provided).toEqual(expected)
  })

  test('should return a boolean false', () => {
    const expected = false
    const provided = getValue('false')

    expect(provided).toEqual(expected)
  })
})