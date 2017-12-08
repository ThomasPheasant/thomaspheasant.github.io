// Randomize Header
//Store Headers
var header0 = 'I started out as a Computer Science Major, but then I turned to Visual Communication Design.';
var header1 = "I'm hoping one day to get a job in LA!";
var header2 = "I'm a college graduate of Eastern Washington University";

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