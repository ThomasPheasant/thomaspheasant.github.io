// Randomize Header
//Store Headers
var header0 = 'This is the portfolio portion of the website.';
var header1 = 'All the images below are projects Ive done showing my ability and creativity.';
var header2 = 'All images below were made by myself!';

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
console.log(numRand);

// Show Images
$('header').addClass('bg' + numRand);
// Show Headers
$('header p').text(eval("header" + numRand));


// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share: false,
    zoom: false,
});