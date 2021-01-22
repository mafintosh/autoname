# autoname

Auto naming of objects for easier debugging.

```
npm install autoname
```

## Usage

``` js
const autoname = require('autoname')

autoname(someObject) // ClassName#id
autoname(someObject) // <same as above>
autoname(another) // AnotherClass#id
```

All state is stored in a WeakMap so nothing is modified, so you could
probably use this in an production env.

## License

MIT
