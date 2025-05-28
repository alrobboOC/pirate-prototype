const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Irregular plural filter (only for 'person' in this case)
addFilter('plural', function (word, count) {
  if (word === 'person') {
    return count === 1 ? 'person' : 'people'
  }
  return count === 1 ? word : word + 's'
})

