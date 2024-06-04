var quotes =
[
    {quote:"“Be yourself; everyone else is already taken.”", author:"Oscar Wilde"},
    {quote:"“So many books, so little time.”" , author:"Frank Zappa"},
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , author:"Albert Einstein"},
    {quote:"“A room without books is like a body without a soul.”" , author:"Marcus Tullius Cicero"},
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" , author:"Dr. Seuss"},
    {quote:"“You only live once, but if you do it right, once is enough.”" , author:"Mae West"},

];


function displayRandomQuote() 
{
   
    var randomIndex = Math.trunc(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    var quoteHTML = `
        <p>${randomQuote.quote}</p>
        <p>${randomQuote.author}</p>
    `;

    document.getElementById("quoteData").innerHTML = quoteHTML;
}