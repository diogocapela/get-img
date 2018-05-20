let fs = require('fs');
let request = require('request');

let images = 802;

let downloadImages = function() {
	let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + images + '.png';
	let filePath = './img/' + image  + '.png';
    if(images > 0) {
        images = images - 1
		  request.head(url, function(err, res, body){
		  	console.log('Image #' + images);
		    console.log('content-type:', res.headers['content-type']);
		    console.log('content-length:', res.headers['content-length']);
		    request(url).pipe(fs.createWriteStream(filePath)).on('close', downloadImages);
		  });
    }
}

downloadImages();