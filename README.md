# checkForm

## Description:
formデータの簡易チェックを行うjsライブラリ

## Installation

```bash
npm i castling/checkForm
```

## Usage:

```javascript
import checkForm from 'castling/checkForm'

checkForm('a@b.co.jp',{
  required: true,
  email: true,
})    // -> true

checkForm('a@b',{
  required: true,
  email: true,
})    // -> false

```

# API

```javascript
checkForm(value,options)
```
* `value` `{String}` form value
* `options` `{Array<Object>}` validate conditions
  * `required` `{Boolean}`
  * `min` `{Number}`
  * `max` `{Number}`
  * `email` `{Boolean}`
  * `validator` `{Function}`
    * `value` `{String}`
    * return: `{Boolean}`
* return: `{Boolean}` `true` if `value` passed the conditions specified `options`, and `false` otherwise.
