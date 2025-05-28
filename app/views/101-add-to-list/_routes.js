//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//



const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/start', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('name');
})

router.post('/name', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('rank');
})

router.post('/rank', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('beard');
})

router.post('/beard', function(request, response) {
  //the value of the page is stored in session.data('beard') will now pull that into a local variable to use in this post
  let beard = request.session.data['beard']

  // we now decided which page to send to mext
  if(beard == 'Yes'){ //they have a beard
    response.redirect('crimes')
  }
  else{
    response.redirect('fake-beard')
  }
})

router.post('/fake-beard', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('crimes');
})

router.post('/crimes', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('check-answers');
})

// router.post('/check-answers', function(request, response) {
//   // once the page is posted (submitted) we move to the next page
//   response.redirect('confirmation');
// })

router.post('/check-answers', function(request, response) { 
let temporaryArray = []
if(request.session.data['people']){
  temporaryArray = request.session.data['people']; 
}
let temporaryObject = {name: request.session.data['name'], rank: request.session.data['rank'], beard: request.session.data['beard'], crime: request.session.data['crime']};
temporaryArray.push(temporaryObject);
request.session.data['people'] = temporaryArray;
response.redirect("add-another");
});

router.post('/add-another', function(request, response) {
    if(request.session.data['addAnother']=='yes'){
        response.redirect("name");
    }
    else{
        response.redirect("confirmation");
    }
});

router.post('/confirmation', function(request, response) {
  // once the page is posted (submitted) we move to the next page
  response.redirect('/index');
})



module.exports = router;