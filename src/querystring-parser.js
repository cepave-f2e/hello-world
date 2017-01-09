let queryStringParser = function(url) {

  return fetch(url)
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {	   
	    console.log('parsed json', json)

	  }).catch(function(ex) {
	    console.log('parsing failed', ex)
	  })
}

module.exports = queryStringParser;