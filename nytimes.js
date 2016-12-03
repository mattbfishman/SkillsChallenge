var NewYorkTimesReviews = []

var NYTSearch = function(searchQuery){

	var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
	nytUrl += '?' + $.param({
	  'api-key': "64483963a3d84321b85ce91504cd34f2",
	  'query' : searchQuery
	});
	$.ajax({
	  url: nytUrl,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  if(result.results.num_results)
	  	NewYorkTimesReviews = result.results;
	    let picks = 0;
	    for(i=0;i<result.results.length;i++){
	    	picks += result.results[i].critics_pick;
	    }
	  	document.getElementById('nyTimes').innerHTML =
	  		"<b>New York Times Critic's Picks:</b> " + picks + "/" + result.results.length;

	}).fail(function(err) {
	  throw err;
	});

}