# getArgs

Nodejs package for getting commandline arguments.

Usage

```javascript
const { getArgs } = require('get-args')

/* Choose a delimiter for defining the options on the commandline. */

const delimiter = '--'
const args = getArgs(delimiter)
```

When parsing the arguments it will do the following:

```text
--name Mike -> name: "Mike" - argument value is of type string

--age 20 => age: 20 - argument value is of type integer

--amount 20.95 => amount: 20.95 - argument value is of type float

--hobbies painting, "playing guitar" => hobbies: [ "painting", "playing guitar" ] - argument value is of type
string[]

or without comma's

--hobbies painting "playing guitar" => hobbies: [ "painting", "playing guitar" ] - argument value is of type
string[]

--booleanValue => booleanValue: true - argument value is of type boolean
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
