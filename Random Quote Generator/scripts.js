const quotes = [
    "'I'm writing a book. I've got the page numbers done.' — Steven Wright",
    "'I used to sell furniture for a living. The trouble was, it was my own.' - Les Dawson",
    "'I find television very educational. Every time someone turns it on, I go in the other room and read a book.' - Groucho Marx",
    "'My fake plants died because I did not pretend to water them.' - Mitch Hedberg",
    "'I always wanted to be somebody, but now I realize I should have been more specific.' - Lily Tomlin",
];

function randomQuote(){
    var randomIndex = Math.floor(Math.random()* (quotes.length));
    document.getElementById('display-quote').innerHTML = quotes[randomIndex];
}


// debug
// console.log(randomQuote());

