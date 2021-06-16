import getValue from './get-value'

describe('getValue', () => {
  test('should return integer', () => {
    const expected = 1
    const provided = getValue('1')

    expect(provided).toEqual(expected)
  })

  test('should return float', () => {
    const expected = 1.1
    const provided = getValue('1.1')

    expect(provided).toEqual(expected)
  })

  test('should return string', () => {
    const expected = 'Hello'
    const provided = getValue('Hello')

    expect(provided).toEqual(expected)
  })
})