const assert = require('assert').strict
const { getArgs } = require('../dist')

const delimiter = '--'
const args = getArgs(delimiter)

assert.deepEqual(
  {
    name: 'Mike',
    age: 20,
    hobbies: ['reading', 'writing', 'executing'],
    noJoke: true,
  },
  args
)
