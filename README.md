# notier
Simple promise enabled wrapper around notification library notie.


### Install
```bash
$ npm i -S notier
# or
$ yarn add notier
```

### Use
```js
var notier = require('notier')

// general notifier
notier('Hi there!')

// success type notification
notier.success('Item acquired successfully')

// error type notification
notier.error('Could not find any results!' )

// confirm
notier.confirm('Are you sure? This cannot be undone.')
  .then(data => {
    // user accepted
  })
  .reject(() => {
    // user rejected
  })
```


### API

**notier(message, opts)**  
`message` is self explanatory. `opts` is [notie](https://github.com/jaredreich/notie) options. Returns promise.

**notier.info(message, opts)**  
Info type notification.

**notier.success(message, opts)**  
Success type notification.

**notier.warning(message, opts)**  
Warning type notification.

**notier.error(message, opts)**  
Error type notification.

**notier.confirm(message, opts)**  
Confirm notification. Returned promise will resolve on accept.

**notier.setTexts({ submit, cancel })**  
Set global texts to be used in actions.


### Author
Ismail Demirbilek - [@dbtek](https://twitter.com/dbtek)