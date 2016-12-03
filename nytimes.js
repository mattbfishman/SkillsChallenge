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
	  	NewYorkTimesReviews = result.results


	}).fail(function(err) {
	  throw err;
	});

}