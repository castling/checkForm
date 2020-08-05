let mailCheck = mail =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)

export default (value,rules) => {
  let res = {
    errors: [],
    valid: true,
  }

  for( let n = 0; n < rules.length; n++ ) {
    let rule = rules[n]
    if( rule.required ) {
      if( value==null || value=='' ) {
        res.errors.push(rule.message)
        res.valid = false
        return res
      }
    }
    if( rule.min ) {
      if( value.length < rule.min ) {
        res.errors.push(rule.message)
        res.valid = false
        return res
      }
    }
    if( rule.email ) {
      if( value && value.length && !mailCheck(value) ) {
        res.errors.push(rule.message)
        res.valid = false
        return res
      }
    }
    if( rule.validator ) {
      let error = rule.validator(value)
      if( error ) {
        res.errors.push(error)
        res.valid = false
        return res
      }
    }
  }

  return res
}
