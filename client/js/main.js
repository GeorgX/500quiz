
var url = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=0Cjz9Rp5NCcqyT2xuuOQWgyYSIQDBiVvWwMo9I5a';

$(function() {

    $.get(url, function(data){

    var photos = data['photos'];

    for (var i=0; i < photos.length; i++ ) {
        //console.log(photos[i]);
        //var image = photos[i].image_url;
        console.log(photos[i]);
       // $('#main_content').append('<img src="'.image.'" />'); //'.photos[i].image_url.'
    }

    });

});
