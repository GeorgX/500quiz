
var url = 'https://api.500px.com/v1/photos?feature=popular&current_page=5&consumer_key=0Cjz9Rp5NCcqyT2xuuOQWgyYSIQDBiVvWwMo9I5a';

$(function() {

    $.get(url, function(data){

    var photos = data['photos'];

    counter = 0;


    for (var i=0; i < photos.length; i++ ) {
        //console.log(photos[i]);



        var image = photos[i].image_url;
        console.log(photos[i]);
        var img = $('<img class="image" src="'+image+'" />');
        img.click(( function() {

                if ( counter >= 3) {
                    return;
                }

                var index = i;
                var temp_img = img;
                return function () {
                  console.log(index);
                  temp_img.css("border", "solid 2px #EE0000");
                  counter++;
                  console.log(counter);
                };


          })()
        );

        $('#main_content').append(img); //'.photos[i].image_url.'
    }

    });

});
