//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//



const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.use('/verison-1/', require('./views/verison-1/_routes'));
router.use('/verison-2/', require('./views/verison-2/_routes'));