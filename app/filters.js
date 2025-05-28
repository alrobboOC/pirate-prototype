const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Define the 'plural' filter
addFilter('plural', function (word, count) {
  // Simple pluralisation: add 's' if count is not 1
  return count === 1 ? word : word + 's'
})
