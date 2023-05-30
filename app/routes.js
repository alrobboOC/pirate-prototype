//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/beard', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var beard = req.session.data['beard']

  // Check whether the variable matches a condition
  if (beard == "yes"){
    // Send user to next page
    res.redirect('/crimes')
  } else {
    // Send user to ineligible page
    res.redirect('/fake-beard')
  }

})
