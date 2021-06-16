# getArgs

Nodejs package for getting commandline arguments.

Usage

```javascript
const { getArgs } = require('get-args')

/* Choose a delimiter for defining the options on the commandline. */

const delimiter = '--'
const args = getArgs(delimiter)
```

```bash
node myscript.js --name Mike --age 20 --hobbies reading, writing, executing --noJoke
```

Will result in

```javascript
{
  name: 'Mike',
  age: 20,
  hobies: ['reading', 'writing', 'executing'],
  noJoke: true
}
```
