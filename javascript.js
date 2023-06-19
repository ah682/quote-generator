var quotes = [
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"In the middle of every difficulty lies opportunity." - Albert Einstein',
    '"It always seems impossible until it\'s done." - Nelson Mandela',
    '"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean',
    '"The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it." - Jordan Belfort',
    '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
    '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill'
]

function newQuote() {
    // Get a random quote from the quotes array
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Split the quote into the text and the author
    var quoteParts = randomQuote.split(" - ");
    var quoteText = quoteParts[0];
    var quoteAuthor = quoteParts[1];
   
    // Display the quote text and author in your HTML elements
    $("#text").text(quoteText);
    $("#author").text(quoteAuthor);

     // Update the tweet button with the new quote text and author
     var tweetText = encodeURIComponent(quoteText + ' - ' + quoteAuthor);
     $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + tweetText);

     // Update the Tumblr link with the new quote text and author
    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(quoteAuthor) + '&content=' + encodeURIComponent(quoteText) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');

    // Fade in
    $('#text').fadeOut('slow', function() {
        $(this).fadeIn('slow');
    });

    $("#author").fadeOut('slow', function() {
        $(this).fadeIn('slow');
    });
}


$(document).ready(function() {
    // This code runs as soon as the document is ready
    newQuote();  // Display an initial quote

    // This code adds a click event listener to the button with id "new-quote"
    $("#new-quote").click(function() {
        newQuote();  // Display a new quote when the button is clicked
    });
});
