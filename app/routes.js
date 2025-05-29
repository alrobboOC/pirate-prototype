//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//



const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.use('/101/', require('./views/101/_routes'));
router.use('/101-add-to-list', require('./views/101-add-to-list/_routes'));

router.get('/', function (req, res) {
  res.render('/101-add-to-list/index')
})
